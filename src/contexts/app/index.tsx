import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useReducer,
} from "react";
import { useTranslation } from "react-i18next";
import { AppContextType, AppState } from "./types";
import appReducer from "./reducer";

const AppContext = createContext<AppContextType | null>(null);

const initialState: AppState = {
  language: localStorage.getItem("language") || "fa",
  theme: localStorage.getItem("theme") || "light",
};

const AppProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(appReducer, initialState);
  const { i18n } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(state.language);
    localStorage.setItem("language", state.language);
    document.body.dataset.direction = state.language === "fa" ? "rtl" : "ltr";
  }, [state.language]);

  useEffect(() => {
    localStorage.setItem("theme", state.theme);
  }, [state.theme]);

  const changeLanguage = (language: string) => {
    dispatch({ type: "CHANGE_LANGUAGE", payload: language });
  };

  const changeTheme = (theme: string) => {
    dispatch({ type: "CHANGE_THEME", payload: theme });
  };

  return (
    <AppContext.Provider value={{ state, changeLanguage, changeTheme }}>
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
