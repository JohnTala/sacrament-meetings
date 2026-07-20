import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function AdminLayout({
  children,
}: Props) {
  return (
    <main className="mx-auto max-w-5xl px-6 py-10">
      <h1 className="mb-8 text-3xl font-bold text-blue-700">
        Admin
      </h1>

      {children}
    </main>
  );
}