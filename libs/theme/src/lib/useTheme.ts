import { useThemeType } from '@ricult/models';
import { useState } from 'react';
import { PRIMARY_COLOR, theme } from './theme';

export const useTheme: useThemeType = () => {
  const [primaryColor, setPrimaryColor] = useState(PRIMARY_COLOR);

  return {
    ...theme,
    colors: {
      ...theme.colors,
      primaryColor,
    },
    setPrimaryColor,
  };
};
