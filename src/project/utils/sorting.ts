import { TQuest } from '../types/types';
import { TopicMapForSorting, ComplicationMapForSorting } from '../const/const';
import { TTopic, TComplication } from '../types/types';


const sortingByTopic: Record<TTopic, (quests:TQuest[]) => TQuest[]> = {
  allQuests: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.allQuests),
  adventure: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.adventure),
  horror: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.horror),
  mystic: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.mystic),
  detective: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.detective),
  sciFi: (quests) => quests.filter((quest:TQuest) => quest.type === TopicMapForSorting.sciFi)
};


const sortingByComplication: Record<TComplication, (quests:TQuest[]) => TQuest[]> = {
  any: (quests) => quests.filter((quest) => quest.level === ComplicationMapForSorting.any),
  easy: (quests) => quests.filter((quest) => quest.level === ComplicationMapForSorting.easy),
  middle: (quests) => quests.filter((quest) => quest.level === ComplicationMapForSorting.middle),
  hard: (quests) => quests.filter((quest) => quest.level === ComplicationMapForSorting.hard),
};


export { sortingByTopic, sortingByComplication };
