import type { Metadata } from "next";

import LoginForm from "@/components/auth/LoginForm";

export const metadata: Metadata = {
  title: "Sign In",
  description:
    "Sign in to manage sacrament meetings and administer ward meeting schedules.",
};

export default function LoginPage() {
  return (
    <section className="mx-auto flex min-h-[70vh] max-w-md items-center">
      <div className="w-full rounded-xl border bg-white p-8 shadow">
        <h1 className="mb-2 text-3xl font-bold text-slate-900">
          Sign In
        </h1>

        <p className="mb-8 text-slate-600">
          Sign in to create, edit, and manage sacrament meetings.
        </p>

        <LoginForm />
      </div>
    </section>
  );
}