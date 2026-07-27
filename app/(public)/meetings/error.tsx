"use client";

import Link from "next/link";

interface Props {
  error: Error;
  reset: () => void;
}

export default function Error({
  error,
  reset,
}: Props) {
  return (
    <main className="mx-auto max-w-2xl p-10 text-center">
      <h1 className="text-3xl font-bold text-red-600">
        Something went wrong
      </h1>

      <p className="mt-4 text-gray-600">
        {error.message}
      </p>

      <div className="mt-8 flex justify-center gap-4">
        <button
          onClick={() => reset()}
          className="rounded bg-blue-600 px-4 py-2 text-white"
        >
          Try Again
        </button>

        <Link
          href="/meetings"
          className="rounded bg-gray-700 px-4 py-2 text-white"
        >
          Back to Meetings
        </Link>
      </div>
    </main>
  );
}