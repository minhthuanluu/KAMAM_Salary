import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, Loading, MenuItem, MenuItemShow, SFTable } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';
import { getMonth } from '../../../../utils/Logistics';
import { showToast } from '../../../../utils/toast';
import { _storeData } from '../../../../utils/Storage';
import { getEvolveSubsciber } from '../../../../api/emp';
import Toast from 'react-native-toast-message';

const SubFluct = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(0, 'months').format("MM/YYYY"));
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
        let res = await getEvolveSubsciber(month)
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
            <Header title="Biến động thuê bao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />

            <View style={styles.body}>
                <SFTable data={data} />
            </View>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default SubFluct;