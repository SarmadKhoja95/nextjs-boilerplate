import React from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { DEFAULT_META, getCustomMeta } from '@/config/constants/meta';
import { Box, BoxProps } from '../Box';

const StyledPage = styled(Box) <{ $removePadding: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  padding: ${({ $removePadding }) => ($removePadding ? '0' : '16px')};
  padding-bottom: 0;
  background: ${({ theme }) => theme.colors.background};

  ${({ theme }) => theme.mediaQueries.xs} {
    background-size: auto;
  }

  ${({ theme }) => theme.mediaQueries.sm} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '24px')};
    padding-bottom: 0;
  }

  ${({ theme }) => theme.mediaQueries.lg} {
    padding: ${({ $removePadding }) => ($removePadding ? '0' : '32px')};
    padding-bottom: 0;
  }
`;

export const PageMeta: React.FC<{ symbol?: string }> = ({ symbol }) => {
  const { pathname } = useRouter();

  const pageMeta = getCustomMeta(pathname) || {};
  const { title, description, image } = { ...DEFAULT_META, ...pageMeta };
  let pageTitle = title;
  if (symbol) {
    pageTitle = [symbol, title].join(' - ');
  }

  return (
    <Head>
      <title>{pageTitle}</title>
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </Head>
  );
};

const Page: React.FC<React.HTMLAttributes<HTMLDivElement> & { removePadding?: boolean; hideFooterOnDesktop?: boolean } & BoxProps> = ({
  children,
  removePadding = false,
  ...props
}) => {
  return (
    <>
      <PageMeta />
      <StyledPage $removePadding={removePadding} {...props}>
        {children}
      </StyledPage>
    </>
  );
};

export default Page;
