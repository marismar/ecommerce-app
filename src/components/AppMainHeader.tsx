import React from 'react';
import { StyleSheet, View, ViewProps } from 'react-native';

interface AppMainHeaderProps extends ViewProps {}

const AppMainHeader = ({ children, style, ...rest }: AppMainHeaderProps) => {
  return (
    <View style={[styles.container, style]} {...rest}>
      {children}
    </View>
  );
};

export default AppMainHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
