import styled from 'styled-components';
import { flexbox } from 'styled-system';
import Box from './Box';
import { FlexProps } from './types';

export const Flex = styled(Box)<FlexProps>`
  display: flex;
  ${flexbox}
`;
export const RowBetween = styled(Flex)<{ gap?: 'sm' | 'md' | 'lg' | string }>`
  align-items: center;
  justify-content: space-between;
  gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
  ${flexbox}
`;
export const RowStart = styled(Flex)<{ gap?: 'sm' | 'md' | 'lg' | string }>`
  align-items: center;
  gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
`;
export const RowCenter = styled(Flex)<{ gap?: 'sm' | 'md' | 'lg' | string }>`
  align-items: center;
  justify-content: center;
  gap: ${({ gap }) => (gap === 'sm' && '8px') || (gap === 'md' && '12px') || (gap === 'lg' && '24px') || gap};
`;
