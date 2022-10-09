import React from 'react';
import { useEffect } from 'react';

import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { AppRoutes } from '@ricult/models';

const SplashScreen = () => {
  // FIXME boilerplate stuff here, needs refactoring
  const navigation = useNavigation();

  useEffect(() => {
    (async () => {
      setTimeout(() => {
        navigation.reset({
          index: 0,
          routes: [{ name: AppRoutes.list }],
        });
      }, 500); //Fake delay
    })();
  }, []);
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text style={{ fontSize: 40 }}>Loading...</Text>
    </View>
  );
};

export default SplashScreen;
