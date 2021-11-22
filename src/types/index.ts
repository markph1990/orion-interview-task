export enum API_CALL_ENUM {
  INITIAL = "INITIAL",
  IN_PROGRESS = "IN_PROGRESS",
  ERROR = "ERROR",
  SUCCESS = "SUCCESS",
}

export interface Joke {
  id: string;
  joke: string;
}
