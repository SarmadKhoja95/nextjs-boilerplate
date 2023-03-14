import styled from 'styled-components';
import Button from './Button';
import { BaseButtonProps, PolymorphicComponent, scales } from './types';

const scaleVariants = {
  [scales.LG]: '48px',
  [scales.MD]: '40px',
  [scales.SM]: '32px',
  [scales.XS]: '24px',
};

const IconButton: PolymorphicComponent<BaseButtonProps, 'button'> = styled(Button)<BaseButtonProps>`
  padding: 0;
  min-width: ${({ scale, autoScale }) => (!autoScale ? scaleVariants[scale ?? scales.MD] : 'auto')};
  min-height: ${({ scale, autoScale }) => (!autoScale ? scaleVariants[scale ?? scales.MD] : 'auto')};
`;

export default IconButton;
