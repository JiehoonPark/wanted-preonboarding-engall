import { dayOfWeek } from '@constants/day';
import { ISchedule } from '@src/types/schedule';
import axios from 'axios';

export const BASE_URL = 'https://wanted-4group-engall.herokuapp.com';

export const getSchedules = async () => {
  const response = await axios.get(`${BASE_URL}/schedules`);
  return response.data;
};

export const getFilterSchedules = async (
  start: string,
  end: string,
  week: string[],
) => {
  const weeks = week.join('|');
  const response = await axios.get(
    `${BASE_URL}/schedules?day_like=${weeks}&time_gte=${start}&time_lte=${end}`,
  );
  const duplicatedDay = [
    ...new Set(
      response.data.map((data: { day: string }) => dayOfWeek[data.day]),
    ),
  ].join(',');

  if (response.data.length > 0)
    throw new Error(`${duplicatedDay}에는 이미 해당 시간에 스케줄이 있습니다`);
};

export const postSchedules = async (data: ISchedule[]) => {
  const request = data.map(schedule =>
    axios.post(`${BASE_URL}/schedules`, schedule),
  );
  await axios.all(request);
};

export const deleteScheduleById = async (id: number) => {
  await axios.delete(`${BASE_URL}/schedules/${id}`);
};
