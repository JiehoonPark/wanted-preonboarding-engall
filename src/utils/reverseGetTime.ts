import { format } from 'date-fns';
import { BASE_ON_DATE } from '@constants/time';

const reverseGetTime = (time: string) => {
  const [year, month, day] = BASE_ON_DATE;
  const [hour, minute] = time.split(':').map(Number);

  const start = format(new Date(year, month, day, hour, minute), 'h:mm aa');
  const end = format(new Date(year, month, day, hour, minute + 40), 'h:mm aa');

  return { start, end };
};

export default reverseGetTime;
