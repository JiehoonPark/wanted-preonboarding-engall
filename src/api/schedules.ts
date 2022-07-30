import { ISchedule } from '@src/types/schedule';
import axios from 'axios';

export const BASE_URL = 'http://localhost:4000';

export const getSchedules = async () => {
  const response = await axios.get(`${BASE_URL}/schedules`);
  return response.data;
};

export const getFilterSchedules = async (start: string, end: string) => {
  const response = await axios.get(
    `${BASE_URL}/schedules?time_gte=${start}&time_lte=${end}`,
  );
  return response.data;
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
