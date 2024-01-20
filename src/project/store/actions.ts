import { createAction } from '@reduxjs/toolkit';
import { NameSpace } from '../const/const';
import { TQuest } from '../types/user.types';

const fetchQuests = createAction(`${NameSpace.Quests}/fetchQuests`);
const fetchQuest = createAction<TQuest['id']>(`${NameSpace.Quest}/fetchQuest`);
const fetchBookingQuests = createAction(`${NameSpace.BookingQuests}/fetchBookingQuests`);
const postPlace = createAction(`${NameSpace.Place}/postPlace`);
const fetchInfoUserBooked = createAction(`${NameSpace.InfoUserBooked}/fetchInfoUserBooked`);
const checkUserAuthStatus = createAction(`${NameSpace.UserAuthStatus}/checkUserAuthStatus`);
const login = createAction(`${NameSpace.LoginServer}/login`);
const logout = createAction(`${NameSpace.LogoutServer}/logout`);

export {
  fetchQuests,
  fetchQuest,
  fetchBookingQuests,
  postPlace,
  fetchInfoUserBooked,
  checkUserAuthStatus,
  login,
  logout,
};
