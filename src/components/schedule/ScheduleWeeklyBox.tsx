import React from 'react';
import styled from 'styled-components';

import ScheduleTimeBox from '@components/schedule/ScheduleTimeBox';
import PageBox from '@components/common/PageBox';
import { dayOfWeek, week } from '@constants/day';
import { ISortedSchedule } from '@src/types/schedule';

interface IScheduleWeeklyBoxProps {
  data: ISortedSchedule;
  modalRef: React.RefObject<HTMLDivElement>;
}

function ScheduleWeeklyBox({ data, modalRef }: IScheduleWeeklyBoxProps) {
  return (
    <ScheduleWeeklyBoxContainer className="weekly">
      <PageBox>
        <Wrap>
          {week.map(day => (
            <DayBox key={day}>
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
          ))}
        </Wrap>
      </PageBox>
    </ScheduleWeeklyBoxContainer>
  );
}

export default ScheduleWeeklyBox;

const ScheduleWeeklyBoxContainer = styled.div`
  display: block;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: none;
  }
`;

const Wrap = styled.div`
  position: relative;
  display: flex;
  align-items: start;
  flex-wrap: wrap;
  @media (min-width: 1500px) {
    justify-content: space-between;
    ::after {
      content: '';
      position: absolute;
      height: 1px;
      width: 100%;
      background-color: #ccc;
      top: 25px;
      left: 0;
    }
  }
`;

const DayBox = styled.div`
  position: relative;
  display: inline-block;
  padding-right: 6vh;
  :first-child {
    padding-left: 0;
  }
  :last-child {
    padding-right: 0;
  }
  ::after {
    content: '';
    position: absolute;
    height: 1px;
    width: 100%;
    background-color: #ccc;
    top: 25px;
    left: 0;
  }
  @media (min-width: 1500px) {
    ::after {
      display: none;
    }
  }
`;

const DayTitle = styled.h2`
  width: 140px;
  font-size: 19px;
  padding-bottom: 17px;
  text-align: center;
`;

const List = styled.div``;
