import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';
const ExecutePlanDashboard = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Thực hiện kế hoạch" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />

            <View style={styles.body}>
                <TextAmount style={{ marginBottom: fontScale(10) }} text="KPI Tổng" number="100%" />
                <ScrollView>
                    <MenuItemShow value="200" style={{ marginTop: fontScale(25) }} title="Tổng TBTS" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.totalpostpaid} width={width - fontScale(60)}  />
                    <MenuItemShow value="100%(100/100)" style={{ marginTop: fontScale(30) }} title="TB chất lượng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.qualitysub} width={width - fontScale(60)}  />
                    <MenuItemShow value="1,000,000" style={{ marginTop: fontScale(30) }} title="Doanh thu phát sinh" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.incurredrevenue} width={width - fontScale(60)}  />
                    <MenuItem value=" " style={{ marginTop: fontScale(30) }} title="Doanh nghiệp phát triển mới" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.growthenterprise} width={width - fontScale(60)} onPress={() => navigation.navigate("GrowthEnterprise")} />
                    <MenuItemShow value="2,000,000" style={{ marginTop: fontScale(30) }} title="Doanh thu viễn thông" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.telecommunicationrevenue} width={width - fontScale(60)}  />
                    <MenuItemShow value="100%(100/100)" style={{ marginTop: fontScale(30) }} title="Doanh thu bán lẻ" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.retailrevenue} width={width - fontScale(60)}  />
                    <MenuItemShow value="100%(100/100)" style={{ marginTop: fontScale(30), marginBottom: fontScale(20) }} title="Thay sim 4G" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.change4Gsim} width={width - fontScale(60)}  />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default ExecutePlanDashboard;