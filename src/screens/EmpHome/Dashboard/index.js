import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, BackHandler, View, ScrollView } from 'react-native';
import { colors } from '../../../utils/Colors';
import { MenuItem, Header, Body, Loading } from '../../../comps';
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
import { check403, getUserInfo } from '../../../api/emp';
import { showToast } from '../../../utils/toast';
import { imgUrl } from '../../../api/utils';

const EmpDashboard = (route) => {
    const navigation = useNavigation();
    const [user, setUserData] = useState(UserObj);
    const [loading, setLoading] = useState(false);
    const isFocus = useIsFocused();

    useEffect(() => {
        navigation.addListener('focus', async () => {
            await getData()
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
    const getData = async () => {
        setLoading(true)
        let res = await getUserInfo()
        if (res.status == "success") {
            // showToast("success", "Th??nh c??ng", "L???y d??? li???u th??nh c??ng")
            if (res.data != undefined && res.data != null) {
                if (res.data.data != null && res.data.data != undefined) {
                    setUserData(res.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    showToast("info", "Th??ng b??o", "Kh??ng c?? d??? li???u user")
                }
            } else {
                setLoading(false)
                showToast("info", "Th??ng b??o", "Kh??ng c?? d??? li???u user")
            }
        } else {
            setLoading(false)
            showToast("error", "L???i h??? th???ng", res.message)
            check403(res.error, navigation)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            {
                <Header showBack={false} profile avatar={user.linkImg != "" && user.linkImg != undefined ? { uri: imgUrl + user.linkImg } : images.avatar} fullName={user.empName} maGDV={user.shopName} />
            }
            <Body style={{ marginTop: fontScale(26) }} showInfo={false} />
            <ScrollView style={styles.body}>
                <MenuItem style={{ marginTop: fontScale(25) }} title="Theo d??i th???c hi???n KH" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planfollow} width={width - fontScale(60)} onPress={() => navigation.navigate("PlanFollowDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="L????ng theo th??ng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salarybymonth} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="B??nh qu??n thu nh???p" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.AVGIncome} width={width - fontScale(60)} onPress={() => navigation.navigate("AVGIncomeDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Ch???t l?????ng t???p TB ph??t tri???n" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.subscriberquality} width={width - fontScale(60)} onPress={() => navigation.navigate("SubscriberQuality")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="C???nh b??o" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.warning} width={width - fontScale(60)} onPress={() => navigation.navigate("WarningDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30), marginBottom: fontScale(20) }} title="B??o c??o KPI th??ng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.KPImonthreport} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIMonthReport")} />
            </ScrollView>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default EmpDashboard;