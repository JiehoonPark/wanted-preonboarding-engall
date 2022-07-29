import React, { useState, useCallback, useEffect } from 'react';
import styled from 'styled-components';

import CheckBox from '@components/common/CheckBox';
import { dayOfWeekArray } from '@constants/day';

interface IWeekCheckBoxProps {
  propsRef: React.MutableRefObject<string[]>;
}

function WeekCheckBox({ propsRef }: IWeekCheckBoxProps) {
  const [checked, setChecked] = useState<string[]>([]);

  const handleCheckBox = useCallback(
    e => {
      const { id, checked } = e.target;
      if (checked) setChecked(checked => [...checked, id]);
      else setChecked(checked => checked.filter(item => item !== id));
    },
    [checked],
  );

  useEffect(() => {
    propsRef.current = checked;
  }, [checked]);

  return (
    <WeekBoxContainer>
      <Title>Repeat on</Title>
      <CheckBoxWrap>
        {dayOfWeekArray.map(day => (
          <CheckBox id={day[1]} key={day[1]} onChange={handleCheckBox}>
            {day[0]}
          </CheckBox>
        ))}
      </CheckBoxWrap>
    </WeekBoxContainer>
  );
}

export default WeekCheckBox;

const WeekBoxContainer = styled.div`
  display: flex;
  align-items: center;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    flex-direction: column;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin: 0 35px 0 20px;
  white-space: nowrap;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin: 0 0 20px 0;
  }
`;

const CheckBoxWrap = styled.div``;
