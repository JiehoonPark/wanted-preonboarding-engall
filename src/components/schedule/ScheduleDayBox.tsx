import React from 'react';
import styled from 'styled-components';

import ScheduleTimeBox from '@components/schedule/ScheduleTimeBox';
import PageBox from '@components/common/PageBox';
import { week } from '@constants/day';

function ScheduleDayBox() {
  return (
    <ScheduleDayBoxContainer className="day">
      <PageBox>
        <DayBox>
          <DayTitle>{week[0]}</DayTitle>
          <List>
            <ScheduleTimeBox start="10:00 AM" end="10:40 AM" />
            <ScheduleTimeBox start="10:00 AM" end="10:40 AM" />
          </List>
        </DayBox>
      </PageBox>
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
