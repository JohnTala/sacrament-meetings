import type { SacramentMeeting } from "./types";

const meetings: SacramentMeeting[] = [
  {
    id: 1,
    date: "2026-05-03",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Lawrence",
    openingHymn: { number: 2, title: "The Spirit of God" },
    openingPrayer: "Sister Williams",
    wardBusiness: [
      {
        description: "Sustaining of new Primary president",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 169,
      title: "In Remembrance of Thy Suffering",
    },
    speakers: [
      {
        name: "Sister Brown",
        topic: "Faith in Jesus Christ",
        type: "speaker",
      },
      {
        name: "Youth Choir",
        topic: "",
        type: "musical-number",
      },
    ],
    closingHymn: {
      number: 31,
      title: "O God, Our Help in Ages Past",
    },
    closingPrayer: "Brother Davis",
    announcements: ["Ward temple night: May 10"],
  },
  {
    id: 2,
    date: "2026-05-10",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Nhanga",
    openingHymn: {
      number: 19,
      title: "We Thank Thee, O God, for a Prophet",
    },
    openingPrayer: "Brother White",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 175,
      title: "O God, the Eternal Father",
    },
    speakers: [
      {
        name: "Brother Clark",
        topic: "Service",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 85,
      title: "How Firm a Foundation",
    },
    closingPrayer: "Sister Taylor",
    announcements: ["Youth activity on Friday"],
  },
  {
    id: 3,
    date: "2026-05-17",
    meetingType: "testimony",
    presiding: "Bishop Smith",
    conducting: "Brother Jones",
    openingHymn: {
      number: 1,
      title: "The Morning Breaks",
    },
    openingPrayer: "Brother Wilson",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 190,
      title: "In Memory of the Crucified",
    },
    speakers: [],
    closingHymn: {
      number: 152,
      title: "God Be with You Till We Meet Again",
    },
    closingPrayer: "Sister Hall",
    announcements: ["Fast offerings next Sunday"],
  },
  {
    id: 4,
    date: "2026-05-24",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Young",
    openingHymn: {
      number: 100,
      title: "Nearer, My God, to Thee",
    },
    openingPrayer: "Brother Green",
    wardBusiness: [
      {
        description: "Missionary farewell announcement",
      },
    ],
    stakeBusiness: false,
    sacramentHymn: {
      number: 182,
      title: "We'll Sing All Hail to Jesus' Name",
    },
    speakers: [
      {
        name: "Sister Evans",
        topic: "Charity",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 304,
      title: "Teach Me to Walk in the Light",
    },
    closingPrayer: "Brother Scott",
    announcements: ["Ward picnic next Saturday"],
  },
  {
    id: 5,
    date: "2026-05-31",
    meetingType: "regular",
    presiding: "Bishop Smith",
    conducting: "Brother Miller",
    openingHymn: {
      number: 134,
      title: "I Believe in Christ",
    },
    openingPrayer: "Sister Johnson",
    wardBusiness: [],
    stakeBusiness: false,
    sacramentHymn: {
      number: 196,
      title: "Jesus, Once of Humble Birth",
    },
    speakers: [
      {
        name: "Brother Lee",
        topic: "Hope in Christ",
        type: "speaker",
      },
    ],
    closingHymn: {
      number: 136,
      title: "I Know That My Redeemer Lives",
    },
    closingPrayer: "Brother Moore",
    announcements: ["Temple recommend interviews this week"],
  },
];

export function getMeetings(date?: string | null): SacramentMeeting[] {
  if (date) {
    return meetings.filter((meeting) => meeting.date === date);
  }

  return meetings;
}

export function getMeetingById(id: number): SacramentMeeting | null {
  return meetings.find((meeting) => meeting.id === id) ?? null;
}

/* Optional mutation functions (for future assignments)

export function addMeeting(meeting: SacramentMeeting): void {
  meetings.push(meeting);
}

export function updateMeeting(
  id: number,
  updatedMeeting: Partial<SacramentMeeting>
): SacramentMeeting | null {
  const meeting = meetings.find((m) => m.id === id);

  if (!meeting) return null;

  Object.assign(meeting, updatedMeeting);

  return meeting;
}

export function deleteMeeting(id: number): boolean {
  const index = meetings.findIndex((m) => m.id === id);

  if (index === -1) return false;

  meetings.splice(index, 1);

  return true;
}*/