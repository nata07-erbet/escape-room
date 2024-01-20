import { TQuest } from '../types/user.types';
import { TTopic, TComplication } from '../types/user.types';


const filterByTopic: Record<TTopic, (quests:TQuest[]) => TQuest[]> = {
  allQuests: (quests:TQuest[]) => quests.slice(),
  adventure: (quests:TQuest[]) =>
    quests.filter((quest:TQuest) => quest.type === 'adventure'),
  horror: (quests:TQuest[]) =>
    quests.filter((quest:TQuest) => quest.type === 'horror'),
  mystic: (quests:TQuest[]) =>
    quests.filter((quest:TQuest) => quest.type === 'horror'),
  detective: (quests:TQuest[]) =>
    quests.filter((quest:TQuest) => quest.type === 'detective'),
  ['sci-fi']: (quests:TQuest[]) =>
    quests.filter((quest:TQuest) => quest.type === 'sci-fi')
};


const filterByComplication: Record<TComplication, (quests:TQuest[]) => TQuest[]> = {
  any: (quests:TQuest[]) => quests.slice(),
  easy: (quests:TQuest[]) =>
    quests.filter((quest) => quest.level === 'easy'),
  medium: (quests:TQuest[]) =>
    quests.filter((quest) => quest.level === 'medium'),
  hard: (quests:TQuest[]) =>
    quests.filter((quest) => quest.level === 'hard'),
};


export { filterByTopic, filterByComplication };
