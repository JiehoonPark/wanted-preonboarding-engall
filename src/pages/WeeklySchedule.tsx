import React from 'react';
import styled from 'styled-components';

import Title from '@components/common/Title';
import Button from '@components/common/Button';
import ScheduleDayBox from '@src/components/schedule/ScheduleDayBox';
import ScheduleWeeklyBox from '@src/components/schedule/ScheduleWeeklyBox';

function WeeklySchedule() {
  return (
    <WeeklyScheduleContainer>
      <Wrap>
        <Title>Class schedule</Title>
        <ButtonWrap>
          <Button>Add Class Schedule</Button>
        </ButtonWrap>
      </Wrap>
      <Box>
        <ScheduleWeeklyBox />
        <ScheduleDayBox />
      </Box>
    </WeeklyScheduleContainer>
  );
}

export default WeeklySchedule;

const WeeklyScheduleContainer = styled.div``;

const Wrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 50px;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: block;
    margin-bottom: 30px;
  }
`;
const ButtonWrap = styled.div`
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: flex;
    justify-content: end;
    margin: 50px 0 30px;
  }
`;

const Box = styled.div`
  .weekly {
    display: block;
  }
  .day {
    display: none;
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    .weekly {
      display: none;
    }
    .day {
      display: block;
    }
  }
`;
