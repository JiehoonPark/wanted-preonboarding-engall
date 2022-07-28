import React from 'react';
import styled from 'styled-components';

import Button from '@components/common/Button';
import PageBox from '@components/common/PageBox';
import Title from '@components/common/Title';
import StartTime from '@components/form/StartTime';
import WeekCheckBox from '@components/form/WeekCheckBox';

function ScheduleForm() {
  return (
    <ScheduleFormContainer>
      <TitleWrap>
        <Title>Add class schedule</Title>
      </TitleWrap>
      <PageBox>
        <StartTime />
        <WeekCheckBox />
      </PageBox>
      <ButtonWrap>
        <Button>Save</Button>
      </ButtonWrap>
    </ScheduleFormContainer>
  );
}

export default ScheduleForm;

const ScheduleFormContainer = styled.div``;

const TitleWrap = styled.div`
  margin-bottom: 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
  margin-top: 35px;
`;
