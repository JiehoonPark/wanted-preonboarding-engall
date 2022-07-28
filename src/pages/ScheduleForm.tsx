import React from 'react';
import Button from '@src/components/common/Button';
import PageBox from '@src/components/common/PageBox';
import Title from '@src/components/common/Title';
import StartTime from '@src/components/form/StartTime';
import WeekCheckBox from '@src/components/form/WeekCheckBox';

import styled from 'styled-components';

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
