import {
  getSchedules,
  deleteScheduleById,
  postSchedules,
} from '@api/schedules';
import { useQuery, useMutation, useQueryClient } from 'react-query';

export const useSchedulesQuery = () => {
  return useQuery(['schedules'], getSchedules);
};

export const usePostMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(postSchedules, {
    onSuccess: () => queryClient.invalidateQueries('schedules'),
  });
};

export const useDeleteMutation = () => {
  const queryClient = useQueryClient();
  return useMutation(deleteScheduleById, {
    onSuccess: () => queryClient.invalidateQueries('schedules'),
  });
};
