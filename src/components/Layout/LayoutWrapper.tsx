import Header from '../Header';
import styled from 'styled-components';
import { Footer } from '../Footer';

const LayoutWrapper = ({ children }) => {
  return (
    <Container>
      <Header />
      {children}
      <Footer />
    </Container>
  );
};

export default LayoutWrapper;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
`;
