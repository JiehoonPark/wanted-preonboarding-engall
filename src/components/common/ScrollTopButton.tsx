import React, { useState } from 'react';
import { useRef } from 'react';
import { BsFillArrowUpCircleFill } from 'react-icons/bs';
import styled from 'styled-components';

interface IScrollTopButton {
  position: number;
}

function ScrollTopButton({ position }: IScrollTopButton) {
  const divRef = useRef<HTMLDivElement>(null);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    if (divRef.current) {
      if (scrolled > position) {
        divRef.current.style.display = 'inline';
      } else if (scrolled <= position) {
        divRef.current.style.display = 'none';
      }
    }
  };

  const scrollTop = () => {
    window.scroll({
      top: 0,
      behavior: 'smooth',
    });
  };

  window.addEventListener('scroll', toggleVisible);

  return (
    <ScrollTopButtonWrap onClick={scrollTop} ref={divRef}>
      <BsFillArrowUpCircleFill />
    </ScrollTopButtonWrap>
  );
}

export default ScrollTopButton;

const ScrollTopButtonWrap = styled.div`
  display: none;
`;
