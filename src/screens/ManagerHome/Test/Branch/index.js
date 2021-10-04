import React, { useState, useEffect } from "react";
import { SafeAreaView, Text,View } from "react-native";
import { Body, DatePicker, GeneralListItem, Header, DoubleMonthPicker } from "../../../../comps";
import { styles } from "./style";
import { images } from "../../../../utils/Images";
import moment from "moment";
import { getKPIByMonth, getMonthSalary } from "../../../../api/manager";
import { width } from "../../../../utils/Dimenssion";
import { fontScale } from "../../../../utils/Fonts";
import { StatusBar } from "react-native";
import { text } from "../../../../utils/Text";
import { colors } from "../../../../utils/Colors";
import { FlatList } from "react-native";
import { ActivityIndicator } from "react-native";
import { useBackButton, useFocusEffect, useNavigation, useRoute } from "@react-navigation/native";
import Toast from "react-native-toast-message";
import { useCallback } from "react";


const index = (props) => {
  const [data, setData] = useState([]);
  const [message, setMessage] = useState('');
  const [loading, setLoading] = useState(false);
  const [generalData, setGeneralData] = useState({});
  
  // const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
  
  const [beginMonth, setBeginMonth] = useState(moment(new Date()).format("01/YYYY"));
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));const navigation = useNavigation();
  const route = useRoute();

  const getData = async (beginMonth, endMonth) => {
    setLoading(true);
    setMessage("");
    await getDetailOutcome(navigation, beginMonth, endMonth).then((res) => {
      console.log(res.data)
            if (res.status == "success") {
                setData(res.data.data);
                setLoading(res.isLoading);
                setMessage(res.message)
            }
            if (res.status == "failed") {
                setLoading(res.isLoading);
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => { }
                })
            }
            if (res.status == "v_error") {
                setLoading(res.isLoading);
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 1000,
                    autoHide: true,
                    onHide: () => navigation.goBack()
                })
            }
        });
    }

  useEffect(() => {
    getData(beginMonth, endMonth);
  }, [""])

  const errorNotif = (message) => {
    Toast.show({
        text1: "Lưu ý",
        text2: message,
        type: "error",
        visibilityTime: 2000,
        autoHide: true
    })
}

const _onChangeMonth = async (value) => {
  await getData(value.beginMonth, value.endMonth);
}
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.averageIncome} />
      <View style={styles.dateContainer}>
                <DoubleMonthPicker beginMonth={beginMonth} endMonth={endMonth}
                    onChangeMonth={(value) => _onChangeMonth(value)}
                    onError={(message) => errorNotif(message)}
                />
            </View>
      <Body
        showInfo={false}
        style={{ marginTop: fontScale(15), zIndex: -10 }}
      />
      <View style={{ flex: 1, backgroundColor: colors.white }}>
        {loading == true ? <ActivityIndicator size="small" color={colors.primary} style={{ marginTop: fontScale(20) }} /> : null}
        <Text style={{ color: colors.primary, textAlign: "center" }}>{message && message}</Text>
        <View>
          <FlatList
            style={{marginTop:-fontScale(20)}}
            data={data}
            showsVerticalScrollIndicator={false}
            keyExtractor={(item, index) => index.toString()}
            renderItem={({ item, index }) => (
              <View>
                <GeneralListItem
                  style={{ marginTop: index==0 ? -fontScale(20):fontScale(30) }}
                  avgSalary
                  totalEmp={"( 9 NV )"}
                    // backgroundColor={"#EFFEFF"}
                    textColor={"#2E2E31"}
                    key={index}
                    title={item.shopName}
                    titleArray={[, "Tổng CPCĐ", "BQ CPCĐ","Tổng CPSP", "BQ CPSP", "Tổng CP","BQCP"]}
                    item={[item.totalSalary, item.incentiveSalary, item.totalEmp, item.totalSalary, item.incentiveSalary, item.totalEmp,item.totalSalary]}
                    icon={images.branch}
                //     navigation.navigate("AdminMonthSalaryShop", {
                    // item: {
                    //   "branchCode": item.shopCode,
                    //   "month": month
                    // }
                //   })
                  onPress={() =>navigation.navigate('AdminAVGIncomeShop',{
                    item: {
                      "branchCode": item.shopCode,
                      "month": month
                    }
                  })} />
                { index == data.length - 1 ?
                  <GeneralListItem
                    style={{ marginBottom: fontScale(110), marginTop: fontScale(38) }}
                    avgSalary
                    totalEmp={"( 9 NV )"}
                    backgroundColor={"#EFFEFF"}
                    key={index}
                    title={generalData.shopName}
                    titleArray={[, "Tổng CPCĐ", "BQ CPCĐ","Tổng CPSP", "BQ CPSP", "Tổng CP","BQCP"]}
                    item={generalData&&[generalData.monthOutcome, generalData.permanentSalary, generalData.incentiveSalary,generalData.vasAffiliate, generalData.supportOutcome, generalData.encouSalary, generalData.other]}
                    icon={images.company} /> : null
                }
              </View>
            )}
          />


        </View>

      </View>
      <Toast ref={(ref) => Toast.setRef(ref)} />
    </SafeAreaView>
  );
};

export default index;
