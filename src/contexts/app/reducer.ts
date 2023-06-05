import { AppState, AppAction } from "./types";

const appReducer = (state: AppState, action: AppAction): AppState => {
  switch (action.type) {
    case "CHANGE_LANGUAGE": {
      return {
        ...state,
        language: action.payload,
      };
    }
    default:
      return state;
  }
};

export default appReducer;
