import React from 'react';
import styled from 'styled-components';

const Loader = () => {
  return (
    <StyledLoader width="25" height="24" viewBox="0 0 25 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="loader">
      <path
        d="M8.91105 2.13943C8.62646 1.35754 7.75607 0.946135 7.01597 1.32639C4.9428 2.39155 3.21416 4.04341 2.05573 6.09092C0.648761 8.57773 0.175287 11.485 0.720474 14.2897C1.26566 17.0944 2.79373 19.6126 5.02982 21.3913C6.8709 22.8558 9.09247 23.7398 11.4137 23.9508C12.2424 24.0261 12.8953 23.3186 12.8662 22.487C12.8372 21.6554 12.1353 21.0179 11.3105 20.9078C9.70894 20.6939 8.18465 20.0506 6.90558 19.0331C5.23097 17.7011 4.0866 15.8152 3.67831 13.7148C3.27002 11.6143 3.62461 9.43706 4.67829 7.57469C5.48309 6.15221 6.65539 4.98472 8.06025 4.18645C8.78369 3.77538 9.19563 2.92132 8.91105 2.13943Z"
        fill="white"
      />
    </StyledLoader>
  );
};

const StyledLoader = styled.svg`
  animation: loading 1s linear infinite;
  @keyframes loading {
    0% {
      transform: rotate(0);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
export default Loader;
