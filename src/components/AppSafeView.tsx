import React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { SafeAreaViewProps } from 'react-native-safe-area-context';
import { isAndroid } from '../helpers/platform_helper';
import { AppColors } from '../styles/colors';
import { Spacing } from '../styles/spacings';

interface AppSafeView extends SafeAreaViewProps {}

const AppSafeView = ({ children, style, ...rest }: AppSafeView) => {
  return (
    <SafeAreaView style={[styles.safeArea, style]} {...rest}>
      <View style={[styles.container, style]}>{children}</View>
    </SafeAreaView>
  );
};

export default AppSafeView;

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: AppColors.white,
    paddingTop: isAndroid ? (StatusBar.currentHeight || 0) + Spacing.md : 0,
  },
  container: { paddingHorizontal: Spacing.md, rowGap: Spacing.xs },
});
