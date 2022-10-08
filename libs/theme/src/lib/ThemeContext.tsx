import React from 'react';
import { BaseTheme } from '@ricult/models';

export const ThemeContext = React.createContext({
  isDarkMode: false,
  colors: {},
  spacing: {},
  borderRadius: {},
});

export const ThemeProvider = ({
  theme,
  children,
}: {
  theme: BaseTheme;
  children: React.ReactNode;
}) => <ThemeContext.Provider value={theme}>{children}</ThemeContext.Provider>;
