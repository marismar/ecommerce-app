import { Ellipsis } from 'lucide-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppMainHeader from '../../components/AppMainHeader';
import AppSafeView from '../../components/AppSafeView';
import AppText from '../../components/AppText';
import { AppColors } from '../../styles/colors';

const CartScreen = () => {
  return (
    <AppSafeView>
      <AppMainHeader>
        <AppText variant="paragraph2">Cart</AppText>
        <AppIconButton icon={<Ellipsis size={18} color={AppColors.dark1} />} />
      </AppMainHeader>

      <AppText variant="caption2">Checkout</AppText>
    </AppSafeView>
  );
};

export default CartScreen;

const styles = StyleSheet.create({});
