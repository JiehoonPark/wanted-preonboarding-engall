const setTimeFormat = (data: number[]) =>
  data.map(time => (time < 10 ? `0${time}` : time)).join(':');

export default setTimeFormat;
