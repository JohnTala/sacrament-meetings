import { notFound } from "next/navigation";

import MeetingForm from "@/components/MeetingForm";
import { getMeetingById } from "@/lib/meetings-db";
import { updateMeeting } from "@/lib/actions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export default async function EditMeetingPage({
  params,
}: Props) {
  const { id } = await params;

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    notFound();
  }

  const updateMeetingWithId = updateMeeting.bind(
    null,
    meeting.id
  );

  return (
    <section className="mx-auto max-w-4xl p-8">
      <h1 className="mb-6 text-3xl font-bold">
        Edit Meeting
      </h1>

      <MeetingForm
        meeting={meeting}
        action={updateMeetingWithId}
      />
    </section>
  );
}