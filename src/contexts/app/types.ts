export interface AppState {
  language: string;
}

export type AppAction = {
  type: "CHANGE_LANGUAGE";
  payload: string;
};
