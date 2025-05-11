import React from 'react';
import {
  StyleSheet,
  TextStyle,
  TouchableOpacity,
  TouchableOpacityProps,
  ViewStyle,
} from 'react-native';
import { vs } from 'react-native-size-matters';
import { AppColors } from '../styles/colors';
import { BorderRadius, Spacing } from '../styles/spacings';
import AppText, { AppTextVariant } from './AppText';

type AppButtonVariant =
  | 'primary'
  | 'secondary'
  | 'outline'
  | 'underline'
  | 'ghost';
type AppButtonSize = 'small' | 'medium' | 'large';

interface AppButtonProps extends TouchableOpacityProps {
  title: string;
  onPress?: () => void;
  variant?: AppButtonVariant;
  size?: AppButtonSize;
  style?: ViewStyle;
}

const AppButton = ({
  title,
  onPress,
  variant = 'primary',
  size = 'medium',
  style,
  ...rest
}: AppButtonProps) => {
  const { buttonStyle: buttonVariantStyles, textStyle } =
    getButtonVariantStyles(variant);
  const { buttonStyle: buttonSizeStyles, textVariant } =
    getButtonSizeStyles(size);

  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={!onPress}
      style={[styles.container, buttonVariantStyles, buttonSizeStyles, style]}
      activeOpacity={0.8}
      {...rest}
    >
      <AppText variant={textVariant} style={textStyle}>
        {title}
      </AppText>
    </TouchableOpacity>
  );
};

const getButtonVariantStyles = (
  variant: AppButtonVariant
): { buttonStyle: ViewStyle; textStyle: TextStyle } => {
  switch (variant) {
    case 'primary':
      return {
        buttonStyle: { backgroundColor: AppColors.primary },
        textStyle: { color: AppColors.dark1 },
      };
    case 'secondary':
      return {
        buttonStyle: { backgroundColor: AppColors.secondary },
        textStyle: { color: AppColors.dark1 },
      };
    case 'outline':
      return {
        buttonStyle: {
          backgroundColor: 'transparent',
          borderWidth: 2,
          borderColor: AppColors.dark3,
        },
        textStyle: { color: AppColors.dark1 },
      };
    case 'underline':
      return {
        buttonStyle: { backgroundColor: 'transparent' },
        textStyle: {
          color: AppColors.navy1,
          textDecorationLine: 'underline',
        },
      };
    case 'ghost':
      return {
        buttonStyle: { backgroundColor: 'transparent' },
        textStyle: { color: AppColors.dark2 },
      };
  }
};

const getButtonSizeStyles = (
  size: AppButtonSize
): { buttonStyle: ViewStyle; textVariant: AppTextVariant } => {
  switch (size) {
    case 'small':
      return {
        buttonStyle: { height: vs(32), paddingHorizontal: Spacing.xxs },
        textVariant: 'caption3Medium',
      };
    case 'medium':
      return {
        buttonStyle: { height: vs(40), paddingHorizontal: Spacing.xxs },
        textVariant: 'caption2Medium',
      };
    case 'large':
      return {
        buttonStyle: { height: vs(48), paddingHorizontal: Spacing.xxs },
        textVariant: 'caption1Medium',
      };
  }
};

const styles = StyleSheet.create({
  container: {
    borderRadius: BorderRadius.md,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default AppButton;
