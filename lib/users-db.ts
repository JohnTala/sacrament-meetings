import { sql } from "./db";
import { compare } from "bcryptjs";

import type { User } from "./types";

/**
 * Get a user by email.
 */
export async function getUserByEmail(
  email: string
): Promise<User | null> {
  const rows = await sql`
    SELECT
      id,
      name,
      email,
      password
    FROM users
    WHERE email = ${email};
  `;

  return rows.length > 0 ? (rows[0] as User) : null;
}

/**
 * Verify a user's password.
 */
export async function verifyUser(
  email: string,
  password: string
): Promise<User | null> {
  const user = await getUserByEmail(email);

  if (!user) {
    return null;
  }

  const validPassword = await compare(
    password,
    user.password
  );

  if (!validPassword) {
    return null;
  }

  return user;
}