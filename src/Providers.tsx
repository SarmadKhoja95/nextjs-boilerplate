import { Provider } from 'react-redux';
import { Store } from '@reduxjs/toolkit';
import { HistoryManagerProvider } from '@/contexts/HistoryContext';
import { ThemeContextProvider } from './contexts/ThemeContext';

const Providers: React.FC<React.PropsWithChildren<{ store: Store; children: React.ReactNode }>> = ({ children, store }) => {
  return (
    <Provider store={store}>
      <ThemeContextProvider>
        <HistoryManagerProvider>{children}</HistoryManagerProvider>
      </ThemeContextProvider>
    </Provider>
  );
};

export default Providers;
