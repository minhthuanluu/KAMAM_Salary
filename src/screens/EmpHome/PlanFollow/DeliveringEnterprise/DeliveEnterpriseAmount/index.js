import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, GETable, Header, ListItem, Loading, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';
import { showToast } from '../../../../../utils/toast';
import { _storeData } from '../../../../../utils/Storage';
import Toast from 'react-native-toast-message';
import { changeTime, getMonth } from '../../../../../utils/Logistics';
import { getDeliveryEnterprise } from '../../../../../api/emp';

const DeliveEnterpriseAmount = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    const [lastMonth, setLastMonth] = useState(new Date().getMonth());
    const getDatePikerValue = async () => {
        let monthStore = await getMonth()
        if (monthStore != undefined) {
            setMonth(monthStore)
            getData(monthStore)
            var d = new Date(changeTime(monthStore))
            setCurrentMonth(d.getMonth() + 1)
            d.setMonth(d.getMonth() - 1);
            setLastMonth(d.getMonth() + 1)
        } else {
            getData(month)
            var d = new Date(changeTime(month))
            setCurrentMonth(d.getMonth() + 1)
            d.setMonth(d.getMonth() - 1);
            setLastMonth(d.getMonth() + 1)
        }
    }

    const getData = async (month) => {
        setLoading(true)
        let res = await getDeliveryEnterprise(month)
        if (res.status == "success") {
            // showToast("success", "Thành công", "Lấy dữ liệu thành công")
            setData(res.data.data)
            setLoading(false)
        } else {
            showToast("error", "Lỗi hệ thống", res.message)
            setLoading(false)
        }
    }

    const onChangeDatePicker = (date) => {
        var d = new Date(changeTime(date))
        setCurrentMonth(d.getMonth() + 1)
        d.setMonth(d.getMonth() - 1);
        setLastMonth(d.getMonth() + 1)

        setData([])
        setMonth(date)
        getData(date)
        _storeData("month", date)
    }
    useEffect(() => {
        navigation.addListener('focus', async () => {
            await getDatePikerValue()
        })
    })
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Số lượng DN đang giao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <View style={styles.bg}>
                    <Text></Text>
                    <ListItem icon={images.deliveenterpriseamount_ic} title={"Số lượng DN hiện có tháng " + lastMonth + ": "} price={data.lastAmount} />
                    <Text></Text>
                    <ListItem icon={images.deliveenterpriseamount_ic} title={"Số lượng DN tháng " + currentMonth + ": "} price={data.currentAmount} />
                    <Text></Text>
                </View>

            </View>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default DeliveEnterpriseAmount;