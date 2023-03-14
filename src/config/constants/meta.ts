import { PageMeta } from './types';

export const DEFAULT_META: PageMeta = {
  title: 'Next.js Boilerplate',
  description: 'Next.js Boilerplate',
  image: '',
};

export const getCustomMeta = (path: string): PageMeta => {
  let basePath;
  if (path.startsWith('/account')) {
    basePath = '/account';
  } else {
    basePath = path;
  }
  switch (basePath) {
    case '/':
      return {
        title: 'Home',
      };
    case '/account':
      return {
        title: 'Account',
      };
    case '/about':
      return {
        title: 'About',
      };
    default:
      return null;
  }
};
