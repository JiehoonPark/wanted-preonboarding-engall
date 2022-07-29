import getEndTime from '@utils/getEndTime';
import setTimeFormat from '@utils/setTimeFormat';

export const getTime = (time: { [key: string]: string }, AMPM: string) => {
  const start = [+time.hours, +time.minutes];

  if (AMPM === 'pm') start[0] += 12;

  const end = getEndTime(start);
  if (end[0] >= 24) end[0] = 0;

  const startTime = setTimeFormat(start);
  const endTime = setTimeFormat(end);

  return { startTime, endTime };
};
