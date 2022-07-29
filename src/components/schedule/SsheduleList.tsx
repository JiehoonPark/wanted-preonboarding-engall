import React from 'react';
import styled from 'styled-components';

import { useSchedulesQuery } from '@hooks/useQuries';
import ScheduleDayBox from '@components/schedule/ScheduleDayBox';
import ScheduleWeeklyBox from '@components/schedule/ScheduleWeeklyBox';
import sortedDataByDayOfWeek from '@utils/sortedDataByDayOfWeek';

function SsheduleList() {
  const { data, isLoading } = useSchedulesQuery();
  const sortedData = data && sortedDataByDayOfWeek(data);

  return (
    <SsheduleListContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <ScheduleWeeklyBox data={sortedData} />
          <ScheduleDayBox data={sortedData} />
        </>
      )}
    </SsheduleListContainer>
  );
}

export default SsheduleList;

const SsheduleListContainer = styled.div`
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
