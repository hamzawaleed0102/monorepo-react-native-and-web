import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ZodiacSignList } from './zodiac-sign-list';
// import { NavigationDecorator } from '../../storybook/mocks/navigation';

const props = { onPressListItem: () => {} };

storiesOf('ZodiacSignList', module)
  // .addDecorator(NavigationDecorator)
  .add('Primary', () => <ZodiacSignList {...props} />);
