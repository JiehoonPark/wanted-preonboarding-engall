import { week } from '@constants/day';
import { ISchedule } from '@src/types/schedule';

const sortedDataByDayOfWeek = (data: ISchedule[]) => {
  const [MON, TUE, WED, THU, FRI, SAT, SUN] = week;
  const sortedData: { [key: string]: ISchedule[] } = {
    [MON]: [],
    [TUE]: [],
    [WED]: [],
    [THU]: [],
    [FRI]: [],
    [SAT]: [],
    [SUN]: [],
  };

  data.map((item: ISchedule) => {
    sortedData[item.day].push(item);
  });

  week.map(
    key =>
      (sortedData[key] = sortedData[key].sort((a, b) => {
        if (a.time < b.time) return -1;
        if (a.time > b.time) return 1;
        if (a.time === b.time) return 0;
        else return -1;
      })),
  );

  return sortedData;
};

export default sortedDataByDayOfWeek;
