
type TQuest = {
  id: string;
  title: string;
  previewImg: string;
  previewImgWebp: string;
  level: number;
  type: string;
  peopleMinMax: number[];
}

type TQuestFull = TQuest & {
  description: string;
coverImg: string;
coverImgWebp: string;
}

type TLocation = {
  address: string;
  coords: [number];
  };

type TSchedule = {
  time: string;
  isAvailable: boolean;
};

type TBookingQuest ={
    id: string;
    location: TLocation;
    slots: {
      today: TSchedule[];
      tomorrow: TSchedule[];
  };
};

export type { TQuest, TQuestFull, TBookingQuest };
