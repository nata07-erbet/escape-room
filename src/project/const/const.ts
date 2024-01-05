import { TTopic, TComplication, TDate } from '../types/types';

const DateNamesMap: Record<TDate, string> = {
  today: 'Сегодня',
  tomorrow: 'Завтра',
};

const TOPICS: TTopic[] = [
  'allQuests',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sci-fi',
];

const TopicNamesMap: Record <TTopic, string > = {
  allQuests: 'Все квесты',
  adventure:  'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика' ,
  detective:  'Детектив',
  'sci-fi':  'Sci-fi',
};

const COMPLICATIONS: TComplication[] = [
  'any',
  'easy',
  'medium',
  'hard'
];

const ComplicationMamesMap: Record<TComplication, string> = {
  any: 'Любой',
  easy: 'Лёгкий',
  medium: 'Средний' ,
  hard: 'Сложный',
};

const ContactPosition = [
  59.969826,
  30.308044
];


enum AppRoute {
  Main = '/',
  Quest = '/quest',
  MyQuests = '/my-quests',
  Login = '/login',
  Booking ='/booking',
  Reservation ='/reservation',
  Contacts ='/contacts',
}

const enum AuthorizationStatus {
  Auth= 'AUTH',
  NoAuth= 'NO_AUTH',
  UnKnown= 'UNKNOWN',
}

const enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Error = 'Error',
  Success = 'Success'
}
export {
  DateNamesMap,
  TOPICS,
  TopicNamesMap,
  COMPLICATIONS,
  ComplicationMamesMap,
  AppRoute,
  AuthorizationStatus,
  RequestStatus,
  ContactPosition
};
