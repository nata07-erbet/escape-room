
const TOPICS = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
] as const;

const TOPICS_FOR_SORTING = [
  'allQuests',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sciFi',
] as const;

const COMPLICATION = [
  'Любой',
  'Лёгкий',
  'Средний',
  'Сложный'
] as const;

const COMPLICATION_FOR_SORTING = [
  'allQuests',
  'adventure',
  'horror',
  'mystic',
  'detective',
  'sciFi'
] as const;

const TopicMapForSorting = {
  allQuests: 'allQuests',
  adventure:'adventure',
  horror: 'horror',
  mystic: 'mystic',
  detective: 'detective',
  sciFi: 'sciFi',
} as const;

const TopicMap = {
  allQuests: 'Все квесты',
  adventure:'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi',
};

const ComplicationMapForSorting = {
  any: 'any',
  easy: 'easy',
  middle: 'middle',
  hard: 'hard'
} as const;

const ComplicationMap = {
  any: 'Любой',
  easy: 'Лёгкий',
  middle: 'Средний',
  hard: 'Сложный'
};


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
export { TOPICS, COMPLICATION, TOPICS_FOR_SORTING, COMPLICATION_FOR_SORTING, AppRoute, AuthorizationStatus, TopicMap, TopicMapForSorting, ComplicationMap,ComplicationMapForSorting, RequestStatus};
