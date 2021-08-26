import React, { useEffect, useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, ListItem, Loading } from '../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../utils/Fonts';
import { width } from '../../../utils/Dimenssion';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../utils/Images';
import { getKPIMonthReport } from '../../../api/emp';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import { _storeData } from '../../../utils/Storage';

const KPIMonthReport = (props) => {
    const navigation = useNavigation();
    const [data, setData] = useState([]);
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const [loading, setLoading] = useState(true);

    const getData = async (month) => {
        setLoading(true)
        let res = await getKPIMonthReport(month)
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
            await getData(month)
        })
    })
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Báo cáo KPI tháng" />

            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>

            <Body style={{ marginTop: fontScale(30) }} showInfo={false} />

            <ScrollView style={styles.body}>
                <View style={styles.bg}>
                    <ListItem isFather={true} icon={images.newSubTotal} title="Chỉ tiêu phát triển mới TB: " price={data.newSubTotal} />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price={data.newSubTarget} />
                        <ListItem isChild={true} icon={images.none} title="SLTB chất lượng thực hiện" price={data.newSubAmount} />
                        <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price={data.newSubCompletePercent} />
                    </View>
                    <ListItem isFather={true} icon={images.growthTotal} title="Chỉ tiêu tăng trưởng doanh thu:" price={data.growthTotal} />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price={data.growthTarget} />
                        <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price={data.growthIncome} />
                        <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price={data.growthCompletePercent} />
                    </View>
                    <ListItem isFather={true} icon={images.totalOTarget} title="Chỉ tiêu điều hành_CTĐH:" price={data.totalOTarget} />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem icon={images.none} title="Chỉ tiêu PTM doanh nghiệp:" price={data.totalOTnewSub} />
                        <View style={{ marginLeft: 15 }}>
                            <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price={data.totalOTtarget} />
                            <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price={data.totalOTincome} />
                            <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price={data.totalOTcompletePercent} />
                        </View>
                        <ListItem icon={images.none} title="Chỉ tiêu tăng trưởng DTVT:" price={data.growthTotal} />
                        <View style={{ marginLeft: 15 }}>
                            <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price={data.growthTotalTarget} />
                            <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price={data.growthTotalIncome} />
                            <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price={data.growthTotalCompletePercent} />
                        </View>
                        <ListItem icon={images.none} title="BQ % HT chỉ tiêu điều hành:" price={data.avgTarget} />
                    </View>
                    <ListItem isFather={true} icon={images.totalKPI} title="Tổng KPI khoán sản phẩm:" price={data.totalKPI} />
                </View>
            </ScrollView>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default KPIMonthReport;