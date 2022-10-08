import { Dispatch, SetStateAction } from 'react';
export interface BaseTheme {
  fonts: {
    primary: string;
    secondary: string;
  };
  colors: {
    primary: string;
    background: string;
    card: string;
    text: string;
    border: string;
    notification: string;
  };
  spacing: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    xxl: string | number;
  };
  borderRadius: {
    xs: string | number;
    sm: string | number;
    md: string | number;
    lg: string | number;
    xl: string | number;
    xxl: string | number;
  };
}

interface UseThemeType {
  setPrimaryColor: Dispatch<SetStateAction<string>>;
}
export type useThemeType = () => BaseTheme & UseThemeType;
