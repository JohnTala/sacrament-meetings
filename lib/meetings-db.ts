import { neon } from "@neondatabase/serverless";
import type { SacramentMeeting } from "./types";

const sql = neon(process.env.DATABASE_URL!);

const ITEMS_PER_PAGE = 5;

export async function getMeetings(
  query: string = "",
  currentPage: number = 1
): Promise<SacramentMeeting[]> {
  const searchTerm = `%${query}%`;
  const offset = (currentPage - 1) * ITEMS_PER_PAGE;

  const rows = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS "date",
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE
      presiding ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm}
    ORDER BY date DESC
    LIMIT ${ITEMS_PER_PAGE}
    OFFSET ${offset};
  `;

  return rows as SacramentMeeting[];
}

export async function getMeetingsTotalPages(
  query: string = ""
): Promise<number> {
  const searchTerm = `%${query}%`;

  const rows = await sql`
    SELECT COUNT(*) AS count
    FROM meetings
    WHERE
      presiding ILIKE ${searchTerm}
      OR conducting ILIKE ${searchTerm}
      OR meeting_type ILIKE ${searchTerm}
      OR speakers::text ILIKE ${searchTerm};
  `;

  const count = Number((rows[0] as { count: string }).count);

  return Math.ceil(count / ITEMS_PER_PAGE);
}

export async function getMeetingById(
  id: number
): Promise<SacramentMeeting | null> {
  const rows = await sql`
    SELECT
      id,
      TO_CHAR(date, 'YYYY-MM-DD') AS "date",
      meeting_type AS "meetingType",
      presiding,
      conducting,
      announcements,
      opening_hymn AS "openingHymn",
      opening_prayer AS "openingPrayer",
      ward_business AS "wardBusiness",
      stake_business AS "stakeBusiness",
      sacrament_hymn AS "sacramentHymn",
      speakers,
      closing_hymn AS "closingHymn",
      closing_prayer AS "closingPrayer"
    FROM meetings
    WHERE id = ${id};
  `;

  return rows.length > 0 ? (rows[0] as SacramentMeeting) : null;
}

// -----------------------------------------------------------------------------
// Week 04 database mutation stubs
// -----------------------------------------------------------------------------

export async function addMeeting(
  _meeting: Omit<SacramentMeeting, "id">
): Promise<SacramentMeeting> {
  throw new Error("addMeeting: database implementation coming in Week 04");
}

export async function updateMeeting(
  _id: number,
  _updates: Partial<SacramentMeeting>
): Promise<SacramentMeeting | null> {
  throw new Error("updateMeeting: database implementation coming in Week 04");
}

export async function deleteMeeting(_id: number): Promise<boolean> {
  throw new Error("deleteMeeting: database implementation coming in Week 04");
}