import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  Home,
  LucideProps,
  ShoppingBag,
  UserCircle,
} from 'lucide-react-native';
import React from 'react';
import AppText, { AppTextStyles } from '../components/AppText';
import CartScreen from '../screens/cart/CartScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ProfileScreen from '../screens/profile/ProfileScreen';
import { AppColors } from '../styles/colors';

const Tab = createBottomTabNavigator();

export default function MainAppBottomTabs() {
  const buildIconStyle = (fill: string): LucideProps => {
    return {
      fill,
      size: 28,
      strokeWidth: 1,
      stroke: AppColors.dark2,
    };
  };

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: AppColors.primary,
        tabBarInactiveTintColor: AppColors.white,
        tabBarLabelStyle: {
          ...AppTextStyles.caption4,
        },
        tabBarLabel: props => {
          return (
            <AppText
              variant="caption4"
              color={props.focused ? AppColors.black : AppColors.dark2}
            >
              {props.children}
            </AppText>
          );
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarIcon: ({ color }) => <Home {...buildIconStyle(color)} />,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartScreen}
        options={{
          tabBarIcon: ({ color }) => <ShoppingBag {...buildIconStyle(color)} />,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          tabBarIcon: ({ color }) => <UserCircle {...buildIconStyle(color)} />,
        }}
      />
    </Tab.Navigator>
  );
}
