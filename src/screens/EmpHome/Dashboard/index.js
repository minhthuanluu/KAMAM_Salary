import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, BackHandler, View, ScrollView } from 'react-native';
import { colors } from '../../../utils/Colors';
import { MenuItem, Header, Body } from '../../../comps';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import { images } from '../../../utils/Images';
import { UserObj } from "../../../models";
import { width } from '../../../utils/Dimenssion';
import { fontScale } from '../../../utils/Fonts';
import { text } from '../../../utils/Text';
import { styles } from './style';
import { _removeData } from '../../../utils/Storage';
import Toast from 'react-native-toast-message';

const EmpDashboard = (route) => {
    const navigation = useNavigation();
    const imgUrl = ""
    const [user, setUserData] = useState(UserObj);
    const [loading, setLoading] = useState(false);
    const isFocus = useIsFocused();

    useEffect(() => {
        navigation.addListener('focus', async () => {
            _removeData("month")
            _removeData("tmonth")
            _removeData("fmonth")
        })

        BackHandler.addEventListener('hardwareBackPress', () => {
            if (!navigation.isFocused()) {
                return false;
            } else {
                BackHandler.exitApp();
                return true;
            }
        });
        BackHandler.addEventListener('hardwareBackPress', () => {
            if (!navigation.isFocused()) {
                return false;
            } else {
                BackHandler.exitApp();
                return true;
            }
        });
        // getData();
        return () => {
            BackHandler.removeEventListener('hardwareBackPress', () => {
                if (!navigation.isFocused()) {
                    return false;
                } else {
                    BackHandler.exitApp();
                    return true;
                }
            });
        };
    }, [navigation]);
    return (
        <SafeAreaView style={styles.container}>
            {/* <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} /> */}
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            {
                <Header showBack={false} profile avatar={user.avatar != "" ? { uri: imgUrl + user.avatar } : images.avatar} fullName="testName" maGDV="KAM/AM - 1.000" />
            }
            <Body style={{ marginTop: fontScale(26) }} showInfo={false} />
            <ScrollView style={styles.body}>
                <MenuItem style={{ marginTop: fontScale(25) }} title="Theo dõi thực hiện KH" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planfollow} width={width - fontScale(60)} onPress={() => navigation.navigate("PlanFollowDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Lương theo tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salarybymonth} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Bình quân thu nhập" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.AVGIncome} width={width - fontScale(60)} onPress={() => navigation.navigate("AVGIncomeDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Chất lượng tập TB phát triển" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.subscriberquality} width={width - fontScale(60)} onPress={() => navigation.navigate("SubscriberQuality")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Cảnh báo" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.warning} width={width - fontScale(60)} onPress={() => navigation.navigate("WarningDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30),marginBottom:fontScale(20) }} title="Báo cáo KPI tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.KPImonthreport} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIMonthReport")} />
            </ScrollView>

        </SafeAreaView>
    );
}

export default EmpDashboard;