import React from 'react';
import StyledModal from '..';
import { Box } from '@/components/Box';
import { Text } from '@/components/Text';

interface ModalProps {
  show: boolean;
  setShow: Function;
}

const StaticModal: React.FC<ModalProps> = ({ show, setShow }) => {
  const handleClose = () => setShow(false);
  return (
    <StyledModal show={show} setShow={handleClose}>
      <Box p="24px">
        <Text>Modal Content</Text>
      </Box>
    </StyledModal>
  );
};

export default StaticModal;
