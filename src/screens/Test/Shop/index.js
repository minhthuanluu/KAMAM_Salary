import React, { useState, useEffect } from "react";
import { SafeAreaView } from "react-native";
import { Body, DatePicker, GeneralListItem, Header } from "../../../comps";
import { styles } from "./style";
import { images } from "../../../utils/Images";
import moment from "moment";
import { getKPIByMonth, getMonthSalary } from "../../../api/manager";
import { width } from "../../../utils/Dimenssion";
import { fontScale } from "../../../utils/Fonts";
import { StatusBar } from "react-native";
import { text } from "../../../utils/Text";
import { colors } from "../../../utils/Colors";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { View } from "react-native";
import { useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";

const index = () => {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [generalData, setGeneralData] = useState({});
  const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
  const navigation = useNavigation();
  const route = useRoute();

  const getData = async (month, branchcode, shopCode) => {
    setLoading(true);
    await getMonthSalary(month, branchcode, shopCode).then((data) => {
      if (data.status == "success") {
        setData(data.data.data);
        setGeneralData(data.data.general);
        setLoading(false);
      }
      if (data.status == "v_error") {
        Toast.show({
          text1: "Cảnh báo",
          text2: data.message,
          type: "error",
          visibilityTime: 1000,
          autoHide: true,
          onHide: () => navigation.goBack()
        })
      }
    });
  };

  useEffect(() => {
    const { month, branchCode } = route.params?.item;
    setMonth(month);
    getData(month, branchCode, "");
  }, [navigation]);

  const _onChangeMonth = (value) => {
    setMonth(value);
    const { branchCode } = route.params?.item;
    getData(value, branchCode, "");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.salaryMonth}/>
      <DatePicker
        month={month}
        width={width - fontScale(120)}
        style={{ alignSelf: "center" }}
        onChangeDate={(date) => _onChangeMonth(date)}
      />
      <Body
        showInfo={false}
        style={{ marginTop: fontScale(15), zIndex: -10 }}
      />
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        {loading == true ? (
          <ActivityIndicator
            size="small"
            color={colors.primary}
            style={{ marginTop: fontScale(20) }}
          />
        ) : null}

        <View style={{ flex: 1 }}>
          <FlatList
            style={{ marginTop: fontScale(10) }}
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View>
                <GeneralListItem
                  style={{ marginTop: index==0 ? -fontScale(29):fontScale(30) }}
                  monthSalary
                    // backgroundColor={"#EFFEFF"}
                    textColor={"#2E2E31"}
                    key={index}
                    title={item.shopName}
                    titleArray={[, "Lương CĐ", "CP Duy trì","CP Data KK", "CP thay sim", "Tổng CP"]}
                    item={[item.totalSalary, item.incentiveSalary, item.totalEmp, item.totalSalary, item.incentiveSalary, item.totalEmp]}
                    icon={images.store}
                  onPress={() =>
                    navigation.navigate("AdminMonthSalaryEmp", {
                      item: {
                        branchCode: route.params?.item.branchCode,
                        shopCode: item.shopCode,
                        month: month,
                      },
                    })
                  }
                />
                {
                  index == data.length - 1 ?
                    <GeneralListItem
                      style={{ marginBottom: fontScale(110), marginTop: fontScale(38) }}
                      monthSalary
                      key={index}
                      backgroundColor={"#EFFEFF"}
                      title={generalData.shopName}
                      titleArray={[, "Lương CĐ", "CP Duy trì","CP Data KK", "CP thay sim", "Tổng CP"]}
                      item={generalData && [generalData.monthOutcome, generalData.permanentSalary, generalData.incentiveSalary, generalData.vasAffiliate, generalData.supportOutcome, generalData.encouSalary, generalData.other]}
                      icon={images.branch} />
                    : null
                }
              </View>
            )}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

export default index;

