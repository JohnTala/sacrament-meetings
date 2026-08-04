import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

import { verifyUser } from "@/lib/users-db";

console.log("AUTH_SECRET loaded:", !!process.env.AUTH_SECRET);

export const { handlers, auth, signIn, signOut } = NextAuth({
  secret: process.env.AUTH_SECRET,

  session: {
    strategy: "jwt",
  },

  providers: [
    Credentials({
      credentials: {
        email: {},
        password: {},
      },

      async authorize(credentials) {
        const email = credentials.email as string;
        const password = credentials.password as string;

        if (!email || !password) {
          return null;
        }

        const user = await verifyUser(email, password);

        if (!user) {
          return null;
        }

        return {
          id: String(user.id),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
});