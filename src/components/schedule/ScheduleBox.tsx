import React from 'react';
import styled from 'styled-components';
import { IoMdCloseCircle } from 'react-icons/io';

interface IScheduleBox {
  start: string;
  end: string;
  onClick?: () => void;
}

function ScheduleBox({ start, end, onClick }: IScheduleBox) {
  return (
    <ScheduleBoxContainer>
      <TimeWrap>
        <StartTime>{`${start} - `}</StartTime>
        <EndTime>{end}</EndTime>
      </TimeWrap>
      <IoMdCloseCircle onClick={onClick} />
    </ScheduleBoxContainer>
  );
}

export default ScheduleBox;

const ScheduleBoxContainer = styled.div`
  display: flex;
  align-items: start;
  justify-content: space-between;
  width: 130px;
  height: 50px;
  font-size: 17px;
  line-height: 1.2;
  padding: 5px;
  border-radius: 10px;
  background: ${({ theme }) => theme.color.grey_02};
  color: ${({ theme }) => theme.color.grey_07};
  transition: 0.2s;
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  svg {
    width: 20px;
    height: 20px;
    color: ${({ theme }) => theme.color.grey_05};
  }
`;

const TimeWrap = styled.div``;
const StartTime = styled.div``;
const EndTime = styled.div``;
