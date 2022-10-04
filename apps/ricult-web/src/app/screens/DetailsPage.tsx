// @ts-nocheck

import { View, Text } from 'react-native';
import { HoroscopeCard, ZodiacSignList } from '@ricult/ui';
import { AdhZodiacSignItem, AppRoutes } from '@ricult/models';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { horoscopeActions, horoscopeSelectors, RootState } from '@ricult/store';

const Details = () => {
  const q: { card: string } = useParams<{ card: string }>();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const horoscope = useSelector(horoscopeSelectors.getUserHoroscope);
  const isLoading = useSelector(horoscopeSelectors.getHoroscopeLoadingStatus);
  useEffect(() => {
    dispatch(
      horoscopeActions.fetchHoroscope({ zodiacSign: q.card, day: 'today' })
    );
  }, [q]);

  return (
    <View>
      <HoroscopeCard
        horoscope={horoscope}
        loadingStatus={isLoading}
        zodiacItem={q.card}
      />
      {/* <ZodiacSignList onPressListItem={onPressListItem} /> */}
    </View>
  );
};

export default Details;
