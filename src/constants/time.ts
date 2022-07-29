export const AM = 'AM';
export const PM = 'PM';

export const hours = Array(12)
  .fill(1)
  .map((hour, index) =>
    hour * index < 10 ? `0${hour * index}` : `${hour * index}`,
  );

export const minutes = Array(12)
  .fill(5)
  .map((minute, index) =>
    index === 0 || index === 1 ? `0${minute * index}` : `${minute * index}`,
  );
