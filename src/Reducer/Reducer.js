import React from "react";

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

  return state;
};
export default reducer;
