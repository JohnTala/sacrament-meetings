import Image from "next/image";

import { getMeetings, getMeetingsTotalPages } from "@/lib/meetings-db";
import { MeetingSearch } from "@/components/MeetingSearch";
import {MeetingCard } from "@/components/MeetingCard";
import { Pagination } from "@/components/Pagination";

export default async function MeetingsPage(props: {
  searchParams?: Promise<{ query?: string; page?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.query ?? "";
  const currentPage = Number(searchParams?.page) || 1;

  const [meetings, totalPages] = await Promise.all([
    getMeetings(query, currentPage),
    getMeetingsTotalPages(query),
  ]);

  return (
    <main className="min-h-screen bg-slate-50">
      {/* Hero Section */}
      <section className="relative h-72 md:h-96">
        <Image
          src="/sacrament-temple.jpg"
          alt="Sacrament Meeting"
          fill
          priority
          className="object-cover"
        />

        <div className="absolute inset-0 bg-black/50" />

        <div className="absolute inset-0 flex flex-col items-center justify-center px-6 text-center">
          <h1 className="text-4xl font-bold text-white md:text-5xl">
            Sacrament Meetings
          </h1>

          <p className="mt-4 max-w-2xl text-lg text-gray-200">
            Browse upcoming and past sacrament meetings, search by leader,
            speaker, or meeting type, and view complete meeting details.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-10">
        {/* Search */}
        <div className="mb-10 rounded-xl bg-white p-6 shadow">
          <h2 className="mb-4 text-xl font-semibold text-slate-800">
            Search Meetings
          </h2>

          <MeetingSearch />
        </div>

        {/* Results */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-slate-800">
            Available Meetings
          </h2>

          <span className="text-sm text-gray-500">
            {meetings.length} meeting{meetings.length !== 1 ? "s" : ""}
          </span>
        </div>

        {meetings.length === 0 ? (
          <div className="rounded-xl bg-white p-12 text-center shadow">
            <h3 className="text-2xl font-semibold text-gray-700">
              No meetings found
            </h3>

            <p className="mt-3 text-gray-500">
              Try searching with a different speaker, leader, or meeting type.
            </p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {meetings.map((meeting) => (
              <MeetingCard key={meeting.id} meeting={meeting} />
            ))}
          </div>
        )}

        {/* Pagination */}
        <div className="mt-12 flex justify-center">
          <Pagination totalPages={totalPages} />
        </div>
      </section>
    </main>
  );
}