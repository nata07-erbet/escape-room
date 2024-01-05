import { LatLngTuple } from 'leaflet';

type TDate = 'today' | 'tomorrow';
type TComplication = 'any' | 'easy' |'medium' | 'hard';
type TTopic = 'allQuests' | 'adventures'| 'horror' | 'mystic' |'detective' | 'sci-fi';

type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: Exclude<TComplication, 'any' >;
  type: Exclude<TTopic, 'allQuests'> ;
  peopleMinMax: number[];
}

type TQuestFull = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

type TLocation = {
  address: string;
  coords: LatLngTuple;
  };

type TSchedule = {
  time: string;
  isAvailable: boolean;
};

type TQuestPlace = {
  id: string;
  location: TLocation;
  slots: TSlots;
};

type TGetBookingQuest = TQuestPlace[];
type TSlots = Record<TDate, TSchedule[] >

type TPostBookingQuest = {
date: TDate;
time: string;
contactPerson: string;
phone: string;
withChildren: boolean;
peopleCount: number;
placeId: string;
};


type ResponseQuest = Omit<TPostBookingQuest, 'placeId'>

type TResponseBookedQuest = ResponseQuest & {
  id: string;
  location: TLocation;
  quest: TQuest;
}

export type {
  TQuest,
  TQuestFull,
  TResponseBookedQuest,
  TGetBookingQuest,
  TTopic,
  TComplication,
  TDate,
  TLocation,
  TSchedule,
  TQuestPlace,
  TPostBookingQuest,
};
