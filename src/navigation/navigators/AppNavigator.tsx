import React, {useEffect} from 'react';

import {
  CardStyleInterpolators,
  StackNavigationOptions,
  createStackNavigator,
} from '@react-navigation/stack';

import BottomNavigator from './BottomNavigator';

import {routes} from '../../constants';
import {
  homeScreens,
  exploreScreens,
  forumScreens,
  messageScreens,
  profileScreens,
} from '../../screens/main';
import {Screen} from '../../types';

const AppStack = createStackNavigator();

const screenOption: StackNavigationOptions = {
  headerShown: false,
  cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
};

const mainScreens: Screen[] = [
  {
    name: routes.BOTTOM_TAB,
    component: BottomNavigator,
  },
  ...homeScreens,
  ...exploreScreens,
  ...forumScreens,
  ...messageScreens,
  ...profileScreens,
];

const AppNavigator = () => {
  return (
    <AppStack.Navigator
      screenOptions={screenOption}
      initialRouteName={routes.BOTTOM_TAB}>
      {mainScreens.map((screen: Screen) => {
        return (
          <AppStack.Screen
            key={screen.name}
            name={screen.name}
            component={screen.component}
          />
        );
      })}
    </AppStack.Navigator>
  );
};

export default AppNavigator;
