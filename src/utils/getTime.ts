import { BASE_ON_DATE } from '@src/constants/time';
import { format } from 'date-fns';

export const getTime = (time: { [key: string]: number }, AMPM: string) => {
  const [year, month, day] = BASE_ON_DATE;
  const { hour, minute } = time;

  const hours = AMPM === 'pm' ? hour + 12 : hour;

  const start = format(new Date(year, month, day, hours, minute), 'HH:mm');
  const end = format(new Date(year, month, day, hours, minute + 40), 'HH:mm');

  return { start, end };
};
