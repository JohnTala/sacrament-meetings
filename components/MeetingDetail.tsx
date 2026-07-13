import type { SacramentMeeting } from "@/lib/types";

interface MeetingDetailProps {
  meeting: SacramentMeeting;
}

export default function MeetingDetail({ meeting }: MeetingDetailProps) {
  return (
    <section className="mx-auto max-w-4xl rounded-lg bg-white p-8 shadow-md">
      <h1 className="mb-6 text-3xl font-bold text-blue-700">
        Sacrament Meeting
      </h1>

      <div className="space-y-4">
        <p><strong>Date:</strong> {meeting.date}</p>
        <p><strong>Meeting Type:</strong> {meeting.meetingType}</p>
        <p><strong>Presiding:</strong> {meeting.presiding}</p>
        <p><strong>Conducting:</strong> {meeting.conducting}</p>

        <hr />

        <h2 className="text-xl font-semibold">Opening Exercises</h2>

        <p>
          <strong>Opening Hymn:</strong>{" "}
          #{meeting.openingHymn.number} — {meeting.openingHymn.title}
        </p>

        <p>
          <strong>Opening Prayer:</strong> {meeting.openingPrayer}
        </p>

        <hr />

        <h2 className="text-xl font-semibold">Ward Business</h2>

        {meeting.wardBusiness.length > 0 ? (
          <ul className="list-disc pl-6">
            {meeting.wardBusiness.map((item, index) => (
              <li key={index}>{item.description}</li>
            ))}
          </ul>
        ) : (
          <p>No ward business.</p>
        )}

        <p>
          <strong>Stake Business:</strong>{" "}
          {meeting.stakeBusiness ? "Yes" : "No"}
        </p>

        <hr />

        <h2 className="text-xl font-semibold">Sacrament Hymn</h2>

        <p>
          #{meeting.sacramentHymn.number} — {meeting.sacramentHymn.title}
        </p>

        <hr />

        <h2 className="text-xl font-semibold">Speakers</h2>

        {meeting.speakers.length > 0 ? (
          <ul className="space-y-2">
            {meeting.speakers.map((speaker, index) => (
              <li
                key={index}
                className="rounded bg-gray-100 p-3"
              >
                <p>
                  <strong>{speaker.name}</strong>
                </p>

                <p>Topic: {speaker.topic || "N/A"}</p>

                <p>Type: {speaker.type}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No scheduled speakers.</p>
        )}

        <hr />

        <h2 className="text-xl font-semibold">Closing Exercises</h2>

        <p>
          <strong>Closing Hymn:</strong>{" "}
          #{meeting.closingHymn.number} — {meeting.closingHymn.title}
        </p>

        <p>
          <strong>Closing Prayer:</strong> {meeting.closingPrayer}
        </p>

        <hr />

        <h2 className="text-xl font-semibold">Announcements</h2>

        {meeting.announcements?.length ? (
          <ul className="list-disc pl-6">
            {meeting.announcements.map((announcement, index) => (
              <li key={index}>{announcement}</li>
            ))}
          </ul>
        ) : (
          <p>No announcements.</p>
        )}
      </div>
    </section>
  );
}