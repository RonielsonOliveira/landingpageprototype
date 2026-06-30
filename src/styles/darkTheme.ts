import { baseTheme } from './baseTheme';
import { DefaultTheme } from 'styled-components';
export const darkTheme: DefaultTheme = {
  ...baseTheme,

  colors: {
    primary: '#F231A5',
    secondary: '#3CD3C1',

    mainBg: '#06092B',
    headerBg: 'rgba(46, 47, 66, 0.75)',
    lightBg: '#F2F2F2',

    white: '#FAFAFA',
    black: '#030517',

    lightGray: '#EAEAEA',
    gray: '#8F8F8F',
    darkGray: '#2E2F42',
    line: '#FF6347',
    red: '#FF6347',
    blue: '#279de2',

    text: '#FAFAFA',
    card: '#2E2F42',
    border: '#404040',
  },
};
