export interface iRealTimeData {
  ns?: number;
  nrl?: number;
  nlr?: number;
  ne?: number;
  nw?: number;
}

export interface iChartData {
  data: {
    [key: string]: iRealTimeData;
  },
  plot: {
    x: string[];
    y: string[];
  }

}
