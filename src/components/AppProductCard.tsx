import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { Product } from '../data/products';
import { AppColors } from '../styles/colors';
import { BorderRadius, Spacing } from '../styles/spacings';
import AppText from './AppText';

interface AppProductCardProps {
  item: Product;
}

const AppProductCard = ({ item }: AppProductCardProps) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image style={styles.imageSource} source={{ uri: item.image }} />
      </View>

      <AppText variant="caption3">{item.name}</AppText>
      <View style={styles.productName}>
        <AppText variant="caption2Medium">$ {item.price}</AppText>
        <AppText
          style={styles.productOriginalPrice}
          variant="caption4Medium"
          color={AppColors.dark2}
        >
          $ {item.originalPrice}
        </AppText>
      </View>
    </View>
  );
};

export default AppProductCard;

const styles = StyleSheet.create({
  container: { flex: 1, gap: Spacing.xxs },
  imageContainer: {
    backgroundColor: AppColors.light3,
    borderRadius: BorderRadius.sm,
    padding: Spacing.xs,
    width: '100%',
    height: 150,
  },
  imageSource: { flex: 1, resizeMode: 'contain' },
  productOriginalPrice: { textDecorationLine: 'line-through' },
  productName: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    gap: Spacing.xxs,
  },
});
