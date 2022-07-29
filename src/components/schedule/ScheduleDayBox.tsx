import React from 'react';
import styled from 'styled-components';

import ScheduleTimeBox from '@components/schedule/ScheduleTimeBox';
import { dayOfWeek, week } from '@constants/day';
import { ISortedSchedule } from '@src/types/schedule';
import PageBox from '@components/common/PageBox';

interface IScheduleDayBoxProps {
  data: ISortedSchedule;
}

function ScheduleDayBox({ data }: IScheduleDayBoxProps) {
  return (
    <ScheduleDayBoxContainer className="day">
      {week.map(day => (
        <PageBox key={day}>
          <DayBox>
            <DayTitle>{day}</DayTitle>
            <List>
              {data[dayOfWeek[day]].map(schedule => (
                <ScheduleTimeBox
                  key={schedule.id}
                  time={schedule.time}
                  id={schedule.id}
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

const ScheduleDayBoxContainer = styled.div``;

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
