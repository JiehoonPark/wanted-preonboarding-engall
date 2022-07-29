const checkEmpty = (
  select: { [key: string]: string },
  radio: string,
  checkbox: string[],
) => {
  if (!radio) throw new Error('오전/오후를 선택해주세요');
  if (select.hours === '11' && select.minutes > '00' && radio === 'pm')
    throw new Error('오후 11시이후로 스케줄을 잡을 수 업습니다.');
  if (!checkbox.length) throw new Error('요일을 선택해주세요');
};

export default checkEmpty;
