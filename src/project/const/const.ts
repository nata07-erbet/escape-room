
const TOPICS = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
] as const;

const COMPLICATION = [
  'Любой',
  'Лёгкий',
  'Средний',
  'Сложный'
] as const;


const TopicMap = {
  allQuests: 'Все квесты',
  adventure:'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  sciFi: 'Sci-fi',
};

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
export { TOPICS, COMPLICATION, AppRoute, AuthorizationStatus, TopicMap, ComplicationMap, RequestStatus};
