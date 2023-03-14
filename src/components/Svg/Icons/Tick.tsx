import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';

const Tick: React.FC<SvgProps> = () => {
  return (
    <Svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="20" height="20" rx="10" fill="none" />
      <rect x="2" y="2" width="16" height="16" rx="8" fill="#FF7687" />
      <path fill="none" d="M5.5 9.47059L8.83333 13L14.5 7" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </Svg>
  );
};

export default Tick;
