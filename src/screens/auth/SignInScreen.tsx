import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { vs } from 'react-native-size-matters';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import { isAndroid } from '../../helpers/platform_helper';
import { AppColors } from '../../styles/colors';
import { Spacing } from '../../styles/spacings';

export default function SignInScreen() {
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation();

  const signIn = () => {
    navigation.navigate('MainAppBottomTabs');
    showMessage({
      message: `Logado ${email} - ${password}`,
      type: 'info',
      backgroundColor: AppColors.primary,
      color: AppColors.dark1,
    });
  };

  const goToSignUpScreen = () => navigation.navigate('SignUpScreen');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText variant="heading1">Welcome back!</AppText>
          <AppText variant="caption2" color={AppColors.dark2}>
            Enter your email and password to continue.
          </AppText>
        </View>
        <View style={styles.form}>
          <View>
            <AppTextInput
              value={email}
              onChangeText={setEmail}
              label="Email"
              placeholder="Enter your email"
            />
            <AppTextInput
              value={password}
              onChangeText={setPassword}
              label="Password"
              placeholder="Enter your password"
              secureTextEntry
            />
          </View>
          <View>
            <AppButton
              title="Sign In"
              onPress={signIn}
              style={styles.submitButton}
            />
            <View style={styles.signUpButton}>
              <AppText variant="caption3">Don't have an account?</AppText>
              <AppButton
                title="Sign Up"
                variant="underline"
                size="small"
                onPress={goToSignUpScreen}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    paddingTop: isAndroid ? (StatusBar.currentHeight || 0) + Spacing.md : 0,
    backgroundColor: AppColors.white,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: Spacing.md,
    rowGap: vs(Spacing.xxxl),
  },
  header: { alignItems: 'center', rowGap: Spacing.xs },
  form: { rowGap: vs(Spacing.xxl) },
  submitButton: {
    marginBottom: Spacing.md,
  },
  signUpButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
