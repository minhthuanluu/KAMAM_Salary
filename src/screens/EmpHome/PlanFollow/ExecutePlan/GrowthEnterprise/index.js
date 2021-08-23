import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, GETable, Header, Loading, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';
import { getMonth } from '../../../../../utils/Logistics';
import { getGrowthEnterprise } from '../../../../../api/emp';
import { showToast } from '../../../../../utils/toast';
import { _storeData } from '../../../../../utils/Storage';
import Toast from 'react-native-toast-message';

const GrowthEnterprise = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

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
        let res = await getGrowthEnterprise(month)
        if (res.status == "success") {
            showToast("success", "Thành công", "Lấy dữ liệu thành công")
            setData(res.data.data)
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
    const dataTest = [
        {
            taxCode: "123123",
            enterpriseName: "test1",
            subNumber: "123213",
            package: "asds"
        },
        {
            taxCode: "454545",
            enterpriseName: "test2",
            subNumber: "3455",
            package: "vcbc"
        },
        {
            taxCode: "787878",
            enterpriseName: "test3",
            subNumber: "331166",
            package: "sfdfd"
        },
        {
            taxCode: "787878",
            enterpriseName: "test4",
            subNumber: "331166",
            package: "sfdfd"
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Doanh nghiệp phát triển mới" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <GETable data={data} />
            </View>
            <Loading loading={loading}/>
        </SafeAreaView>
    );
}

export default GrowthEnterprise;