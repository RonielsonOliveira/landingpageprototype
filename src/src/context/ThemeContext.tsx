import { createContext, useContext, useState, ReactNode } from 'react';

interface ThemeContextData {
  isDark: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext({} as ThemeContextData);

interface ProviderProps {
  children: ReactNode;
}

export function ThemeContextProvider({ children }: ProviderProps) {
  const [isDark, setIsDark] = useState<boolean>(() => {
    const storageTheme = localStorage.getItem('theme');

    if (storageTheme) {
      return JSON.parse(storageTheme);
    }

    return true;
  });

  const toggleTheme = () => {
    setIsDark((prev: boolean) => {
      const next = !prev;

      localStorage.setItem('theme', JSON.stringify(next));

      return next;
    });
  };

  return (
    <ThemeContext.Provider
      value={{
        isDark,
        toggleTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  return useContext(ThemeContext);
}
