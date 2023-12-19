import { TReservation } from '../types/types';

const TOPICS = [
  'Все квесты',
  'Приключения',
  'Ужасы',
  'Мистика',
  'Детектив',
  'Sci-fi',
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
  Any: 'Любой',
  Easy: 'Лёгкий',
  Middle: 'Средний',
  Hard: 'Сложный'
};

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

export { TOPICS, COMPLICATION, AppRoute, AuthorizationStatus, TopicMap, ComplicationMap };
