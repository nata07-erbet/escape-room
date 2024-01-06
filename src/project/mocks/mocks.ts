import { faker } from '@faker-js/faker';

import { TOPICS, COMPLICATIONS } from '../const/const';
import {
  TGetBookingQuest,
  TLocation,
  TPostBookingQuest,
  TQuest,
  TQuestFull,
  TQuestPlace,
  TResponseBookedQuest,
} from '../types/types';

const CARDS_COUNT = faker.number.int({ min: 25, max: 35 });

const getMock = (): TQuest => ({
  id: faker.string.uuid(),
  title: faker.lorem.word(),
  previewImg: faker.image.urlLoremFlickr(),
  previewImgWebp: faker.image.urlPicsumPhotos(),
  level: faker.helpers.arrayElement(
    COMPLICATIONS.filter((el): el is TQuest['level'] => el !== 'any')
  ),
  type: faker.helpers.arrayElement(
    TOPICS.filter((el): el is TQuest['type'] => el !== 'allQuests')
  ),
  peopleMinMax: faker.helpers.arrayElements([1, 2, 3, 4, 5], 2).sort(),
});

const getFullMock = (): TQuestFull => ({
  ...getMock(),
  description: faker.lorem.sentences(2, '\n'),
  coverImg: faker.image.urlLoremFlickr({ category: 'horror' }),
  coverImgWebp: faker.image.urlLoremFlickr({ category: 'nature' }),
});

const getLocation = (): TLocation => ({
  address: faker.location.streetAddress(),
  coords: [faker.location.latitude(), faker.location.longitude()],
});

const getSchedule = () => ({
  time: faker.date.anytime().toLocaleTimeString(),
  isAvailable: faker.datatype.boolean(),
});

const getQuestPlace = (): TQuestPlace => ({
  id: faker.string.uuid(),
  location: getLocation(),
  slots: {
    today: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      getSchedule
    ),
    tomorrow: Array.from(
      { length: faker.number.int({ min: 1, max: 5 }) },
      getSchedule
    ),
  },
});

const getBookingQuest = (): TGetBookingQuest =>
  Array.from({ length: faker.number.int({ min: 1, max: 3 }) }, getQuestPlace);

const getMocks = () => Array.from({ length: CARDS_COUNT }, getMock);

const getPostBookingQuest = (): TPostBookingQuest => ({
  date: faker.helpers.arrayElement(['today', 'tomorrow']),
  time: new Date().toLocaleTimeString(),
  contactPerson: faker.lorem.word(),
  phone: faker.number.int({ min: 89154, max: 89999 }).toString(),
  withChildren: faker.datatype.boolean(),
  peopleCount: faker.number.int({ min: 1, max: 5 }),
  placeId: faker.location.streetAddress(),
});

const getResponseBookedQuest = (): TResponseBookedQuest => ({
  date: faker.helpers.arrayElement(['today', 'tomorrow']),
  time: new Date().toLocaleTimeString(),
  contactPerson: faker.lorem.word(),
  phone: faker.number.int({ min: 89154, max: 89999 }).toString(),
  withChildren: faker.datatype.boolean(),
  peopleCount: faker.number.int({ min: 1, max: 5 }),
  id: faker.string.uuid(),
  location: {
    address: faker.location.streetAddress(),
    coords: [faker.location.latitude(), faker.location.longitude()],
  },
  quest: getMock(),
});

const bookingQuest = getPostBookingQuest();

const bookingQuests = Array.from(
  { length: faker.number.int({ min: 1, max: 5 }) },
  getResponseBookedQuest
);

const bookingQuestsForDelete = Array.from(
  { length: faker.number.int({ min: 1, max: 5 }) },
  getResponseBookedQuest
);

const mock = getFullMock();
const mocks = getMocks();
const places = getBookingQuest();

const sortQuestTest = Array.from({ length: 7 }, getMock);

export {
  mock,
  mocks,
  places,
  bookingQuest,
  bookingQuests,
  bookingQuestsForDelete,
  CARDS_COUNT,
  sortQuestTest,
};
