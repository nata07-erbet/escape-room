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

const getMocks = () => Array.from({length: CARDS_COUNT}, () => getMock());
const mocks = getMocks();

export { mocks, CARDS_COUNT};


