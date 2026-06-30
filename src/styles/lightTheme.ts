import { baseTheme } from './baseTheme';
import { DefaultTheme } from 'styled-components';
export const lightTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',

    mainBg: '#FFFFFF',
    headerBg: 'rgba(229, 231, 235, 0.75)',
    lightBg: '#F8FAFC',

    white: '#FFFFFF',
    black: '#111827',

    lightGray: '#E5E7EB',
    gray: '#6B7280',
    darkGray: '#F3F4F6',
    line: '#279DE2',
    red: '#FF6347',
    blue: '#279DE2',

    text: '#111827',
    card: '#F3F4F6',
    border: '#D1D5DB',
  },
};
