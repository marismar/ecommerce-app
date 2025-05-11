import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import React, { useState } from 'react';
import { SafeAreaView, StatusBar, StyleSheet, View } from 'react-native';
import { showMessage } from 'react-native-flash-message';
import { vs } from 'react-native-size-matters';
import AppButton from '../../components/AppButton';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import { isAndroid } from '../../helpers/platform_helper';
import { AuthStackParamList } from '../../navigation/AuthStack';
import { AppColors } from '../../styles/colors';
import { Spacing } from '../../styles/spacings';

export default function SignUpScreen() {
  const [name, setName] = useState<string>();
  const [email, setEmail] = useState<string>();
  const [password, setPassword] = useState<string>();

  const navigation = useNavigation<StackNavigationProp<AuthStackParamList>>();

  const signUp = () => {
    showMessage({
      message: `Create ${name} - ${email} - ${password}`,
      type: 'info',
      backgroundColor: AppColors.primary,
      color: AppColors.dark1,
    });
  };

  const goToSignInScreen = () => navigation.navigate('SignInScreen');

  return (
    <SafeAreaView style={styles.safeArea}>
      <View style={styles.container}>
        <View style={styles.header}>
          <AppText variant="heading1">Create account</AppText>
          <AppText variant="caption2" color={AppColors.dark2}>
            Fill your information below to continue.
          </AppText>
        </View>
        <View style={styles.form}>
          <View>
            <AppTextInput
              value={name}
              onChangeText={setName}
              label="Name"
              placeholder="Enter your name"
            />
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
              title="Sign Up"
              onPress={signUp}
              style={styles.submitButton}
            />
            <View style={styles.signInButton}>
              <AppText variant="caption3">Already have an account?</AppText>
              <AppButton
                title="Sign In"
                variant="underline"
                size="small"
                onPress={goToSignInScreen}
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
  signInButton: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
