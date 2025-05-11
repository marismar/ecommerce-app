import React from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  ViewProps,
  ViewStyle,
} from 'react-native';
import { AppColors } from '../styles/colors';

type AppIconButtonVariant = 'primary' | 'default';
type AppIconButtonSize = 'small' | 'medium' | 'large';

interface AppIconButtonProps extends ViewProps {
  icon: React.ReactNode;
  onPress?: () => void;
  variant?: AppIconButtonVariant;
  size?: AppIconButtonSize;
  style?: ViewStyle;
}

const AppIconButton = ({
  variant = 'default',
  size = 'medium',
  icon,
  onPress,
  style,
  ...rest
}: AppIconButtonProps) => {
  const buttonVariantStyle = getButtonVariantStyles(variant);
  const buttonSizeStyle = getButtonSizeStyles(size);
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.base, buttonVariantStyle, buttonSizeStyle, style]}
      {...rest}
    >
      {icon}
    </TouchableOpacity>
  );
};

const getButtonVariantStyles = (variant: AppIconButtonVariant): ViewStyle => {
  switch (variant) {
    case 'default':
      return { backgroundColor: AppColors.light3 };
    case 'primary':
      return { backgroundColor: AppColors.primary };
  }
};

const getButtonSizeStyles = (size: AppIconButtonSize): ViewStyle => {
  switch (size) {
    case 'small':
      return { width: 24, height: 24 };
    case 'medium':
      return { width: 42, height: 42 };
    case 'large':
      return { width: 42, height: 42 };
  }
};

export default AppIconButton;

const styles = StyleSheet.create({
  base: {
    borderRadius: 21,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
