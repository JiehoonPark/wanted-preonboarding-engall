import React, { useRef } from 'react';
import styled from 'styled-components';

import { useSchedulesQuery } from '@hooks/useQuries';
import ScheduleDayBox from '@components/schedule/ScheduleDayBox';
import ScheduleWeeklyBox from '@components/schedule/ScheduleWeeklyBox';
import sortedDataByDayOfWeek from '@utils/sortedDataByDayOfWeek';
import Modal from '../common/Modal';

function SsheduleList() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { data, isLoading } = useSchedulesQuery();
  const sortedData = data && sortedDataByDayOfWeek(data);

  return (
    <SsheduleListContainer>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <>
          <Modal modalRef={modalRef} />
          <ScheduleWeeklyBox data={sortedData} modalRef={modalRef} />
          <ScheduleDayBox data={sortedData} modalRef={modalRef} />
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
  .active {
    display: block;
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
