import { View, Text } from 'react-native';
import React from 'react';
import { ZodiacSignList } from '@ricult/ui';
import { useNavigation } from '@react-navigation/native';
import { AdhZodiacSignItem, AppRoutes } from '@ricult/models';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressListItem = (item: AdhZodiacSignItem) => {
    navigation.navigate(AppRoutes.card, { card: item.zodiacSign });
  };

  return (
    <View>
      <Text>HomeScreen</Text>
      <ZodiacSignList onPressListItem={onPressListItem} />
    </View>
  );
};

export default HomeScreen;
