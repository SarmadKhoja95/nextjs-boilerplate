import React, { cloneElement, ElementType, isValidElement } from 'react';
import getExternalLinkProps from '../../utils/getExternalLinkProps';
import { Box } from '../Box';
import Loader from '../Loader';
import StyledButton from './StyledButton';
import { ButtonProps, scales, variants } from './types';

const Button = <E extends ElementType = 'button'>(props: ButtonProps<E>): JSX.Element => {
  const { startIcon, endIcon, external, className, isLoading, disabled, textVisible, children, ...rest } = props;
  const internalProps = external ? getExternalLinkProps() : {};
  const isDisabled = isLoading || disabled;
  const classNames = className ? [className] : [];

  if (isLoading) {
    classNames.push('button--loading');
  }

  if (isDisabled && !isLoading) {
    classNames.push('button--disabled');
  }

  return (
    <StyledButton $isLoading={isLoading} $textVisible={textVisible} className={classNames.join(' ')} disabled={isDisabled} {...internalProps} {...rest}>
      <>
        {isValidElement(startIcon) &&
          cloneElement(startIcon, {
            // @ts-ignore
            mr: '0.3rem',
          })}
        {isLoading && textVisible && (
          <Box marginRight={'12px'}>
            <Loader />
          </Box>
        )}
        {isLoading && !textVisible && <Loader />}
        {children}
        {isValidElement(endIcon) &&
          cloneElement(endIcon, {
            // @ts-ignore
            ml: '0.3rem',
          })}
      </>
    </StyledButton>
  );
};

Button.defaultProps = {
  isLoading: false,
  external: false,
  variant: variants.PRIMARY,
  scale: scales.MD,
  disabled: false,
};

export default Button;
