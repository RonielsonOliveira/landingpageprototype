import { FaMoon, FaSun } from 'react-icons/fa';

import { useThemeContext } from '..//..//src/context/ThemeContext';

import * as S from './styles';

export function ThemeToggle() {
  const { isDark, toggleTheme } = useThemeContext();

  return (
    <S.ThemeButton onClick={toggleTheme} aria-label="Alternar tema">
      {isDark ? <FaSun /> : <FaMoon />}
    </S.ThemeButton>
  );
}
