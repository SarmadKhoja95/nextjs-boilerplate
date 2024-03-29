import React from 'react';
import Svg from '../Svg';
import { SvgProps } from '../types';
const Chevron: React.FC<SvgProps> = props => {
  return (
    <Svg width="8" height="4" viewBox="0 0 8 4" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.35355 3.85355C4.15829 4.04882 3.84171 4.04882 3.64645 3.85355L0.646447 0.853553C0.451184 0.658291 0.451184 0.341709 0.646447 0.146447C0.841709 -0.0488157 1.15829 -0.0488157 1.35355 0.146447L4 2.79289L6.64645 0.146447C6.84171 -0.0488157 7.15829 -0.0488157 7.35355 0.146447C7.54882 0.341709 7.54882 0.658291 7.35355 0.853553L4.35355 3.85355Z"
        fill="white"
      />
    </Svg>
  );
};

export default Chevron;
