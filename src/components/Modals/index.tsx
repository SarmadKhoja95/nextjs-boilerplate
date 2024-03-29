import React, { ReactElement } from 'react';
import Modal from 'react-modal';
import styled from 'styled-components';

interface ModalProps {
  show: boolean;
  setShow: Function;
  children: ReactElement;
}

const StyledModal: React.FC<ModalProps> = ({ show, setShow, children }) => {
  const handleClose = () => setShow(false);
  React.useEffect(() => {
    Modal.setAppElement('body');
  }, []);
  return (
    <StyledModalComponent isOpen={show} onRequestClose={handleClose} contentLabel="" className="Modal">
      {children}
    </StyledModalComponent>
  );
};

const StyledModalComponent = styled(Modal)`
  &.Modal {
    min-width: 466px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #ffffff;
    box-shadow: 0px 8px 24px -6px rgba(0, 0, 0, 0.16);
    border-radius: 12px;
    max-height: 90vh;
    overflow-y: auto;
    ::-webkit-scrollbar {
      // width: 8px;
    }
    /* Track */
    ::-webkit-scrollbar-track {
      border-radius: 10px;
    }
    /* Handle */
    ::-webkit-scrollbar-thumb {
      background: ${({ theme }) => theme.colors.background};
      border-radius: 10px;
    }
  }
`;

export default StyledModal;
