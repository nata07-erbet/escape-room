import { TopicMap, ComplicationMap } from '../const/const';

type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: 'easy' |'medium' | 'hard';
  type: 'adventures'| 'horror' | 'mystic' |'detective' | 'sci-fi';
  peopleMinMax: number[];
}

type TQuestFull = TQuest & {
  description: string;
  coverImg: string;
  coverImgWebp: string;
};

type TLocation = {
  address: string;
  coords: number[];
  };

type TSchedule = {
  time: string;
  isAvailable: boolean;
};

type TSlots ={
  today: TSchedule[];
  tomorrow: TSchedule[];
};

type TPostBookingQuest = {
date: 'today' | 'tomorrow'; // в спеке enum
time: string;
contactPerson: string;
phone: number; //в спеке string
withChildren: boolean;
peopleCount: number;
placeId: string;
};

type TGetBookingQuest = {
  id: string;
  location: TLocation;
  slots: TSlots;
  today: TSchedule[];
  tomorrow: TSchedule[];
};

type ResponseQuest = Omit<TPostBookingQuest, 'placeId'>

type TResponseBookedQuest = ResponseQuest & {
  id: string;
  location: TLocation;
  quest: TQuest;
}

type TTopic = keyof typeof TopicMap;
type TComplication = keyof typeof ComplicationMap;


export type { TQuest, TQuestFull, TResponseBookedQuest, TGetBookingQuest, TTopic, TComplication };
