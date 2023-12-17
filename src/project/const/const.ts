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
  'Сложный',
] as const;


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

export { TOPICS, COMPLICATION, AppRoute, AuthorizationStatus };
