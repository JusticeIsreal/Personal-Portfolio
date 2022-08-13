const reducer = (state, action) => {

  
  // menu toggle control
  if (action.type === "MENU_TOGGLE") {
    return {
      ...state,
      menuShow: true,
    };
  } else if (action.type === "MENU_TOGGLE2") {
    return {
      ...state,
      menuShow: false,
    };
  }
  if (action.type === "ABOUTME_CLOSE") {
    return {
      ...state,
      readAboutMe: true,
    };
  } else if (action.type === "ABOUTME_OPEN") {
    return {
      ...state,
      readAboutMe: false,
    };
  }

  
};

export default reducer;
