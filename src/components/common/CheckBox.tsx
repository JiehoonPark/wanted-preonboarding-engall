import React, { ReactNode } from 'react';
import styled from 'styled-components';

interface ICheckBoxProps {
  children: ReactNode;
  id: string;
}

function CheckBox({ id, children }: ICheckBoxProps) {
  return (
    <>
      <Input type="checkbox" id={id} />
      <Label htmlFor={id}>{children}</Label>
    </>
  );
}

export default CheckBox;

const Input = styled.input`
  display: none;
  :checked + label {
    border: 1px solid ${({ theme }) => theme.color.grey_05};
    color: #000;
  }
`;

const Label = styled.label`
  display: inline-block;
  width: 160px;
  height: 50px;
  font-size: 19px;
  font-weight: 500;
  text-align: center;
  border: 1px solid ${({ theme }) => theme.color.grey_04};
  color: ${({ theme }) => theme.color.grey_04};
  padding: 14px;
  margin: 4px;
`;
