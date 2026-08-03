import type { Metadata } from "next";
import MeetingForm from "@/components/MeetingForm";
import { createMeeting } from "@/lib/actions";

export const metadata: Metadata = {
  title: "Create Meeting",
  description:
    "Create a new sacrament meeting by entering meeting details, speakers, hymns, prayers, and announcements.",
};

export default function NewMeetingPage() {
  return (
    <section className="mx-auto max-w-4xl p-8">
      <h1 className="mb-8 text-3xl font-bold">
        Create Meeting
      </h1>

      <MeetingForm action={createMeeting} />
    </section>
  );
}