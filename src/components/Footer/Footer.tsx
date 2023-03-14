import React from 'react';
import styled from 'styled-components';
import { RowBetween, RowStart } from '../Box/Flex';
import { Text } from '../Text';

const Footer = () => {
  return (
    <Container>
      <Divider />
      <RowBetween px='3%'>
        <Text variant="p4" color="textLight2">
          © {new Date().getFullYear()} All rights reserved.
        </Text>
        <RowStart gap="18px">
          <Text variant="p4" color="textLight2">
            Terms
          </Text>
          <Text variant="p4" color="textLight2">
            Privacy
          </Text>
          <Text variant="p4" color="textLight2">
            Cookies
          </Text>
        </RowStart>
      </RowBetween>
    </Container>
  );
};
const Divider = styled.div`
  border: 0.5px solid ${({ theme }) => theme.colors.borderLight};
  margin: 0 0 32px;
`;
const Container = styled.div`
  // padding: 0 0 32px;
`;

export default Footer;
