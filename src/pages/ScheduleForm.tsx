import React, { useRef } from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router';

import Button from '@components/common/Button';
import PageBox from '@components/common/PageBox';
import Title from '@components/common/Title';
import StartTime from '@components/form/StartTime';
import WeekCheckBox from '@components/form/WeekCheckBox';
import checkEmpty from '@utils/checkEmpty';
import checkDuplication from '@utils/checkDuplication';
import { getTime } from '@utils/getTime';
import { usePostMutation } from '@hooks/useQuries';

function ScheduleForm() {
  const selectRef = useRef<{ [key: string]: number }>({});
  const radioBoxRef = useRef<string>('');
  const checkBoxRef = useRef<string[]>([]);
  const { mutate } = usePostMutation();
  const navigate = useNavigate();

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    const [select, radio, checkbox] = [
      selectRef.current,
      radioBoxRef.current,
      checkBoxRef.current,
    ];
    try {
      checkEmpty(select, radio, checkbox);
      await checkDuplication(select, radio, checkbox);
      checkbox.map(day => {
        const { start } = getTime(select, radio);
        mutate({ day, time: start });
      });
      navigate('/');
    } catch (e) {
      const error = e as Error;
      alert(error.message);
    }
  };

  return (
    <ScheduleFormContainer>
      <TitleWrap>
        <Title>Add class schedule</Title>
      </TitleWrap>
      <PageBox>
        <StartTime selectPropsRef={selectRef} radioPropsRef={radioBoxRef} />
        <WeekCheckBox propsRef={checkBoxRef} />
      </PageBox>
      <ButtonWrap>
        <Button onClick={handleSubmit}>Save</Button>
      </ButtonWrap>
    </ScheduleFormContainer>
  );
}

export default ScheduleForm;

const ScheduleFormContainer = styled.form``;

const TitleWrap = styled.div`
  margin-bottom: 50px;
`;

const ButtonWrap = styled.div`
  display: flex;
  justify-content: end;
`;
