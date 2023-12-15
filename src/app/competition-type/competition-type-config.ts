
export interface CompetitionTypeConfig {
  competitionName: string;
  contestantCards: ContestantCardConfig[];
  xBitsPrize: string;
  shortName: string;
  login: string;
  days: string;
  isContestAvailable: boolean;
}

export interface ContestantCardConfig {
  alerts: string;
  winRate: string;
  yield: string;
  contestantName: string;
  isVerified: boolean;
  cashBalance: string;
  percentage: string;
  pictureFileName: string;
  backgroundColor: BackgroundColor;
}

export enum BackgroundColor {
  LIGHT_GREEN,
  PURPLE,
  BEIGE,
  GREY,
  HOT_BEIGE,
  LIGHT_BEIGE
}
