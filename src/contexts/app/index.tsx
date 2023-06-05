import { createContext, ReactNode, useContext, useReducer } from "react";
import { useTranslation } from "react-i18next";
import { AppState } from "./types";
import appReducer from "./reducer";

type AppContextType = {
  state: AppState;
  changeLanguage: (language: string) => void;
};

const AppContext = createContext<AppContextType | null>(null);

const initialState: AppState = {
  language: localStorage.getItem("language") || "fa",
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);

  const changeLanguage = (language: string) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  return (
    <AppContext.Provider value={{ state, changeLanguage }}>
      {children}
    </AppContext.Provider>
  );
};

const useAppContext = (): AppContextType => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error("useAppContext must be used within an AppProvider");
  }
  return context;
};

export { useAppContext, AppProvider };
