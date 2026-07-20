import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function MeetingsLayout({
  children,
}: Props) {
  return (
    <main className="mx-auto max-w-6xl px-6 py-10">
      {children}
    </main>
  );
}