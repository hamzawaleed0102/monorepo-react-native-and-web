import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { RTL } from './rtl';
import { NavigationDecorator } from '../../storybook/mocks/navigation';

const props = {};

storiesOf('RTL', module)
  .addDecorator(NavigationDecorator)
  .add('Primary', () => <RTL {...props} />);
