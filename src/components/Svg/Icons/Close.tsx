import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';
const Close: React.FC<SvgProps> = props => {
  return (
    <Svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M1.5 1.5L6 6M6 6L1.5 10.5M6 6L10.5 10.5M6 6L10.5 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Close;
