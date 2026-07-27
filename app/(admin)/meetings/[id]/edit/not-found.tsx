import Link from "next/link";

export default function NotFound() {
  return (
    <main className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-4xl font-bold text-red-600">
        Meeting not found
      </h1>

      <p className="mt-4 text-gray-600">
        The meeting you are looking for does not exist.
      </p>

      <Link
        href="/meetings"
        className="mt-8 inline-block rounded bg-blue-600 px-5 py-3 text-white"
      >
        Back to Meetings
      </Link>
    </main>
  );
}