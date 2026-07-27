"use server";

import { z } from "zod";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { State } from "./form-state";

import {
  insertMeeting,
  updateMeetingById,
  deleteMeetingById,
} from "@/lib/meetings-db";

import type {
  SacramentMeeting
} from "@/lib/types";

 const MeetingFormSchema = z.object({
  date: z.string().min(1, "Meeting date is required"),

  meetingType: z.enum([
    "testimony",
    "regular",
    "stake",
    "general",
    "special",
  ]),

  presiding: z
    .string()
    .min(1, "Presiding leader is required"),

  conducting: z
    .string()
    .min(1, "Conducting leader is required"),

  announcements: z.string().optional(),

  openingHymnNumber: z.coerce
    .number()
    .min(1, "Opening hymn number is required"),

  openingHymnTitle: z
    .string()
    .min(1, "Opening hymn title is required"),

  openingPrayer: z
    .string()
    .min(1, "Opening prayer is required"),

  wardBusiness: z.string().optional(),

  stakeBusiness: z.coerce.boolean(),

  sacramentHymnNumber: z.coerce
    .number()
    .min(1, "Sacrament hymn number is required"),

  sacramentHymnTitle: z
    .string()
    .min(1, "Sacrament hymn title is required"),

  speakerName: z
    .string()
    .min(1, "Speaker name is required"),

  speakerTopic: z.string().optional(),

  speakerType: z.enum([
    "speaker",
    "musical-number",
  ]),

  closingHymnNumber: z.coerce
    .number()
    .min(1, "Closing hymn number is required"),

  closingHymnTitle: z
    .string()
    .min(1, "Closing hymn title is required"),

  closingPrayer: z
    .string()
    .min(1, "Closing prayer is required"),
});



function parseAnnouncements(value?: string): string[] {
  if (!value) return [];

  return value
    .split("\n")
    .map((item) => item.trim())
    .filter(Boolean);
}

export async function createMeeting(
  _prevState: State,
  formData: FormData
): Promise<State> {

  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),

    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),
    openingPrayer: formData.get("openingPrayer"),

    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness") === "true",

    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),

    speakerName: formData.get("speakerName"),
    speakerTopic: formData.get("speakerTopic"),
    speakerType: formData.get("speakerType"),

    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),
    closingPrayer: formData.get("closingPrayer"),
  });


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the highlighted fields.",
    };
  }


  const data = validatedFields.data;


  const meeting: Omit<SacramentMeeting, "id"> = {
    date: data.date,
    meetingType: data.meetingType,
    presiding: data.presiding,
    conducting: data.conducting,

    announcements: parseAnnouncements(data.announcements),

    openingHymn: {
      number: data.openingHymnNumber,
      title: data.openingHymnTitle,
    },

    openingPrayer: data.openingPrayer,

    wardBusiness: data.wardBusiness
      ? [{ description: data.wardBusiness }]
      : [],

    stakeBusiness: data.stakeBusiness,

    sacramentHymn: {
      number: data.sacramentHymnNumber,
      title: data.sacramentHymnTitle,
    },

    speakers: [
      {
        name: data.speakerName,
        topic: data.speakerTopic ?? "",
        type: data.speakerType,
      },
    ],

    closingHymn: {
      number: data.closingHymnNumber,
      title: data.closingHymnTitle,
    },

    closingPrayer: data.closingPrayer,
  };


  try {
    await insertMeeting(meeting);

  } catch (error) {
    console.error("Create meeting failed:", error);

    return {
      errors: {},
      message: "Unable to create meeting. Please try again.",
    };
  }


  revalidatePath("/meetings");

  redirect("/meetings");
}
export async function updateMeeting(
  id: number,
  _prevState: State,
  formData: FormData
): Promise<State> {

  const validatedFields = MeetingFormSchema.safeParse({
    date: formData.get("date"),
    meetingType: formData.get("meetingType"),
    presiding: formData.get("presiding"),
    conducting: formData.get("conducting"),
    announcements: formData.get("announcements"),

    openingHymnNumber: formData.get("openingHymnNumber"),
    openingHymnTitle: formData.get("openingHymnTitle"),
    openingPrayer: formData.get("openingPrayer"),

    wardBusiness: formData.get("wardBusiness"),
    stakeBusiness: formData.get("stakeBusiness") === "true",

    sacramentHymnNumber: formData.get("sacramentHymnNumber"),
    sacramentHymnTitle: formData.get("sacramentHymnTitle"),

    speakerName: formData.get("speakerName"),
    speakerTopic: formData.get("speakerTopic"),
    speakerType: formData.get("speakerType"),

    closingHymnNumber: formData.get("closingHymnNumber"),
    closingHymnTitle: formData.get("closingHymnTitle"),
    closingPrayer: formData.get("closingPrayer"),
  });


  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
      message: "Please correct the highlighted fields.",
    };
  }


  const data = validatedFields.data;


  try {
    await updateMeetingById(id, {
      date: data.date,
      meetingType: data.meetingType,
      presiding: data.presiding,
      conducting: data.conducting,

      announcements: parseAnnouncements(data.announcements),

      openingHymn: {
        number: data.openingHymnNumber,
        title: data.openingHymnTitle,
      },

      openingPrayer: data.openingPrayer,

      wardBusiness: data.wardBusiness
        ? [{ description: data.wardBusiness }]
        : [],

      stakeBusiness: data.stakeBusiness,

      sacramentHymn: {
        number: data.sacramentHymnNumber,
        title: data.sacramentHymnTitle,
      },

      speakers: [
        {
          name: data.speakerName,
          topic: data.speakerTopic ?? "",
          type: data.speakerType,
        },
      ],

      closingHymn: {
        number: data.closingHymnNumber,
        title: data.closingHymnTitle,
      },

      closingPrayer: data.closingPrayer,
    });

  } catch (error) {
    console.error("Update meeting failed:", error);

    return {
      errors: {},
      message: "Unable to update meeting. Please try again.",
    };
  }


  revalidatePath("/meetings");

  redirect("/meetings");
}

export async function deleteMeeting(id: number) {
  try {
    await deleteMeetingById(id);

  } catch (error) {
    console.error("Delete meeting failed:", error);

    throw new Error("Unable to delete meeting. Please try again.");
  }

  revalidatePath("/meetings");

  redirect("/meetings");
}