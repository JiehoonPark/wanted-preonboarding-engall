import { dayOfWeekToAbbreviation } from '@constants/day';
import { getFilterSchedules } from '@api/schedules';
import { getTime } from '@utils/getTime';

const checkDuplication = async (
  time: { [key: string]: string },
  AMPM: string,
  dayOfWeek: string[],
) => {
  const { startTime, endTime } = getTime(time, AMPM);
  const duplicatedClass: string[] = [];
  const filterSchedules = await getFilterSchedules(startTime, endTime);

  filterSchedules.map(schedule => {
    if (dayOfWeek.includes(schedule.day)) duplicatedClass.push(schedule.day);
  });

  const duplicatedDay = [
    ...new Set(duplicatedClass.map(day => dayOfWeekToAbbreviation[day])),
  ].join(',');

  if (duplicatedClass.length > 0)
    throw new Error(`${duplicatedDay}에는 이미 해당 시간에 스케줄이 있습니다`);
};

export default checkDuplication;
