import { ISchedule } from '@src/types/schedule';

const sortedDataByDayOfWeek = (data: ISchedule[]) => {
  const sortedData: { [key: string]: ISchedule[] } = {};

  data.map((item: ISchedule) => {
    if (!sortedData[item.day]) sortedData[item.day] = [];
    sortedData[item.day].push(item);
  });

  const keys = Object.keys(sortedData);

  keys.map(
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
