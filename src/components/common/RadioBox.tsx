import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface IRadioBoxProps {
  children: ReactNode;
  id: string;
  name: string;
}

function RadioBox({ id, name, children }: IRadioBoxProps) {
  return (
    <>
      <Input type="radio" id={id} name={name} />
      <Label htmlFor={id}>{children}</Label>
    </>
  );
}

export default RadioBox;

const Input = styled.input`
  display: none;
  :checked + label {
    background: ${({ theme }) => theme.color.grey_06};
    color: #fff;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 75px;
  height: 50px;
  padding: 14px;
  margin: 4px;
  border: 1px solid ${({ theme }) => theme.color.grey_05};
  text-align: center;
  font-weight: 500;
  font-size: 19px;
`;
