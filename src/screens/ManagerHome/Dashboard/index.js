import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar,BackHandler, ScrollView,View } from 'react-native';
import { imgUrl } from '../../../api/utils';
import { Body, Header, Loading, MenuItem } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';
import { _removeData } from '../../../utils/Storage';
import Toast from 'react-native-toast-message';
import { fontScale } from '../../../utils/Fonts';
import { styles } from './styte';
import { width } from '../../../utils/Dimenssion';
import { showToast } from '../../../utils/toast';
import { check403, getUserInfo } from '../../../api/emp';

const AdminDashboard = (props) => {
    const navigation = useNavigation();
    const [user, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        navigation.addListener('focus', async () => {
            await getData()
            // _removeData("month")
            // _removeData("tmonth")
            // _removeData("fmonth")
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
            // showToast("success", "Thành công", "Lấy dữ liệu thành công")
            if (res.data != undefined && res.data != null) {
                if (res.data.data != null && res.data.data != undefined) {
                    setUserData(res.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    showToast("info", "Thông báo", "Không có dữ liệu user")
                }
            } else {
                setLoading(false)
                showToast("info", "Thông báo", "Không có dữ liệu user")
            }
        } else {
            setLoading(false)
            showToast("error", "Lỗi hệ thống", res.message)
            check403(res.error, navigation)
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header showBack={false} profile avatar={user.linkImg != "" && user.linkImg != undefined ? { uri: imgUrl + user.linkImg } : images.avatar} fullName={user.empName} maGDV={user.shopName} />
            <Body style={{ marginTop: fontScale(26) }} showInfo={false} />
            <View style={styles.body}>
                <MenuItem style={{ marginTop: fontScale(25) }} title="KPI tháng hiện tại" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.planfollow} width={width - fontScale(60)} onPress={() => navigation.navigate("KPICurrentMonthDashboard")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Lương theo tháng" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.salarybymonth} width={width - fontScale(60)} onPress={() => navigation.navigate("SalaryByMonthAdmin")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Bình quân thu nhập" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.AVGIncome} width={width - fontScale(60)} onPress={() => navigation.navigate("AVGIncomeAdmin")} />
                <MenuItem style={{ marginTop: fontScale(30) }} title="Chất lượng thuê bao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.subscriberquality} width={width - fontScale(60)} onPress={() => navigation.navigate("SubscriberQualityAdminDashboard")} />
            </View>
            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default AdminDashboard;