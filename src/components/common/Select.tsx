import React, { RefObject } from 'react';
import styled from 'styled-components';

interface ISelectProps {
  options: string[];
  propsRef: RefObject<HTMLButtonElement>;
}

function Select({ options, propsRef }: ISelectProps) {
  const handleClick = e => {
    e.currentTarget.childNodes[1].classList.toggle('active');
    if (e.target.nodeName === 'LI') {
      e.currentTarget.childNodes[0].innerHTML = e.target.innerHTML;
      e.currentTarget.childNodes[1].scrollTop = 0;
    }
  };
  return (
    <SelectContainer onClick={handleClick}>
      <Label ref={propsRef}>00</Label>
      <OptionList>
        {options.map(minute => (
          <Option key={minute} value={minute}>
            {minute}
          </Option>
        ))}
      </OptionList>
    </SelectContainer>
  );
}

export default Select;

const SelectContainer = styled.div`
  position: relative;
  width: 75px;
  height: 50px;
  cursor: pointer;
  background: url('./images/AiFillCaretDown.svg') calc(100% - 7px) center
    no-repeat;
  background-size: 20px;
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  ul {
    height: 0px;
  }
  .active {
    height: 150px;
  }
`;

const Label = styled.button`
  border: 1px solid ${({ theme }) => theme.color.grey_05};
  display: flex;
  width: inherit;
  height: inherit;
  padding: 14px;
  font-weight: 500;
  font-size: 19px;
  align-items: center;
  background: transparent;
  cursor: pointer;
`;

const OptionList = styled.ul`
  position: absolute;
  width: inherit;
  left: 0;
  top: 49px;
  overflow: scroll;
  transition: 0.3s ease-in;
  border: 1px solid ${({ theme }) => theme.color.grey_05};
  border-top: none;
  background: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
`;

const Option = styled.li`
  height: 50px;
  padding: 14px;
  transition: 0.1s;
  font-weight: 500;
  font-size: 19px;
  border-bottom: 1px solid ${({ theme }) => theme.color.grey_05};
  &:last-child {
    border-bottom: none;
  }
  :hover {
    background-color: ${({ theme }) => theme.color.grey_03};
  }
`;
