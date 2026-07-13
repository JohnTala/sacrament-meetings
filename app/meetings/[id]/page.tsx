import { notFound } from "next/navigation";
import MeetingDetail from "@/components/MeetingDetail";
import type { SacramentMeeting } from "@/lib/types";

interface Props {
  params: Promise<{
    id: string;
  }>;
}

async function getMeeting(id: string) {
  const response = await fetch(
    `http://localhost:3000/api/meetings/${id}`,
    {
      cache: "no-store",
    }
  );

  if (response.status === 404) {
    return null;
  }

  if (!response.ok) {
    throw new Error("Failed to load meeting.");
  }

  return response.json() as Promise<SacramentMeeting>;
}

export default async function MeetingPage({
  params,
}: Props) {
  const { id } = await params;

  const meeting = await getMeeting(id);

  if (!meeting) {
    notFound();
  }

  return <MeetingDetail meeting={meeting} />;
}