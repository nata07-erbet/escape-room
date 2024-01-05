import { TQuest } from '../types/types';
import { TopicNamesMap, ComplicationMamesMap } from '../const/const';
import { TTopic, TComplication } from '../types/types';


const sortingByTopic: Record<TTopic, (quests:TQuest[]) => TQuest[]> = {
  allQuests: (quests:TQuest[]) => quests.filter((quest: TQuest) => quest.type === TopicNamesMap.allQuests),
  adventures: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicNamesMap.adventures),
  horror: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicNamesMap.horror),
  mystic: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicNamesMap.mystic),
  detective: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicNamesMap.detective),
  ['sci-fi']: (quests:TQuest[]) => quests.filter((quest:TQuest) => quest.type === TopicNamesMap['sci-fi'])
//
};


const sortingByComplication: Record<TComplication, (quests:TQuest[]) => TQuest[]> = {
  any: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMamesMap.any),
  easy: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMamesMap.easy),
  medium: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMamesMap.medium),
  hard: (quests:TQuest[]) => quests.filter((quest) => quest.level === ComplicationMamesMap.hard),
};


export { sortingByTopic, sortingByComplication };
