import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';

const DeliveringEnterpriseDashboard = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Danh sách DN đang giao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <MenuItem style={{ marginTop: fontScale(30) }} title="Số lượng DN đang giao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.deliveenterpriseamount} width={width - fontScale(60)} onPress={() => navigation.navigate("DeliveEnterpriseAmount")} />
                <MenuItem style={{ marginTop: fontScale(40) }} title="SL TB trả sau thuộc tập DN giao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.delivesubsciberamount} width={width - fontScale(60)} onPress={() => navigation.navigate("DeliveSubsciberAmount")} />
                <MenuItem style={{ marginTop: fontScale(40) }} title="DT TB do KAM PT thuộc tập DN giao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.KAMPT} width={width - fontScale(60)} onPress={() => navigation.navigate("KAMPT")} />
            </View>
        </SafeAreaView>
    );
}

export default DeliveringEnterpriseDashboard;