import { redirect } from "next/navigation";
import { getMeetings } from "@/lib/meetings-db";

export default async function CurrentMeetingPage() {
  const today = new Date();

  const dayOfWeek = today.getDay();

  const sunday = new Date(today);

  sunday.setDate(today.getDate() - dayOfWeek);

  const isoDate = sunday.toISOString().split("T")[0];

  const meetings = await getMeetings();

  const meeting = meetings.find(
    (meeting) => meeting.date === isoDate
  );

  if (meeting) {
    redirect(`/meetings/${meeting.id}`);
  }

  redirect("/meetings");
}