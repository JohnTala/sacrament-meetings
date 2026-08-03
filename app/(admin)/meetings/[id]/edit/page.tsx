import type { Metadata } from "next";
import { notFound } from "next/navigation";

import MeetingForm from "@/components/MeetingForm";
import { getMeetingById } from "@/lib/meetings-db";
import { updateMeeting } from "@/lib/actions";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const meeting = await getMeetingById(Number(id));

  if (!meeting) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  return {
    title: `Edit Meeting - ${meeting.date}`,
    description: `Edit the sacrament meeting scheduled for ${meeting.date}, including speakers, hymns, prayers, announcements, and meeting leadership.`,
  };
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