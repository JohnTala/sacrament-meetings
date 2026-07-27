import Link from "next/link";
import type { SacramentMeeting } from "@/lib/types";
import { deleteMeeting } from "@/lib/actions";
import { DeleteMeetingButton } from "@/components/DeleteMeetingButton";

interface MeetingCardProps {
  meeting: SacramentMeeting;
}

export function MeetingCard({
  meeting,
}: MeetingCardProps) {
  return (
    <article className="rounded-lg border border-gray-200 bg-white p-5 shadow-sm transition hover:border-blue-500 hover:shadow-md">

      <Link href={`/meetings/${meeting.id}`}  className="block">
        <div>
          <div className="flex items-center justify-between">
            <h2 className="text-xl font-semibold text-blue-700">
              {meeting.date}
            </h2>

            <span className="rounded bg-blue-100 px-3 py-1 text-sm font-medium capitalize text-blue-700">
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
        </div>
      </Link>

      <div className="mt-6 flex gap-3">
        <Link
          href={`/meetings/${meeting.id}/edit`}
          className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700"
        >
          Edit
        </Link>

        <form action={deleteMeeting.bind(null, meeting.id)}>
          <DeleteMeetingButton className="rounded bg-red-600 px-3 py-2 text-white hover:bg-red-700">
                Delete
          </DeleteMeetingButton>
        </form>
      </div>
    </article>
  );
}