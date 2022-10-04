import {
  ActivityIndicator,
  SafeAreaView,
  ScrollView,
  View,
  Text,
} from 'react-native';
import { MotiView } from 'moti';
import { HoroscopeCardProps } from './horoscope-card.props';

export function HoroscopeCard({
  zodiacItem,
  horoscope,
  loadingStatus,
}: HoroscopeCardProps) {
  return (
    <SafeAreaView>
      <MotiView
        from={{
          opacity: 0,
          scale: 0,
        }}
        animate={{
          opacity: 1,
          scale: 1,
        }}
        delay={500}
        transition={{
          type: 'timing',
        }}
      >
        <View>
          <Text style={{ fontSize: 30 }}>
            {typeof zodiacItem === 'string' ? zodiacItem : ''}
          </Text>
          <Text>Your Horoscope for Today</Text>
          {loadingStatus === 'loaded' && horoscope ? (
            <>
              <Text>{horoscope.description}</Text>
              <Text>Mood: {horoscope.mood}</Text>
              <Text>Color: {horoscope.color}</Text>
              <Text>Compatibility: {horoscope.compatibility}</Text>
              <Text>Lucky Number: {horoscope.luckyNumber}</Text>
              <Text>Lucky Time: {horoscope.luckyTime}</Text>
            </>
          ) : loadingStatus === 'error' ? (
            <Text>Oops! Something went wrong. Please try agian.</Text>
          ) : (
            <ActivityIndicator size="large" />
          )}
        </View>
      </MotiView>
    </SafeAreaView>
  );
}
