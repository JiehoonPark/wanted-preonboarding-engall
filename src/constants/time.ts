export const AM = 'AM';
export const PM = 'PM';

export const BASE_ON_DATE = [2022, 7, 1];

export const hour = Array(12)
  .fill(1)
  .map((hour, index) => {
    const time = hour * index;
    return [time, time < 10 ? `0${time}` : `${time}`];
  });

export const minute = Array(12)
  .fill(5)
  .map((minute, index) => {
    const time = minute * index;
    return [time, index === 0 || index === 1 ? `0${time}` : `${time}`];
  });
