import React, { ChangeEvent } from 'react';
import styled from 'styled-components';

import RadioBox from '@components/common/RadioBox';
import Select from '@components/common/Select';
import { hour, minute } from '@constants/time';

interface IstartTimeProps {
  selectPropsRef: React.MutableRefObject<{ [key: string]: number }>;
  radioPropsRef: React.MutableRefObject<string>;
}

function StartTime({ selectPropsRef, radioPropsRef }: IstartTimeProps) {
  const handleRadioBoxChange = (e: ChangeEvent<HTMLInputElement>) => {
    radioPropsRef.current = e.target.id;
  };

  return (
    <StartTimeContainer>
      <Title>Start time</Title>
      <SelectContainer>
        <Select
          id="hour"
          options={hour}
          propsRef={selectPropsRef}
          width="75px"
          defaultValue="00"
        />
        <Colon>:</Colon>
        <Select
          id="minute"
          options={minute}
          propsRef={selectPropsRef}
          width="75px"
          defaultValue="00"
        />
      </SelectContainer>
      <RadioContainer onChange={handleRadioBoxChange}>
        <RadioBox id="am" name="time">
          AM
        </RadioBox>
        <RadioBox id="pm" name="time">
          PM
        </RadioBox>
      </RadioContainer>
    </StartTimeContainer>
  );
}

export default StartTime;

const StartTimeContainer = styled.div`
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  margin: 20px 0 100px 20px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    flex-direction: column;
    align-items: center;
    margin: 0 0 50px 0;
  }
`;

const Title = styled.h2`
  font-weight: 500;
  font-size: 22px;
  margin-right: 48px;
  padding-top: 10px;
  white-space: nowrap;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin: 0;
  }
`;

const SelectContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 30px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    margin: 30px 0 0;
  }
`;

const Colon = styled.div`
  margin: 0 10px;
  height: 50px;
`;

const RadioContainer = styled.div`
  @media (max-width: 660px) {
    margin: 0 auto;
  }
`;
