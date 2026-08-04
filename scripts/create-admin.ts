import dotenv from "dotenv";
dotenv.config({ path: ".env.local" });

import { neon } from "@neondatabase/serverless";
import { hash } from "bcryptjs";

if (!process.env.DATABASE_URL) {
  throw new Error("DATABASE_URL is missing");
}

const sql = neon(process.env.DATABASE_URL);

async function createAdmin() {
  const email = "admin@example.com";

  const existingAdmin = await sql`
    SELECT id FROM users WHERE email = ${email}
  `;

  if (existingAdmin.length > 0) {
    console.log("Admin user already exists.");
    return;
  }

  const hashedPassword = await hash("Admin123!", 10);

  await sql`
    INSERT INTO users (name, email, password)
    VALUES (
      'Ward Administrator',
      ${email},
      ${hashedPassword}
    );
  `;

  console.log("Admin user created.");
}

createAdmin().catch((error) => {
  console.error("Failed to create admin:", error);
  process.exit(1);
});