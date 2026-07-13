import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export default function MeetingCard({ meeting }: MeetingCardProps) {
  return (
    <Link href={`/meetings/${meeting.id}`}>
      <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:shadow-md hover:border-blue-500">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-blue-700">
            {meeting.date}
          </h2>

          <span className="rounded bg-blue-100 px-3 py-1 text-sm font-medium text-blue-700 capitalize">
            {meeting.meetingType}
          </span>
        </div>

        <div className="mt-4 space-y-2 text-gray-700">
          <p>
            <span className="font-semibold">Presiding:</span>{" "}
            {meeting.presiding}
          </p>

          <p>
            <span className="font-semibold">Conducting:</span>{" "}
            {meeting.conducting}
          </p>

          <p>
            <span className="font-semibold">Speakers:</span>{" "}
            {meeting.speakers.length}
          </p>
        </div>

        <p className="mt-4 text-sm font-medium text-blue-600">
          View Meeting →
        </p>
      </article>
    </Link>
  );
}