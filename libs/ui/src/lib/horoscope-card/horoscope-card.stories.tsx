import React from 'react';
import { mockHoroscope } from '@ricult/models';
import { storiesOf } from '@storybook/react-native';
import { ZodiacSignList } from '../zodiac-sign-list/zodiac-sign-list';

import { HoroscopeCard } from './horoscope-card';

storiesOf('HoroscopeCard', module).add('Primary', () => (
  <HoroscopeCard
    horoscope={mockHoroscope}
    zodiacItem={ZodiacSignList[0]}
    loadingStatus={'loaded'}
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    getUserHoroscope={() => {}}
  />
));
