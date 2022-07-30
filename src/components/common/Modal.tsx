import React from 'react';
import styled from 'styled-components';

import { useDeleteMutation } from '@hooks/useQuries';

interface IModal {
  modalRef: React.RefObject<HTMLDivElement>;
}

function Modal({ modalRef }: IModal) {
  const { mutate } = useDeleteMutation();

  const handleConfirm = () => {
    const id = Number(modalRef.current?.id);
    mutate(id);
    handleCloseModal();
  };

  const handleCloseModal = () => {
    modalRef.current?.classList.remove('active');
  };

  return (
    <Background ref={modalRef}>
      <ModalContainer>
        <Title>Confirm</Title>
        <Content>스케줄을 삭제하시겠습니까?</Content>
        <ButtonContainer>
          <Button onClick={handleCloseModal}>Cancel</Button>
          <Button onClick={handleConfirm}>Yes</Button>
        </ButtonContainer>
      </ModalContainer>
    </Background>
  );
}

export default Modal;
const Background = styled.div`
  display: none;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  background: rgba(128, 128, 128, 0.7);
  z-index: 150;
  &.active {
    display: block;
  }
`;

const ModalContainer = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 330px;
  height: 200px;
  background: #fff;
  border-radius: 20px;
  box-shadow: 0px 4px 15px 3px rgba(108, 108, 108, 0.5);
`;

const Title = styled.p`
  font-size: 18px;
  font-weight: 700;
  text-align: center;
  margin: 25px 0 10px;
`;

const Content = styled.p`
  font-size: 16px;
  text-align: center;
  margin: 40px 0 45px;
`;

const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  border-top: 1px solid ${({ theme }) => theme.color.grey_04};
`;
const Button = styled.button`
  background: none;
  width: 50%;
  height: 55px;
  font-size: 16px;
  font-weight: 700;
  color: ${({ theme }) => theme.color.blue_01};
  :first-child {
    border-right: 1px solid ${({ theme }) => theme.color.grey_04};
  }
`;
