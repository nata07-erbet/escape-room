
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

export type { TQuest, TQuestFull };
