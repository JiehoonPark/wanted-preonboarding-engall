import { BASE_ON_DATE } from './../constants/time';

const reverseGetTime = (time: string) => {
  const [year, month, day] = BASE_ON_DATE;
  const [hour, minute] = time.split(':').map(Number);

  const start = new Date(year, month, day, hour, minute).toLocaleString(
    'en-us',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  );
  const end = new Date(year, month, day, hour, minute + 40).toLocaleString(
    'en-us',
    {
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    },
  );
  return { start, end };
};

export default reverseGetTime;
