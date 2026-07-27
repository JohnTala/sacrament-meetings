export type State = {
  errors?: {
    date?: string[];
    meetingType?: string[];
    presiding?: string[];
    conducting?: string[];
    announcements?: string[];

    openingHymnNumber?: string[];
    openingHymnTitle?: string[];
    openingPrayer?: string[];

    wardBusiness?: string[];
    stakeBusiness?: string[];

    sacramentHymnNumber?: string[];
    sacramentHymnTitle?: string[];

    speakerName?: string[];
    speakerTopic?: string[];
    speakerType?: string[];

    closingHymnNumber?: string[];
    closingHymnTitle?: string[];
    closingPrayer?: string[];
  };

  message?: string;
};