import { createReducer } from '@reduxjs/toolkit';

import {
  fetchQuests,
  fetchQuest,
  fetchBookingQuests,
  postPlace,
  fetchInfoUserBooked,
  checkUserAuthStatus,
  login,
  logout
} from './actions';

import type {
  TQuest,
  TQuestFull,
  TResponseBookedQuest,
  TGetBookingQuest,
  TPostBookingQuest,
} from '../types/user.types';

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

const reducer = createReducer(initalState, (builder) => {
  builder
    .addCase(fetchQuests, (state) => {
      state.quests = quests;
    })
    .addCase(fetchQuest, (state, action) => {
      state.quest = quests.find((quest) => quest.id  === action.payload);
    })
    .addCase(fetchBookingQuests, (state) => {
      state.bookingQuests = bookingQuests;
    })
    .addCase(postPlace, (state) => {
      state.postPlace = postPlace;
    })
    .addCase(fetchInfoUserBooked, (state) => {
      state.infoUserBooked = infoUserBooked;
    })
    .addCase(checkUserAuthStatus, (state) => {
      state.userAuthStatus = userAuthStatus;
    })
    .addCase(login, (state) => {
      state.loginServer = loginServer;
    })
    .addCase(logout, (state) => {
      state.logoutServer = logoutServer;
    })
});

export { reducer };
