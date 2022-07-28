import React, { useRef } from 'react';
import styled from 'styled-components';
import RadioBox from '../common/RadioBox';
import Select from '../common/Select';

function StartTime() {
  const minutesRef = useRef<HTMLButtonElement>(null);
  const hoursRef = useRef<HTMLButtonElement>(null);
  const minutes = Array(12)
    .fill(5)
    .map((minute, index) =>
      index === 0 || index === 1 ? `0${minute * index}` : `${minute * index}`,
    );

  const hours = Array(13)
    .fill(1)
    .map((hour, index) =>
      hour * index < 10 ? `0${hour * index}` : `${hour * index}`,
    );

  return (
    <StartTimeContainer>
      <Title>Start time</Title>
      <SelectContainer>
        <Select
          options={hours}
          propsRef={hoursRef}
          width="75px"
          defaultValue="00"
        ></Select>
        <Colon>:</Colon>
        <Select
          options={minutes}
          propsRef={minutesRef}
          width="75px"
          defaultValue="00"
        ></Select>
      </SelectContainer>
      <RadioContainer>
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
