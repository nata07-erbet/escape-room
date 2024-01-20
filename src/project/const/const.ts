import { LatLngTuple } from 'leaflet';
import { TComplication, TDate, TTopic } from '../types/types';

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

const COMPLICATIONS: TComplication[] = ['any', 'easy', 'medium', 'hard'];

const TopicNamesMap: Record<TTopic, string> = {
  allQuests: 'Все квесты',
  adventure: 'Приключения',
  horror: 'Ужасы',
  mystic: 'Мистика',
  detective: 'Детектив',
  'sci-fi': 'Sci-fi',
};

const ComplicationNamesMap: Record<TComplication, string> = {
  any: 'Любой',
  easy: 'Лёгкий',
  medium: 'Средний',
  hard: 'Сложный',
};

const ContactPosition: LatLngTuple = [59.969826, 30.308044];

enum AppRoute {
  Main = '/',
  Quest = '/quest',
  MyQuests = '/my-quests',
  Login = '/login',
  Booking = '/booking',
  Reservation = '/reservation',
  Contacts = '/contacts',
}

const enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  UnKnown = 'UNKNOWN',
}

const enum RequestStatus {
  Idle = 'Idle',
  Pending = 'Pending',
  Error = 'Error',
  Success = 'Success',
}

const enum NameSpace {
  Quests = 'Quests',
  Quest = 'Quest',
  BookingQuests = 'BookingQuests',
  Place = 'Place',
  InfoUserBooked = 'InfoUserBooked',
  UserAuthStatus = 'User',
  LoginServer = 'LoginServer',
  LogoutServer = 'LogoutServer',
}


export {
  TOPICS,
  COMPLICATIONS,
  AppRoute,
  AuthorizationStatus,
  DateNamesMap,
  TopicNamesMap,
  ComplicationNamesMap,
  RequestStatus,
  ContactPosition,
  NameSpace
};
