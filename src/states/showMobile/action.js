const ActionType = {
  SHOW_MOBILE: 'SHOW_MOBILE',
};

function setIsShowMobileActionCreator(isShowMobile = false) {
  return {
    type: ActionType.SHOW_MOBILE,
    payload: {
      isShowMobile,
    },
  };
}

export {
  ActionType,
  setIsShowMobileActionCreator,
};
