import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, DateView, Body } from '../../../../comps';
import { styles } from './stytes';
import { colors } from '../../../../utils/Colors';
import { text } from '../../../../utils/Text';
import moment from 'moment';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { images } from '../../../../utils/Images';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import { getReportByUnit } from '../../../../api/manager';
import Toast from 'react-native-toast-message';
import { SumReportU } from "../../../../models/Admin"
import { ToastNotif } from '../../../../utils/Logistics';

//Branch
const SumReportUnit = (props) => {
    const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false);
    const isFocus = useIsFocused();
    const [data, setData] = useState(SumReportU)

    const getData = async (branchCode, shopCode) => {
        setLoading(true);
        await getReportByUnit(branchCode, shopCode).then((res) => {
            if (res.status == "success") {
                setLoading(res.loading);
                setData(res.data.data);
                setBeginMonth('Tháng ' + res.data.data.general.beginMonth)
                setEndMonth('Tháng ' + res.data.data.general.endMonth)
            }

            if (res.status == "failed") {
                ToastNotif('Cảnh báo', res.message, 'error', true);
                setLoading(res.loading)
            }
            if (res.status == "v_error") {
                Toast.show({
                    text1: "Cảnh báo",
                    text2: res.message,
                    type: "error",
                    visibilityTime: 100,
                    autoHide: true,
                    onHide: () => navigation.navigate("Home")
                });
            }
        })
    }

    useEffect(() => {
        getData();
    }, [isFocus])

    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title={text.reportByUnit} />
            <View style={{ flexDirection: "row" }}>
                <View style={styles.firstDateView}>
                    <DateView dateLabel={beginMonth} width={width / 2 - fontScale(30)} />
                </View>
                <View style={styles.secondDateView}>
                    <DateView dateLabel={endMonth} width={width / 2 - fontScale(30)} />
                </View>
            </View>
            <Body style={reportstyles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {loading == true ? <ActivityIndicator size="small" color={colors.primary} /> : null}
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <View>
                            <ReportByUnitItem item={item} index={index} onPress={() => navigation.navigate("SumReportUnitShop", { "branchCode": item.shopCode })} />
                            {
                                index == data.data.length - 1 ? <ReportByUnitItemFinal style={{ marginBottom: fontScale(30), marginTop: fontScale(50) }} item={data.general} index={index} /> : null
                            }
                        </View>
                    }}
                />
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

const ReportByUnitItem = (props) => {
    const { item, index } = props;
    return <View style={[reportByUnitItem.container, { marginTop: index > 0 ? fontScale(60) : fontScale(30) }]}>
        <Image style={reportByUnitItem.icon} source={item.icon == "BRANCH" ? images.branch : item.icon == "COMPANY" ? images.company : item.icon == "UNIT" ? images.store : null} />
        <TouchableOpacity style={reportByUnitItem.subContainer} onPress={props.onPress}>
            <Text style={reportByUnitItem.shopCode}>{item.shopCode}</Text>
            <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
                <ReportByUnitSubItem flex={1.3} title='SL TBTS' value={item.postpaid} />
                <ReportByUnitSubItem flex={1.3} title='SL cắt huỷ' value={item.revoke} />
                <ReportByUnitSubItem flex={2.9} title='TB chuyển Fone card' value={item.foneCard} />
                <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
            </View>
        </TouchableOpacity>
    </View>
}
const ReportByUnitItemFinal = (props) => {
    const { item, index } = props;
    return <View style={[reportByUnitItem.container, props.style]}>
        <Image style={reportByUnitItem.icon} source={images.company} />
        <View style={{ ...reportByUnitItem.subContainer, backgroundColor: "#EFFEFF" }}>
            <Text style={{ ...reportByUnitItem.shopCode, color: "#D19E01" }}>{item.shopName}</Text>
            <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
                <ReportByUnitSubItem flex={1.3} title='SL TBTS' value={item.postpaid} />
                <ReportByUnitSubItem flex={1.3} title='SL cắt huỷ' value={item.revoke} />
                <ReportByUnitSubItem flex={2.9} title='TB chuyển Fone card' value={item.foneCard} />
                <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
            </View>
        </View>
    </View>
}


const ReportByUnitSubItem = ({ title, value, flex }) => {
    return <View style={{ flex: flex, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#9E9898", fontWeight: "bold", fontSize: fontScale(14) }}>{title}</Text>
        <Text style={{ color: "#00BECC", fontWeight: "bold", fontSize: fontScale(14), marginTop: fontScale(11) }}>{value}</Text>
    </View>
}

const reportByUnitItem = StyleSheet.create({
    container: {

    },
    icon: {
        resizeMode: "cover",
        width: fontScale(50),
        height: fontScale(50),
        position: "absolute",
        right: fontScale(20),
        top: -fontScale(25),
        zIndex: 10
    },
    shopCode: {
        fontSize: fontScale(17),
        fontWeight: "bold",
        marginLeft: fontScale(10)
    },
    subContainer: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 10,
        },
        backgroundColor: "#fff",
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
        padding: fontScale(10),
        alignSelf: "center",
        borderRadius: fontScale(20),
        width: width - fontScale(20)
    }
});

const reportstyles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    dateView: {
        flex: 1,
        flexDirection: "row"
    },
    bodyScr: { marginTop: fontScale(10) }
});

export default SumReportUnit;