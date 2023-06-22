export interface AppState {
  language: string;
  theme: string;
}

export type AppAction = {
  type: "CHANGE_LANGUAGE" | "CHANGE_THEME";
  payload: string;
};

export type AppContextType = {
  state: AppState;
  changeLanguage: (language: string) => void;
  changeTheme: (theme: string) => void;
};
