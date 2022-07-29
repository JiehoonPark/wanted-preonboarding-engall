const getEndTime = (start: number[]) =>
  start[1] >= 20 ? [start[0] + 1, start[1] - 20] : [start[0], start[1] + 40];

export default getEndTime;
