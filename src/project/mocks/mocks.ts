import { faker } from '@faker-js/faker';

const CARDS_COUNT = faker.number.int({ min: 8, max: 15 });
const getMock = () => (
  {
    id: faker.string.uuid(),
    title: faker.lorem.word(),
    previewImg: faker.image.urlLoremFlickr(),
    previewImgWebp:faker.image.urlPicsumPhotos(),
    level: faker.lorem.word(),
    type: faker.lorem.word(),
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

const mock = getFullMock();
const mocks = getMocks();

const place = Array.from({length:1}, () => getBookingQuest());

export {mock, mocks,place, CARDS_COUNT};


