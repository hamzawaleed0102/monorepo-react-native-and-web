import { View, Text } from 'react-native';
import React from 'react';
import { ToggleLang, ZodiacSignList } from '@ricult/ui';
import { useNavigation } from '@react-navigation/native';
import { AdhZodiacSignItem, AppRoutes } from '@ricult/models';
// import { GlobeIcon } from '@ricult/assets';

const HomeScreen = () => {
  const navigation = useNavigation();

  const onPressListItem = (item: AdhZodiacSignItem) => {
    navigation.navigate(AppRoutes.card, { card: item.zodiacSign });
  };

  return (
    <View>
      {/* <GlobeIcon style={{ width: 40, height: 40 }} /> */}
      <ToggleLang />
      <Text>HomeScreen</Text>
      <ZodiacSignList onPressListItem={onPressListItem} />
    </View>
  );
};

export default HomeScreen;
