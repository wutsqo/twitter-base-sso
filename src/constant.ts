export enum TAB_IDS {
  NEW_FESS = "new-fess",
  HISTORY = "history",
  REPORT = "report",
}

export interface Tab {
  id: TAB_IDS;
  label: string;
}

export const TABS: Tab[] = [
  {
    id: TAB_IDS.NEW_FESS,
    label: "Fess Baru",
  },
  {
    id: TAB_IDS.HISTORY,
    label: "Riwayat",
  },
  {
    id: TAB_IDS.REPORT,
    label: "Report Fess",
  },
];
