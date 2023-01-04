import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { DashboardScreen } from './DashboardScreen';
import { ProductsScreen } from './ProductsScreen';

const Drawer = createDrawerNavigator();

export const MainScreen = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Dashboard" component={DashboardScreen} />
      <Drawer.Screen name="Products" component={ProductsScreen} />
    </Drawer.Navigator>
  );
};
