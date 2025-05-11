import React, { FC } from 'react';
import {
  ColorValue,
  StyleSheet,
  Text,
  TextProps,
  TextStyle,
} from 'react-native';
import { AppColors } from '../styles/colors';
import { AppFonts } from '../styles/fonts';

export type AppTextVariant =
  | 'heading1'
  | 'heading2'
  | 'heading3'
  | 'paragraph1'
  | 'paragraph2'
  | 'paragraph3'
  | 'paragraph4'
  | 'paragraph4Medium'
  | 'paragraph5'
  | 'paragraph5Medium'
  | 'paragraph6'
  | 'paragraph6Medium'
  | 'paragraph7'
  | 'paragraph7Medium'
  | 'caption1'
  | 'caption1Medium'
  | 'caption2'
  | 'caption2Medium'
  | 'caption3'
  | 'caption3Medium'
  | 'caption4'
  | 'caption4Medium';

interface AppTextProps extends TextProps {
  variant?: AppTextVariant;
  children: React.ReactNode;
  color?: ColorValue;
  style?: TextStyle | TextStyle[];
}

const AppText: FC<AppTextProps> = ({
  variant = 'caption1',
  children,
  color,
  style,
  ...rest
}) => {
  return (
    <Text
      {...rest}
      style={[
        { color: color || AppColors.dark1 },
        AppTextStyles[variant],
        style,
      ]}
    >
      {children}
    </Text>
  );
};

export const AppTextStyles = StyleSheet.create<
  Record<AppTextVariant, TextStyle>
>({
  heading1: {
    fontFamily: AppFonts.bold,
    fontSize: 34,
    lineHeight: 38,
  },
  heading2: {
    fontFamily: AppFonts.bold,
    fontSize: 28,
    lineHeight: 30,
  },
  heading3: {
    fontFamily: AppFonts.medium,
    fontSize: 22,
    lineHeight: 24,
  },
  paragraph1: {
    fontFamily: AppFonts.bold,
    fontSize: 34,
    lineHeight: 48,
  },
  paragraph2: {
    fontFamily: AppFonts.bold,
    fontSize: 28,
    lineHeight: 38,
  },
  paragraph3: {
    fontFamily: AppFonts.medium,
    fontSize: 22,
    lineHeight: 30,
  },
  paragraph4: {
    fontFamily: AppFonts.regular,
    fontSize: 18,
    lineHeight: 24,
  },
  paragraph4Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 18,
    lineHeight: 24,
  },
  paragraph5: {
    fontFamily: AppFonts.regular,
    fontSize: 16,
    lineHeight: 22,
  },
  paragraph5Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 16,
    lineHeight: 22,
  },
  paragraph6: {
    fontFamily: AppFonts.regular,
    fontSize: 14,
    lineHeight: 18,
  },
  paragraph6Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 14,
    lineHeight: 18,
  },
  paragraph7: {
    fontFamily: AppFonts.regular,
    fontSize: 12,
    lineHeight: 16,
  },
  paragraph7Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 12,
    lineHeight: 16,
  },
  caption1: {
    fontFamily: AppFonts.regular,
    fontSize: 18,
    lineHeight: 19,
  },
  caption1Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 18,
    lineHeight: 20,
  },
  caption2: {
    fontFamily: AppFonts.regular,
    fontSize: 16,
    lineHeight: 17,
  },
  caption2Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 16,
    lineHeight: 18,
  },
  caption3: {
    fontFamily: AppFonts.regular,
    fontSize: 14,
    lineHeight: 15,
  },
  caption3Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 14,
    lineHeight: 16,
  },
  caption4: {
    fontFamily: AppFonts.regular,
    fontSize: 12,
    lineHeight: 13,
  },
  caption4Medium: {
    fontFamily: AppFonts.medium,
    fontSize: 12,
    lineHeight: 14,
  },
});

export default AppText;
