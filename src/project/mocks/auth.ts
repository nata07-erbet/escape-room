import { AuthorizationStatus } from '../const/const';
import { faker } from '@faker-js/faker';

const mockAuthStatus = () => faker.datatype.boolean() ? AuthorizationStatus.Auth : AuthorizationStatus.NoAuth;
const getIsAuthorizated = () => faker.datatype.boolean();

export { mockAuthStatus, getIsAuthorizated };
