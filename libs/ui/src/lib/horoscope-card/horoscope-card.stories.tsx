import { mockHoroscope } from '@ricult/models';
import { LoadingStatus } from '@ricult/store';
import { storiesOf } from '@storybook/react-native';
import React from 'react';
import { ZodiacSignList } from '../zodiac-sign-list/zodiac-sign-list';

import { HoroscopeCard } from './horoscope-card';

storiesOf('HoroscopeCard', module).add('Primary', () => (
  <HoroscopeCard
    horoscope={mockHoroscope}
    zodiacItem={ZodiacSignList[0]}
    loadingStatus={LoadingStatus.Success}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getUserHoroscope={() => {}}
  />
));
