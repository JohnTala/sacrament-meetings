import Link from "next/link";

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-6">
      <h1 className="text-4xl font-bold">Sacrament Meetings</h1>
      <p>Welcome to the Sacrament Meetings application.</p>

      <Link
        href="/meetings"
        className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
      >
        View Meetings
      </Link>
    </main>
  );
}