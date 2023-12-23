import { faker } from '@faker-js/faker';

import { TOPICS_FOR_SORTING, COMPLICATION_FOR_SORTING} from '../const/const';

const CARDS_COUNT = faker.number.int({ min: 15, max: 25 });
const getMock = () => (
  {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    previewImg: faker.image.urlLoremFlickr(),
    previewImgWebp:faker.image.urlPicsumPhotos(),
    level:faker.helpers.arrayElement(COMPLICATION_FOR_SORTING),
    type:  faker.helpers.arrayElement(TOPICS_FOR_SORTING),
    peopleMinMax: faker.helpers.arrayElements([1, 2, 3, 4, 5], 2),
  }
);

const getFullMock = () => (
  {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    previewImg: faker.image.urlLoremFlickr(),
    previewImgWebp:faker.image.urlPicsumPhotos(),
    level: faker.lorem.word(),
    type: faker.lorem.word(),
    peopleMinMax: faker.helpers.arrayElements([1, 2, 3, 4, 5], 2),
    description: faker.lorem.sentences(2, '\n'),
    coverImg: faker.image.urlLoremFlickr({ category: 'horror' }),
    coverImgWebp: faker.image.urlLoremFlickr({ category: 'nature' })
  }
);
const getLocation = () => (
  {
    address: faker.location.streetAddress(),
    coords: [faker.location.latitude(), faker.location.longitude()]
  }
);

const getSchedule = () => (
  {
    time: new Date().getDate() + faker.number.int({ min: 0, max: 3 }) ,
    isAvailable: faker.datatype.boolean(),
  }
);

const getBookingQuest = () => (
  {
    id: faker.string.uuid(),
    location: getLocation(),
    slots: {
      today: Array.from({length: faker.number.int({ min: 1, max: 5})}, () => getSchedule()),
      tomorrow: Array.from({length: faker.number.int({ min: 1, max: 5 })}, () => getSchedule()),
    }
  }
);

const getMocks = () => Array.from({length: CARDS_COUNT}, () => getMock());

//Бронирование квеста
const getPostBookingQuest = () => (
  {
    date: faker.helpers.arrayElement(['today', 'tomorrow']),
    time: new Date().getDate() + faker.number.int({ min: 0, max: 3 }),
    contactPerson: faker.lorem.word(),
    phone: faker.number.int({ min: 89154, max: 89999 }),
    withChildren: faker.datatype.boolean(),
    peopleCount: faker.number.int({ min: 1, max: 5 }),
    placeId: faker.location.streetAddress()
  }
);

const getResponseBookedQuest = () => (
  {
    date: faker.lorem.word(),
    time: new Date().getDate() + faker.number.int({ min: 0, max: 3 }),
    contactPerson: faker.lorem.word(),
    phone: faker.number.int({ min: 89154, max: 89999 }),
    withChildren: faker.datatype.boolean(),
    peopleCount: faker.number.int({ min: 1, max: 5 }),
    id: faker.string.uuid(),
    location: {
      address: faker.location.streetAddress(),
      coords: [
        faker.location.latitude(), faker.location.longitude()
      ]},
    quest: {
      id: faker.string.uuid(),
      title: faker.lorem.word(),
      previewImg: faker.image.urlLoremFlickr(),
      previewImgWebp:faker.image.urlPicsumPhotos(),
      level: faker.lorem.word(),
      type: faker.lorem.word(),
      peopleMinMax: faker.helpers.arrayElements([1, 2, 3, 4, 5]),
    }
  }
);

//Бронирование квеста
const bookingQuest = getPostBookingQuest();

//Получение информации о бронированиях пользователя
const bookingQuests = Array.from(({length: faker.number.int({ min: 1, max: 5 })}), () => getResponseBookedQuest());


// //Получение информации о бронированиях пользователя - как пример для удаления карточек
const bookingQuestsForDelete = Array.from(({length: faker.number.int({ min: 1, max: 5 })}), () => getResponseBookedQuest());


const mock = getFullMock();
const mocks = getMocks();

const place = Array.from({length:1}, () => getBookingQuest());

const sortQuestTest = Array.from({length: 7}, () => getMock());

export {mock, mocks,place, bookingQuest, bookingQuests, bookingQuestsForDelete, CARDS_COUNT, sortQuestTest};


