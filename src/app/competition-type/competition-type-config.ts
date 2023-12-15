
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
  // image: HTMLImageElement;
  cashBalance: string;
  percentage: string;
}
