// @ts-nocheck
import { View } from 'react-native';
import { HoroscopeCard } from '@ricult/ui';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { horoscopeActions, horoscopeSelectors, RootState } from '@ricult/store';

const Details = () => {
  const q: { card: string } = useParams<{ card: string }>();
  const dispatch = useDispatch();
  const horoscope = useSelector(horoscopeSelectors.getUserHoroscope);
  const isLoading = useSelector(horoscopeSelectors.getHoroscopeLoadingStatus);

  useEffect(() => {
    dispatch(
      horoscopeActions.fetchHoroscope({ zodiacSign: q.card, day: 'today' })
    );
  }, [q]);

  return (
    <View>
      <Link to={'/cards'}>Back</Link>
      <HoroscopeCard
        horoscope={horoscope}
        loadingStatus={isLoading}
        zodiacItem={q.card}
      />
    </View>
  );
};

export default Details;
