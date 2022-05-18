/* eslint-disable import/no-named-as-default-member */
/* eslint-disable import/no-named-as-default */
/* eslint-disable import/named */
/* eslint-disable import/no-unresolved */
import { useSingleCoinMarketData } from "@ledgerhq/live-common/lib/market/MarketDataProvider";
import { Account } from "@ledgerhq/live-common/lib/types";
import { Flex, Icons, ScrollContainerHeader, Text } from "@ledgerhq/native-ui";
import React, { memo, useCallback, useEffect, useMemo, useState } from "react";
import { useTranslation } from "react-i18next";
import { FlatList, Image, RefreshControl } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { useDispatch, useSelector } from "react-redux";
import { useTheme } from "styled-components/native";
import {
  addStarredMarketCoins,
  removeStarredMarketCoins,
} from "../../../actions/settings";
import { track } from "../../../analytics";
import CircleCurrencyIcon from "../../../components/CircleCurrencyIcon";
import { FabMarketActions } from "../../../components/FabActions";
import Button from "../../../components/wrappedUi/Button";
import { NavigatorName, ScreenName } from "../../../const";
import { withDiscreetMode } from "../../../context/DiscreetModeContext";
import { useLocale } from "../../../context/Locale";
import { flattenAccountsByCryptoCurrencyScreenSelector } from "../../../reducers/accounts";
import { starredMarketCoinsSelector } from "../../../reducers/settings";
import AccountRow from "../../Accounts/AccountRow";
import DeltaVariation from "../DeltaVariation";
import { IconContainer } from "../MarketRowItem";
import { counterValueFormatter, getDateFormatter } from "../utils";
import MarketGraph from "./MarketGraph";
import MarketStats from "./MarketStats";

export const BackButton = ({ navigation }: { navigation: any }) => (
  <Button
    size="large"
    onPress={() => navigation.goBack()}
    Icon={Icons.ArrowLeftMedium}
  />
);

