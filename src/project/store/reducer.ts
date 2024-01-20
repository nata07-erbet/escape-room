import { createReducer } from '@reduxjs/toolkit';
import { createAct } from './actions';
import type {
  TQuest,
  TQuestFull,
  TResponseBookedQuest,
  TGetBookingQuest,
  TPostBookingQuest,
} from '../types/types';
import type { UserStatus } from '../types/auth';

const initalState: {
  quests: TQuest[];
  quest: TQuestFull | null;
  bookingQuests: TGetBookingQuest[];
  place : TPostBookingQuest | null;
  infoUserBooked: TResponseBookedQuest[];
  userAuthStatus: UserStatus | null;
  loginServer: UserStatus | null;
  logoutServer: UserStatus | null;

} = {
  quests: [],
  quest: null,
  bookingQuests: [],
  place : null,
  infoUserBooked: [],
  userAuthStatus: null,
  loginServer: null,
  logoutServer: null,
};

const reducer = createReducer(initalState,(builder) => builder
  .addCase(createAct, (state) => {
    state = state.place;
  }));


export { reducer };
