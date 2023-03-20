/* eslint-disable import/no-extraneous-dependencies */
/**
 * @TODO: Create Redux store
 */
import { configureStore } from '@reduxjs/toolkit';
import isShowMobileReducer from './showMobile/reducer';

const store = configureStore({
  reducer: {
    isShowMobile: isShowMobileReducer,
  },
});

export default store;
