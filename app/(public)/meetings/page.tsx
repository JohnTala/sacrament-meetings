import Hero from "@/components/Hero";
import MeetingCard from "@/components/MeetingCard";
import { getMeetings } from "@/lib/meetings-db";

export default async function HomePage() {
  const meetings = await getMeetings();

  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-10">
        <h2 className="mb-6 text-2xl font-bold text-blue-700">
          Upcoming Meetings
        </h2>

        {meetings.length === 0 ? (
          <p className="text-gray-600">
            No upcoming meetings found.
          </p>
        ) : (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {meetings.map((meeting) => (
              <MeetingCard
                key={meeting.id}
                meeting={meeting}
              />
            ))}
          </div>
        )}
      </section>
    </>
  );
}