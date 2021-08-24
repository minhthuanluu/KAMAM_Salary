import moment from 'moment';
import React, { useEffect } from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, ListItem, Loading } from '../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../utils/Fonts';
import { width } from '../../../utils/Dimenssion';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../utils/Images';
import { showToast } from '../../../utils/toast';
import Toast from 'react-native-toast-message';
import { getSubscriberQuality } from '../../../api/emp';

const SubscriberQuality = (props) => {
    const [beginMonth, setMonth] = useState('01' + '/' + moment(new Date()).format("YYYY"));
    const [sMonth, setSMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const getData = async () => {
        setLoading(true)
        let res = await getSubscriberQuality()
        if (res.status == "success") {
            // showToast("success", "Thành công", "Lấy dữ liệu thành công")
            setData(res.data.data)
            setMonth(res.data.data.beginMonth)
            setSMonth(res.data.data.endMonth)
            // console.log(res.data.data)
            setLoading(false)
        } else {
            showToast("error", "Lỗi hệ thống", res.message)
            setLoading(false)
        }
    }
    useEffect(() => {
        navigation.addListener('focus', async () => {
            await getData()
        })
    })
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Chất lượng thuê bao" />
            <View style={styles.dateContainer}>
                <DatePicker disable={true} month={beginMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} />
                <DatePicker disable={true} month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <View style={styles.bg}>
                    <ListItem icon={images.debtPercent} title="Tỉ lệ nợ / doanh thu" price={data.debtPercent} />
                    <View style={{ marginLeft: 20 }}>
                        <ListItem icon={images.totalDebtNinety} title="Tổng nợ >= 90 ngày" price={data.totalDebtNinety} />
                        <ListItem icon={images.totalRevenue} title="Tổng doanh thu" price={data.totalRevenue} />
                    </View>
                    <ListItem icon={images.newSubPrePaid} title="Tổng TBTS PTM" price={data.newSubPrePaid} />
                    <View style={{ marginLeft: 20 }}>
                        <ListItem icon={images.revokeAmount} title="TBTS cắt hủy" price={data.revokeAmount} />
                        <ListItem icon={images.preToPostPaid} title="Fone -> card" price={data.foneCard} />
                        <ListItem icon={images.denyTwoC} title="TBTS chặn 2c" price={data.denyTwoC} />
                    </View>
                    <ListItem icon={images.contractdebt} title="Nợ hợp đồng" price={data.contractDebt} />
                </View>
            </View>
            <Loading loading={loading} />

        </SafeAreaView>
    );
}

export default SubscriberQuality;