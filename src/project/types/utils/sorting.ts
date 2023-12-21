import { TQuest } from '../../types/types';
import { TopicMap, ComplicationMap} from '../../const/const';

const sortingByTopic: Record<string, (quests:TQuest[]) => TQuest[]> = {
  'Все квесты': (quests) => quests.filter((quest) => quest.type === TopicMap.allQuests),
  'Приключения': (quests) => quests.filter((quest) => quest.type === TopicMap.adventure),
  'Ужасы': (quests) => quests.filter((quest) => quest.type === TopicMap.horror),
  'Мистика': (quests) => quests.filter((quest) => quest.type === TopicMap.mystic),
  'Детектив': (quests) => quests.filter((quest) => quest.type === TopicMap.detective),
  'Sci-fi': (quests) => quests.filter((quest) => quest.type === TopicMap.sciFi)
};

const sortingByComplication:  Record<string, (quests:TQuest[]) => TQuest[]> = {
  'Любой': (quests) => quests.filter((quest) => quest.level === ComplicationMap.any),
  'Лёгкий': (quests) => quests.filter((quest) => quest.level === ComplicationMap.easy),
  'Средний': (quests) => quests.filter((quest) => quest.level === ComplicationMap.middle),
  'Сложный': (quests) => quests.filter((quest) => quest.level === ComplicationMap.hard),
};


export { sortingByTopic, sortingByComplication };
