import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, Text, View, StatusBar } from 'react-native';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, TextAmount } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';

const AVGIncomeDashboard = (props) => {
    const [beginMonth, setMonth] = useState('01' + '/' + moment(new Date()).format("YYYY"));
    const [sMonth, setSMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const navigation = useNavigation();
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Bình quân thu nhập" />
            <View style={styles.dateContainer}>
                <DatePicker month={beginMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(30) }} onChangeDate={(date) => setMonth(date)} />
                <DatePicker month={sMonth} width={width / 2 - fontScale(40)} style={{ marginLeft: fontScale(20) }} onChangeDate={(date) => setSMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <TextAmount text="Tổng Thu:" number=" 15,600,000" />
                <MenuItemShow value="8,000,000" style={{ marginTop: fontScale(40) }} title="Tổng lương cố định" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.fixedwage} width={width - fontScale(60)}  />
                <MenuItem value="6,300,000" style={{ marginTop: fontScale(50) }} title="Tổng lương sản phẩm" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.product} width={width - fontScale(60)} onPress={() => navigation.navigate("TotalProductwage")} />
                <MenuItemShow value="1,000,000" style={{ marginTop: fontScale(50) }} title="Tổng chi thưởng vượt KH tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planout} width={width - fontScale(60)}  />
                <MenuItemShow value="300,000" style={{ marginTop: fontScale(50) }} title="Tổng chi khác" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.others} width={width - fontScale(60)}  />
            </View>

        </SafeAreaView>
    );
}

export default AVGIncomeDashboard;