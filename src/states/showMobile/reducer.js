import { ActionType } from './action';

function isShowMobileReducer(isShowMobile = false, action = {}) {
  switch (action.type) {
    case ActionType.SHOW_MOBILE:
      return action.payload.isShowMobile;
    default:
      return isShowMobile;
  }
}

export default isShowMobileReducer;
