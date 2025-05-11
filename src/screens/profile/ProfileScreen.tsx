import { Gift, Package } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppMainHeader from '../../components/AppMainHeader';
import AppSafeView from '../../components/AppSafeView';
import AppText from '../../components/AppText';
import { AppColors } from '../../styles/colors';

const ProfileScreen = () => {
  return (
    <AppSafeView>
      <AppMainHeader>
        <AppIconButton
          variant="primary"
          icon={<Gift size={18} color={AppColors.dark1} />}
        />
        <AppText variant="caption1Medium">Profile</AppText>

        <AppIconButton icon={<Package size={18} color={AppColors.dark1} />} />
      </AppMainHeader>

      <AppText variant="caption2">Personal Data</AppText>
    </AppSafeView>
  );
};

export default ProfileScreen;

const styles = StyleSheet.create({});
