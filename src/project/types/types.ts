import { LatLngTuple } from 'leaflet';

type TTopic =
  | 'allQuests'
  | 'adventure'
  | 'horror'
  | 'mystic'
  | 'detective'
  | 'sci-fi';

type TComplication = 'any' | 'easy' | 'middle' | 'hard';

type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<TComplication, 'any'>;
  type: Exclude<TTopic, 'allQuests'>;
  peopleMinMax: number[];
};

type TQuestFull = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

type TLocation = {
  address: string;
  coords: LatLngTuple;
};

type TDate = 'today' | 'tomorrow';

type TSchedule = {
  time: string;
  isAvailable: boolean;
};

type TSlots = Record<TDate, TSchedule[]>;

type TPostBookingQuest = {
  date: TDate; // в спеке enum
  time: string;
  contactPerson: string;
  phone: string;
  withChildren: boolean;
  peopleCount: number;
  placeId: string;
};

type TQuestPlace = {
  id: string;
  location: TLocation;
  slots: TSlots;
};

type TGetBookingQuest = TQuestPlace[];

type ResponseQuest = Omit<TPostBookingQuest, 'placeId'>;

type TResponseBookedQuest = ResponseQuest & {
  id: string;
  location: TLocation;
  quest: TQuest;
};

export type {
  TQuest,
  TQuestFull,
  TResponseBookedQuest,
  TPostBookingQuest,
  TGetBookingQuest,
  TQuestPlace,
  TDate,
  TTopic,
  TComplication,
  TLocation,
};
