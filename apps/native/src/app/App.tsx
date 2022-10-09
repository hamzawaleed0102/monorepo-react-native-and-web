import { AppRoutes, RootStackParamList } from '@ricult/models';
import { rootStore } from '@ricult/store';
import { i18n } from '@ricult/i18n';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/home/home-screen';
import DetailsScreen from './screens/DetailsScreen';
import SplashScreen from './screens/SplashScreen';
import { I18nextProvider } from 'react-i18next';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={rootStore}>
      <I18nextProvider i18n={i18n}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName={AppRoutes.splash}>
            <Stack.Screen
              name={AppRoutes.splash}
              component={SplashScreen}
              options={{ headerShown: false }}
            />
            <Stack.Screen name={AppRoutes.list} component={HomeScreen} />
            <Stack.Screen name={AppRoutes.card} component={DetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </I18nextProvider>
    </Provider>
  );
};

export default App;
