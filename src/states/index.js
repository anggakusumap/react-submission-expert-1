import { configureStore } from '@reduxjs/toolkit';
import { loadingBarReducer } from 'react-redux-loading-bar';
import authUserReducer from './authUser/reducer';
import isPreloadReducer from './isPreload/reducer';
import isShowMobileReducer from './showMobile/reducer';
import usersReducer from './users/reducer';

const store = configureStore({
  reducer: {
    authUser: authUserReducer,
    users: usersReducer,
    isShowMobile: isShowMobileReducer,
    loadingBar: loadingBarReducer,
    isPreload: isPreloadReducer,
  },
});

export default store;