function MarketDetail({
  navigation,
  route,
}: {
  navigation: any;
  route: { params: { currencyId: string; resetSearchOnUmount?: boolean } };
}) {
  const { params } = route;
  const { currencyId, resetSearchOnUmount } = params;
  const { t } = useTranslation();
  const { colors } = useTheme();
  const { locale } = useLocale();
  const dispatch = useDispatch();
  const starredMarketCoins: string[] = useSelector(starredMarketCoinsSelector);
  const isStarred = starredMarketCoins.includes(currencyId);

  const {
    selectedCoinData: currency,
    selectCurrency,
    chartRequestParams,
    loading,
    loadingChart,
    refreshChart,
    counterCurrency,
  } = useSingleCoinMarketData();

  const {
    name,
    image,
    price,
    priceChangePercentage,
    internalCurrency,
    chartData,
  } = currency || {};

  useEffect(() => {
    const resetState = () => {
      // selectCurrency();
    };
    const sub = navigation.addListener("blur", resetState);
    return () => {
      sub();
    };
  }, [selectCurrency, resetSearchOnUmount, navigation]);

  const allAccounts = useSelector(
    flattenAccountsByCryptoCurrencyScreenSelector(internalCurrency),
  );

  const filteredAccounts = useMemo(
    () => allAccounts.sort((a, b) => b.balance - a.balance).slice(0, 3),
    [allAccounts],
  );

  const toggleStar = useCallback(() => {
    const action = isStarred ? removeStarredMarketCoins : addStarredMarketCoins;
    dispatch(action(currencyId));
  }, [dispatch, isStarred, currencyId]);

  const { range } = chartRequestParams;

  const dateRangeFormatter = useMemo(() => getDateFormatter(locale, range), [
    locale,
    range,
  ]);

  const renderAccountItem = useCallback(
    ({ item, index }: { item: Account; index: number }) => (
      // @ts-expect-error import js issue
      <AccountRow
        navigation={navigation}
        navigationParams={[
          NavigatorName.Accounts,
          {
            screen: ScreenName.Account,
            params: {
              parentId: item?.parentId,
              accountId: item.id,
            },
          },
        ]}
        account={item}
        accountId={item.id}
        isLast={index === allAccounts.length - 1}
        hideDelta
      />
    ),
    [navigation, allAccounts.length],
  );

  useEffect(() => {
    if (name) {
      track("Page Market Coin", {
        currencyName: name,
        starred: isStarred,
        timeframe: chartRequestParams.range,
      });
    }
  }, [name, isStarred, chartRequestParams.range]);

  const [refreshControlVisible, setRefreshControlVisible] = useState(false);

  const handlePullToRefresh = useCallback(() => {
    refreshChart();
    setRefreshControlVisible(true);
  }, [refreshChart, setRefreshControlVisible]);

  useEffect(() => {
    if (refreshControlVisible && !loading) setRefreshControlVisible(false);
  }, [refreshControlVisible, loading]);

  const [hoveredItem, setHoverItem] = useState<any>(null);

  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: colors.background.main }}>
      <ScrollContainerHeader
        TopLeftSection={<BackButton navigation={navigation} />}
        MiddleSection={
          <Flex
            height={48}
            flexDirection="row"
            justifyContent="flex-start"
            alignItems="center"
          >
            {internalCurrency ? (
              // @ts-expect-error import js issue
              <CircleCurrencyIcon
                size={32}
                currency={internalCurrency}
                color={undefined}
                sizeRatio={0.9}
              />
            ) : (
              image && (
                <IconContainer>
                  <Image
                    source={{ uri: image }}
                    style={{ width: 32, height: 32 }}
                    resizeMode="contain"
                  />
                </IconContainer>
              )
            )}
            <Text ml={3} variant="large" fontSize={22}>
              {name}
            </Text>
          </Flex>
        }
        TopRightSection={
          <Button
            size="large"
            onPress={toggleStar}
            iconName={isStarred ? "StarSolid" : "Star"}
          />
        }
        BottomSection={
          <>
            <Flex justifyContent="center" alignItems="flex-start" pb={3}>
              <Text variant="h1" mb={1}>
                {counterValueFormatter({
                  currency: counterCurrency,
                  value:
                    hoveredItem && hoveredItem.value
                      ? hoveredItem.value
                      : price,
                  locale,
                  t,
                })}
              </Text>
              <Flex height={20}>
                {hoveredItem && hoveredItem.date ? (
                  <Text variant="body" color="neutral.c70">
                    {dateRangeFormatter.format(hoveredItem.date)}
                  </Text>
                ) : priceChangePercentage !== null &&
                  !isNaN(priceChangePercentage) ? (
                  <DeltaVariation percent value={priceChangePercentage} />
                ) : (
                  <Text variant="body" color="neutral.c70">
                    {" "}
                    -
                  </Text>
                )}
              </Flex>
            </Flex>
            {internalCurrency ? (
              <Flex mb={6}>
                <FabMarketActions
                  currency={internalCurrency}
                  eventProperties={{ currencyName: name, page: "MarketCoin" }}
                  accounts={filteredAccounts}
                  contentContainerStyle={{}}
                />
              </Flex>
            ) : null}
          </>
        }
        refreshControl={
          <RefreshControl
            refreshing={refreshControlVisible}
            colors={[colors.primary.c80]}
            tintColor={colors.primary.c80}
            onRefresh={handlePullToRefresh}
          />
        }
      >
        <MarketGraph
          setHoverItem={setHoverItem}
          chartRequestParams={chartRequestParams}
          loading={loading}
          loadingChart={loadingChart}
          refreshChart={refreshChart}
          chartData={chartData}
        />

        {filteredAccounts && filteredAccounts.length > 0 ? (
          <Flex mx={6} mt={8}>
            <Text variant="h3">{t("distribution.title")}</Text>
            <FlatList
              data={filteredAccounts}
              renderItem={renderAccountItem}
              keyExtractor={(item, index) => item.id + index}
            />
          </Flex>
        ) : null}
        <MarketStats currency={currency} counterCurrency={counterCurrency} />
      </ScrollContainerHeader>
    </SafeAreaView>
  );
}

export default memo(withDiscreetMode(MarketDetail));
