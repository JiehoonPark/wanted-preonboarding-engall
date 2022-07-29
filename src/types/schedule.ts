export interface ISchedule {
  id: number;
  day: string;
  time: string;
}

export interface ISortedSchedule {
  [key: string]: ISchedule[];
}
