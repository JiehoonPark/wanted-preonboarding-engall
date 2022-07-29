import getEndTime from '@utils/getEndTime';
import setTimeFormat from '@utils/setTimeFormat';

const reverseGetTime = (time: string) => {
  const timeArray = time.split(':').map(Number);
  const AMPM = timeArray[0] > 12 ? 'PM' : 'AM';

  const start =
    timeArray[0] > 12 ? [timeArray[0] - 12, timeArray[1]] : timeArray;
  const end = getEndTime(start);

  const startTime = setTimeFormat(start);
  const endTime = setTimeFormat(end);

  return { startTime, endTime, AMPM };
};

export default reverseGetTime;
