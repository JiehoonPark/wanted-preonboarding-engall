import React from 'react';
import styled from 'styled-components';

import ScheduleTimeBox from '@components/schedule/ScheduleTimeBox';
import PageBox from '@components/common/PageBox';
import { dayOfWeek, week } from '@constants/day';
import { ISortedSchedule } from '@src/types/schedule';

interface IScheduleDayBoxProps {
  data: ISortedSchedule;
  modalRef: React.RefObject<HTMLDivElement>;
}

function ScheduleDayBox({ data, modalRef }: IScheduleDayBoxProps) {
  const hasScheduleDay = week.filter(day => data[day].length !== 0);
  return (
    <ScheduleDayBoxContainer className="day">
      {hasScheduleDay.map(day => (
        <PageBox key={day}>
          <DayBox>
            <DayTitle>{dayOfWeek[day]}</DayTitle>
            <List>
              {data[day].map(schedule => (
                <ScheduleTimeBox
                  key={schedule.id}
                  time={schedule.time}
                  id={schedule.id}
                  modalRef={modalRef}
                />
              ))}
            </List>
          </DayBox>
        </PageBox>
      ))}
    </ScheduleDayBoxContainer>
  );
}

export default ScheduleDayBox;

const ScheduleDayBoxContainer = styled.div`
  display: none;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: block;
  }
`;

const DayBox = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #ccc;
    top: 25px;
    left: 0;
  }
`;

const DayTitle = styled.h2`
  font-size: 19px;
  padding-bottom: 17px;
  text-align: center;
`;

const List = styled.div``;
