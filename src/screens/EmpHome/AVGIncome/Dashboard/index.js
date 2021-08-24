import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { Body, DatePicker, Header, Loading, MenuItem, MenuItemShow, TextAmount } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';
import { changeTime, getMonth } from '../../../../utils/Logistics';
import { getAvgIncomeDashboard } from '../../../../api/emp';
import { showToast } from '../../../../utils/toast';
import Toast from 'react-native-toast-message';

const AVGIncomeDashboard = (props) => {
    const [fromMonth, setFromMonth] = useState('01' + '/' + moment(new Date()).format("YYYY"));
    const [toMonth, settoMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getDatePikerValue = async () => {
        // let monthStore = await getMonth()
        // if (monthStore != undefined) {
        //     setMonth(monthStore)
        //     getData(monthStore)
        // } else {
        getData(fromMonth, toMonth)
        // }
    }

    const getData = async (fromMonth, toMonth) => {
        setLoading(true)
        let res = await getAvgIncomeDashboard(fromMonth, toMonth)
        if (res.status == "success") {
            // showToast("success", "Thành công", "Lấy dữ liệu thành công")
            setData(res.data.data)
            // console.log(res.data.data)
            setLoading(false)
        } else {
            showToast("error", "Lỗi hệ thống", res.message)
            setLoading(false)
        }
    }

    const onChangeFromMonth = (date) => {
        // let fMonth = new Date(changeTime(date))
        // let tMonth = new Date(changeTime(toMonth))
        // if (tMonth.getMonth() < fMonth.getMonth()) {
        //     setFromMonth(fromMonth)
        //     showToast("error", "Lỗi", "Tháng trước được chọn không thể lớn hơn tháng sau")
        // } else {
        setData([])
        setFromMonth(date)
        getData(date, toMonth)
        // }
        // _storeData("month", date)
    }
    const onChangeToMonth = (date) => {
        // let fMonth = new Date(changeTime(fromMonth))
        // let tMonth = new Date(changeTime(date))
        // if (tMonth.getMonth() < fMonth.getMonth()) {
        //     showToast("error", "Lỗi", "Tháng sau được chọn không thể nhỏ hơn tháng trước")
        // } else {
        setData([])
        settoMonth(date)
        getData(fromMonth, date)
        // }
        // _storeData("month", date)
    }

    useEffect(() => {
        navigation.addListener('focus', async () => {
            await getDatePikerValue()
        })
    })
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Bình quân thu nhập" />
            <View style={styles.dateContainer}>
                <DatePicker month={fromMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => onChangeFromMonth(date)} />
                <DatePicker month={toMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => onChangeToMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <TextAmount text="Tổng Thu: " number={data.totalIncome} />
                <MenuItemShow value={data.totalFixedSalary} style={{ marginTop: fontScale(40) }} title="Tổng lương cố định" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.fixedwage} width={width - fontScale(60)} />
                <MenuItem value={data.totalProductSalary} style={{ marginTop: fontScale(50) }} title="Tổng lương sản phẩm" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.product} width={width - fontScale(60)} onPress={() => navigation.navigate("TotalProductwage")} />
                <MenuItemShow value={data.totalOutcomeSalary} style={{ marginTop: fontScale(50) }} title="Tổng chi thưởng vượt KH tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planout} width={width - fontScale(60)} />
                <MenuItemShow value={data.totalOther} style={{ marginTop: fontScale(50) }} title="Tổng chi khác" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.others} width={width - fontScale(60)} />
            </View>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default AVGIncomeDashboard;