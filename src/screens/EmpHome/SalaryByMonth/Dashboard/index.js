import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem, TextAmount } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { styles } from './style';
import { useNavigation } from '@react-navigation/core';

const SalaryByMonthDashboard = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Lương theo tháng" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(27) }} showInfo={false} />
            <View style={styles.body}>
                <TextAmount text="Tổng Lương:" number=" 15,600,000" />
                <MenuItem value="8,000,000" style={{ marginTop: fontScale(30) }} title="Lương cố định" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.fixedwage} width={width - fontScale(60)} onPress={() => navigation.navigate("Fixedwage")} />
                <MenuItem value="6,300,000" style={{ marginTop: fontScale(30) }} title="Lương sản phẩm" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.product} width={width - fontScale(60)} onPress={() => navigation.navigate("Product")} />
                <MenuItem value="1,000,000" style={{ marginTop: fontScale(30) }} title="Chi thưởng vượt KH tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planout} width={width - fontScale(60)} onPress={() => navigation.navigate("PlanOut")} />
                <MenuItem value="-500,000" style={{ marginTop: fontScale(30) }} title="Chế tài vi phạm" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.sanctions} width={width - fontScale(60)} onPress={() => navigation.navigate("Sanctions")} />
                <MenuItem value="300,000" style={{ marginTop: fontScale(30) }} title="Chi khác" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.others} width={width - fontScale(60)} onPress={() => navigation.navigate("Others")} />
            </View>
        </SafeAreaView>
    );
}

export default SalaryByMonthDashboard;