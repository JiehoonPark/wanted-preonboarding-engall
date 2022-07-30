import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

import Title from '@components/common/Title';
import Button from '@components/common/Button';
import ScrollTopButton from '@components/common/ScrollTopButton';
import Modal from '@components/common/Modal';
import ScheduleWeeklyBox from '@components/schedule/ScheduleWeeklyBox';
import ScheduleDayBox from '@components/schedule/ScheduleDayBox';
import scrollTop from '@utils/scrollTop';
import sortedDataByDayOfWeek from '@utils/sortedDataByDayOfWeek';
import { useSchedulesQuery } from '@hooks/useQuries';

function WeeklySchedule() {
  const modalRef = useRef<HTMLDivElement>(null);
  const { data } = useSchedulesQuery();
  const sortedData = data && sortedDataByDayOfWeek(data);

  useEffect(() => {
    scrollTop();
  }, []);

  return (
    <WeeklyScheduleContainer>
      <Wrap>
        <Title>Class schedule</Title>
        <Link to="/form">
          <Button>Add Class Schedule</Button>
        </Link>
      </Wrap>
      {data && (
        <>
          <ScheduleWeeklyBox data={sortedData} modalRef={modalRef} />
          <ScheduleDayBox data={sortedData} modalRef={modalRef} />
        </>
      )}
      <ButtonWrap>
        <ScrollTopButton position={800} />
      </ButtonWrap>
      <Modal modalRef={modalRef} />
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
const Link = styled(NavLink)`
  text-decoration: none;
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: flex;
    justify-content: end;
    margin: 50px 0 30px;
  }
`;

const ButtonWrap = styled.div`
  display: none;
  position: fixed;
  bottom: 30px;
  right: 30px;
  svg {
    width: 50px;
    height: 50px;
    color: ${({ theme }) => theme.color.grey_06};
  }
  @media ${({ theme }) => theme.deviceSize.mobile} {
    display: block;
  }
`;
