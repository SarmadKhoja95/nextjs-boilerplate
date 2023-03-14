import styled from 'styled-components';
import { RowStart } from '../Box/Flex';
import { Button } from '../Button';
import { NavLink } from '../NavLink';
import { Text } from '../Text';

const Navbar = () => {
  return (
    <HeaderFixedTop>
      <NavbarInner>
        <Text variant='h5' color='primary'>LOGO</Text>
        <RowStart gap="29px">
          <NavLink href={'/'} name="Home" />
          <NavLink href={'/about'} name="About" />
          <NavLink href={'/account'} name="Account" />
        </RowStart>
        <RowStart gap="sm">
          <Button variant="secondary">Login</Button>
        </RowStart>
      </NavbarInner>
    </HeaderFixedTop>
  );
};

const HeaderFixedTop = styled.div`
  width: 100%;
  z-index: 99;
`;

const NavbarInner = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 64px;
  padding: 0 24px;
  border-bottom: 4px solid ${({ theme }) => theme.colors.borderColor};
`;

export default Navbar;
