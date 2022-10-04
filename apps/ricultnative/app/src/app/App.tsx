import { AppRoutes, RootStackParamList } from '@ricult/models';
import { rootStore } from '@ricult/store';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';
import { Provider } from 'react-redux';
import HomeScreen from './screens/HomeScreen';
import DetailsScreen from './screens/DetailsScreen';

const Stack = createStackNavigator<RootStackParamList>();

const App = () => {
  return (
    <Provider store={rootStore}>
      <NavigationContainer>
        <Stack.Navigator initialRouteName={AppRoutes.list}>
          <Stack.Screen name={AppRoutes.list} component={HomeScreen} />
          <Stack.Screen name={AppRoutes.card} component={DetailsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};

export default App;
