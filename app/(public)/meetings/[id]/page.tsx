import type { Metadata } from "next";
import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import { getMeetingById } from "@/lib/meetings-db";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

export async function generateMetadata({
  params,
}: Props): Promise<Metadata> {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    return {
      title: "Meeting Not Found",
      description: "The requested sacrament meeting could not be found.",
    };
  }

  return {
    title: `${meeting.date}`,
    description: `View the sacrament meeting details for ${meeting.date}, including speakers, hymns, prayers, and meeting leadership.`,
  };
}

export default async function MeetingPage({
  params,
}: Props) {
  const { id } = await params;

  const meetingId = Number(id);

  if (Number.isNaN(meetingId)) {
    notFound();
  }

  const meeting = await getMeetingById(meetingId);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}