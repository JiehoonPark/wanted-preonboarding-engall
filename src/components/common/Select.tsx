import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

interface ISelectProps {
  id: string;
  width: string;
  defaultValue: string;
  options: (string | number)[][];
  propsRef: React.MutableRefObject<{ [key: string]: number }>;
}

function Select({ id, width, defaultValue, options, propsRef }: ISelectProps) {
  const ulRef = useRef<HTMLUListElement>(null);

  const handleClick = e => {
    e.stopPropagation();
    e.preventDefault();
    e.currentTarget.childNodes[1].classList.toggle('active');
    if (e.target.nodeName === 'LI') {
      e.currentTarget.childNodes[0].innerHTML = e.target.innerHTML;
      e.currentTarget.childNodes[1].scrollTop = 0;
      propsRef.current[id] = e.target.value;
    }
  };

  useEffect(() => {
    propsRef.current[id] = 0;

    document.addEventListener('click', e => {
      if (ulRef.current) ulRef.current.classList.remove('active');
    });

    return document.removeEventListener('click', e => {
      if (ulRef.current) ulRef.current.classList.remove('active');
    });
  }, []);

  return (
    <SelectContainer onClick={handleClick} width={width}>
      <Label>{defaultValue}</Label>
      <OptionList ref={ulRef}>
        {options.map(option => (
          <Option key={option[0]} value={option[0]}>
            {option[1]}
          </Option>
        ))}
      </OptionList>
    </SelectContainer>
  );
}

export default Select;

const SelectContainer = styled.div<{ width: string }>`
  display: inline-block;
  position: relative;
  width: ${({ width }) => width};
  height: 50px;
  cursor: pointer;
  margin-bottom: 20px;
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
  top: 49.5px;
  overflow: scroll;
  transition: 0.3s ease-in;
  border: 1px solid ${({ theme }) => theme.color.grey_05};
  background: #fff;
  ::-webkit-scrollbar {
    display: none;
  }
  :hover {
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.3);
  }
  z-index: 100;
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
