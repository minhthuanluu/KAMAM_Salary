import React, { useState, useEffect } from "react";
import { SafeAreaView, Text,View } from "react-native";
import { Body, DatePicker, GeneralListItem, Header } from "../../../../comps";
import { styles } from "./style";
import { images } from "../../../../utils/Images";
import moment from "moment";
import { getKPIByMonth, getMonthSalary, getSalaryByMonth } from "../../../../api/manager";
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
  const [month, setMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"));
  const navigation = useNavigation();
  const route = useRoute();

  const getData = async (month, branchCode, shopCode) => {
    setLoading(true);
    setMessage("");
    await getSalaryByMonth(month, branchCode,shopCode).then((data) => {
      if (data.status == "success") {
        setLoading(false);
        // console.log(data.data.data)
        if (data.length == 0) {
          setData([])
          setMessage(data.message);
        } else {
          // console.log(data)
          setData(data.data.data);
          setGeneralData(data.data.general);
        }
      }

      if (data.status == "failed") {
        setLoading(false);
        Toast.show({
          text1: "Cảnh báo",
          text2: data.message,
          type: "error",
          visibilityTime: 1000,
          autoHide: true,
          onHide: () => navigation.goBack()
        })
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
    getData(month, "", "");
  }, [month])

  const _onChangeMonth = (value) => {
    setMonth(value);
    getData(value, "", "");
  };
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar translucent backgroundColor={colors.primary} />
      <Header title={text.salaryMonth} />
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
                  monthSalary
                    // backgroundColor={"#EFFEFF"}
                    textColor={"#2E2E31"}
                    key={index}
                    title={item.shopName}
                    titleArray={[, "Lương CĐ", "CP Duy trì","CP Data KK", "CP thay sim", "Tổng CP"]}
                    item={[,item.permanentSalary, item.maintainceSalary, item.incentiveSalary, item.simSalary, item.totalSalary]}
                    icon={images.branch}
                //     navigation.navigate("AdminMonthSalaryShop", {
                    // item: {
                    //   "branchCode": item.shopCode,
                    //   "month": month
                    // }
                //   })
                  onPress={() =>navigation.navigate('AdminMonthSalaryShop',{
                    item: {
                      "branchCode": item.shopCode,
                      "month": month
                    }
                  })} />
                { index == data.length - 1 ?
                  <GeneralListItem
                    style={{ marginBottom: fontScale(110), marginTop: fontScale(38) }}
                    monthSalary
                    backgroundColor={"#EFFEFF"}
                    key={index}
                    title={generalData.shopName}
                    titleArray={[, "Lương CĐ", "CP Duy trì","CP Data KK", "CP thay sim", "Tổng CP"]}
                    item={generalData&&[,generalData.permanentSalary, generalData.maintainceSalary, generalData.incentiveSalary,generalData.simSalary, generalData.totalSalary]}
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
