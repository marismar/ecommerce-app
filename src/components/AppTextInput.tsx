import React from 'react';
import {
  StyleSheet,
  TextInput,
  TextInputProps,
  TextStyle,
  View,
} from 'react-native';
import { vs } from 'react-native-size-matters';
import { AppColors } from '../styles/colors';
import { BorderRadius, Spacing } from '../styles/spacings';
import AppText, { AppTextStyles } from './AppText';

type InputVariant = 'default' | 'error';

interface AppTextInputProps extends TextInputProps {
  variant?: InputVariant;
  label?: string;
  errorMessage?: string;
}

const AppTextInput = ({
  variant = 'default',
  editable = true,
  label,
  errorMessage,
  style,
  ...rest
}: AppTextInputProps) => {
  const inputStyle = getVariantStyle(variant, editable);

  return (
    <View style={styles.container}>
      {!!label && (
        <AppText variant="paragraph6" color={AppColors.dark1}>
          {label}
        </AppText>
      )}

      <TextInput
        editable={editable}
        style={[styles.baseInput, inputStyle, style]}
        placeholderTextColor={AppColors.dark2}
        {...rest}
      />

      {!!errorMessage && (
        <AppText variant="paragraph7Medium" style={{ color: AppColors.error }}>
          {errorMessage}
        </AppText>
      )}
    </View>
  );
};

const getVariantStyle = (
  variant: InputVariant,
  editable: boolean
): TextStyle => {
  if (!editable) {
    return { backgroundColor: AppColors.light2, color: AppColors.dark2 };
  }

  switch (variant) {
    case 'default':
      return { backgroundColor: AppColors.light3 };
    case 'error':
      return {
        backgroundColor: AppColors.light2,
        borderWidth: 1,
        borderColor: AppColors.error,
      };
  }
};

const styles = StyleSheet.create({
  container: {
    marginVertical: Spacing.xs,
    rowGap: Spacing.xxs,
  },
  baseInput: {
    height: vs(40),
    paddingHorizontal: Spacing.lg,
    borderRadius: BorderRadius.md,
    ...AppTextStyles.caption2,
    color: AppColors.black,
  },
});

export default AppTextInput;
