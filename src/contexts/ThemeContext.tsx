import { useAppDispatch } from '@/state';
import { setThemeState } from '@/state/global/actions';
import { useThemeState } from '@/state/global/selector';
import React from 'react';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import { light, dark } from '../theme';
interface ThemeType {
  isDark: boolean | null;
  toggleTheme: () => void;
}

const initialState: ThemeType = {
  isDark: null,
  toggleTheme: () => null,
};

const ThemeContext = React.createContext(initialState);

const ThemeContextProvider = ({ children }: any) => {
  const isDark = useThemeState();
  const dispatch = useAppDispatch();
  const toggleTheme = () => {
    dispatch(setThemeState({ isDark: !isDark }));
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <SCThemeProvider theme={isDark ? dark : light}>{children}</SCThemeProvider>
    </ThemeContext.Provider>
  );
};

export { ThemeContext, ThemeContextProvider };
