import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, ListItem } from '../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../utils/Fonts';
import { width } from '../../../utils/Dimenssion';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../utils/Images';

const SubscriberQuality = (props) => {
    const [beginMonth, setMonth] = useState('01' + '/' + moment(new Date()).format("YYYY"));
    const [sMonth, setSMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar
                translucent backgroundColor={colors.primary} />
            <Header title="Chất lượng thuê bao" />
            <View style={styles.dateContainer}>
                <DatePicker month={beginMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => setMonth(date)} />
                <DatePicker month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => setSMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <View style={styles.bg}>
                    <ListItem icon={images.debtPercent} title="Tỉ lệ nợ / doanh thu" price="0,011%" />
                    <View style={{ marginLeft: 20 }}>
                        <ListItem icon={images.totalDebtNinety} title="Tổng nợ >= 90 ngày" price="100,000" />
                        <ListItem icon={images.totalRevenue} title="Tổng doanh thu" price="9,000,000" />
                    </View>
                    <ListItem icon={images.newSubPrePaid} title="Tổng TBTS PTM" price="200" />
                    <View style={{ marginLeft: 20 }}>
                        <ListItem icon={images.revokeAmount} title="TBTS cắt hủy" price=" 50TB - 25%" />
                        <ListItem icon={images.preToPostPaid} title="Fone -> card" price="50TB - 20%" />
                        <ListItem icon={images.denyTwoC} title="TBTS chặn 2c" price="50TB - 20%" />
                    </View>
                    <ListItem icon={images.contractdebt} title="Nợ hợp đồng" price="0" />
                </View>
            </View>


        </SafeAreaView>
    );
}

export default SubscriberQuality;