import React from 'react';
import { storiesOf } from '@storybook/react-native';
import { ToggleLang, ToggleLangProps } from './toggle-lang';

const props: ToggleLangProps = {};

storiesOf('ToggleLang', module).add('Primary', () => <ToggleLang {...props} />);
