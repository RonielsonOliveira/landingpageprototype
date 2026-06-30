import { ReactNode } from 'react';
import { ThemeProvider } from 'styled-components';

import { useThemeContext } from '../context/ThemeContext';

import { darkTheme } from '../../styles/darkTheme';
import { lightTheme } from '../../styles/lightTheme';
import GlobalStyles from '../../styles/global';

interface Props {
  children: ReactNode;
}

export function AppThemeProvider({ children }: Props) {
  const { isDark } = useThemeContext();

  return (
    <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
      <GlobalStyles />
      {children}
    </ThemeProvider>
  );
}
