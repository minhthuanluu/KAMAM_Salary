import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { FlatList, SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, Loading, MenuItem, MenuItemShow, SFTable } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';
import IFTable from '../../../../comps/ifTable';
import { _storeData } from '../../../../utils/Storage';
import { showToast } from '../../../../utils/toast';
import { getEvolveRevenue } from '../../../../api/emp';
import { getMonth } from '../../../../utils/Logistics';
import Toast from 'react-native-toast-message';

const IncomeFluct = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [icon, setIcon] = useState(images.none);
    const getDatePikerValue = async () => {
        let monthStore = await getMonth()
        if (monthStore != undefined) {
            setMonth(monthStore)
            getData(monthStore)
        } else {
            getData(month)
        }
    }

    const getData = async (month) => {
        setLoading(true)
        let res = await getEvolveRevenue(month)
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

    const onChangeDatePicker = (date) => {
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
            <Header title="Biến động doanh thu" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <ScrollView style={styles.body}>
                <IFTable data={data.qualSub} title="Doanh thu trong tập chất lượng" color="#FBEB0B38" />
                <IFTable data={data.noneQualSub} title=" Doanh thu trong tập không chất lượng" color="#6AECDB38" />
            </ScrollView>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default IncomeFluct;