// @ts-nocheck
import { View } from 'react-native';
import { HoroscopeCard } from '@ricult/ui';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { horoscopeActions, horoscopeSelectors } from '@ricult/store';

const Details = ({ route }) => {
  const {
    params: { card },
  } = route;
  const dispatch = useDispatch();
  const horoscope = useSelector(horoscopeSelectors.getUserHoroscope);
  const isLoading = useSelector(horoscopeSelectors.getHoroscopeLoadingStatus);

  useEffect(() => {
    dispatch(
      horoscopeActions.fetchHoroscope({ zodiacSign: card, day: 'today' })
    );
  }, [card]);

  return (
    <View>
      <HoroscopeCard
        horoscope={horoscope}
        loadingStatus={isLoading}
        zodiacItem={card}
      />
    </View>
  );
};

export default Details;
