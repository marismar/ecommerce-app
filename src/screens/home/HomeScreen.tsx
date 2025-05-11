import { BadgePercent, Bell, ChevronRight } from 'lucide-react-native';
import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import AppIconButton from '../../components/AppIconButton';
import AppMainHeader from '../../components/AppMainHeader';
import AppProductCard from '../../components/AppProductCard';
import AppSafeView from '../../components/AppSafeView';
import AppText from '../../components/AppText';
import AppTextInput from '../../components/AppTextInput';
import { products } from '../../data/products';
import { AppColors } from '../../styles/colors';
import { Spacing } from '../../styles/spacings';

const HomeScreen = () => {
  return (
    <AppSafeView>
      <AppMainHeader>
        <AppIconButton
          variant="primary"
          icon={<BadgePercent size={18} color={AppColors.dark1} />}
        />

        <View style={styles.deliveryAddress}>
          <AppText variant="caption4" color={AppColors.dark2}>
            Delivery address
          </AppText>
          <AppText variant="caption2Medium">92 High Street, London</AppText>
        </View>

        <AppIconButton icon={<Bell size={18} color={AppColors.dark1} />} />
      </AppMainHeader>
      <AppTextInput
        style={styles.searchInput}
        placeholder="Search the entire shop"
      />

      <FlatList
        data={products}
        // data={[]}
        keyExtractor={item => item?.id}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listColumnWrapper}
        renderItem={({ item }) => <AppProductCard item={item} />}
        ItemSeparatorComponent={() => <View style={styles.listSeparator} />}
        ListEmptyComponent={
          <AppText variant="paragraph6">No products found</AppText>
        }
        ListHeaderComponent={
          <View style={styles.listHeader}>
            <AppText variant="paragraph2">Products</AppText>
            <View style={styles.listHeaderSeeAllButton}>
              <AppText variant="paragraph6" color={AppColors.dark2}>
                See all
              </AppText>
              <AppIconButton
                size="small"
                icon={<ChevronRight size={14} color={AppColors.dark1} />}
              />
            </View>
          </View>
        }
      />
    </AppSafeView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  searchInput: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deliveryAddress: { alignItems: 'center' },
  listContainer: {
    rowGap: Spacing.xs,
    paddingBottom: 200,
  },
  listColumnWrapper: { justifyContent: 'space-between', columnGap: Spacing.md },
  listSeparator: { height: Spacing.xs },
  listHeader: { flexDirection: 'row', justifyContent: 'space-between' },
  listHeaderSeeAllButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: Spacing.xs,
  },
});
