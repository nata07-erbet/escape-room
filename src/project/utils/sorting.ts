import { TQuest } from '../types/types';
import { TopicMapForSorting, ComplicationMapForSorting } from '../const/const';
import { TTopic, TComplication } from '../types/types';


const sortingByTopic: Record<TTopic, (quests:TQuest[]) => TQuest[]> = {
  allQuests: (quests:TQuest[]) => quests.filter((quest: TQuest) => quest.type === TopicMapForSorting.allQuests),
  adventure: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.adventure),
  horror: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.horror),
  mystic: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.mystic),
  detective: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.detective),
  sciFi: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.sciFi)
//
};


const sortingByComplication: Record<TComplication, (quests:TQuest[]) => TQuest[]> = {
  any: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMapForSorting.any),
  easy: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMapForSorting.easy),
  middle: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMapForSorting.middle),
  hard: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMapForSorting.hard),
};


export { sortingByTopic, sortingByComplication };
