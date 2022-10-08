import { BaseTheme } from '@ricult/models';

export const PRIMARY_COLOR = 'rgb(255, 45, 85)';
export const theme: BaseTheme = {
  fonts: {
    primary: 'Roboto',
    secondary: 'Arial',
  },
  colors: {
    primary: PRIMARY_COLOR,
    background: 'rgb(242, 242, 242)',
    card: 'rgb(255, 255, 255)',
    text: 'rgb(28, 28, 30)',
    border: 'rgb(199, 199, 204)',
    notification: 'rgb(255, 69, 58)',
  },
  spacing: {
    xs: 3,
    sm: 6,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 25,
  },
  borderRadius: {
    xs: 3,
    sm: 6,
    md: 10,
    lg: 15,
    xl: 20,
    xxl: 25,
  },
};
