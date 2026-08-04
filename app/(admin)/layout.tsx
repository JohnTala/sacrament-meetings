import type { ReactNode } from "react";
import { redirect } from "next/navigation";

import { auth } from "@/auth";

interface Props {
  children: ReactNode;
}

export default async function AdminLayout({
  children,
}: Props) {
  const session = await auth();

  if (!session?.user) {
    redirect("/login");
  }

  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-blue-700">
        Admin
      </h1>

      {children}
    </main>
  );
}