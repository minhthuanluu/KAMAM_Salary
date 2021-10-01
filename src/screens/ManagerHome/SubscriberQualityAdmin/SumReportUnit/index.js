import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header,DateView, Body } from '../../../../comps';
import { styles } from './stytes';
import { colors } from '../../../../utils/Colors';
import { text } from '../../../../utils/Text';
import moment from 'moment';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { images } from '../../../../utils/Images';
import { useNavigation } from '@react-navigation/core';

//Branch
const SumReportUnit = (props) => {
    const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
    const navigation = useNavigation()
    const data = {
        "data": [{
            "icon": 'BRANCH',
            "shopCode": '2HCM1',
            "shopName": 'Ho Cho Minh 1',
            "postpaid": 1,
            "revoke": 2,
            "foneCard": 3,
            "deny2C": 4
        },
        {
            "icon": 'BRANCH',
            "shopCode": '2HCM1',
            "shopName": 'Ho Cho Minh 1',
            "postpaid": 1,
            "revoke": 2,
            "foneCard": 3,
            "deny2C": 4
        },
        {
            "icon": 'BRANCH',
            "shopCode": '2HCM1',
            "shopName": 'Ho Cho Minh 1',
            "postpaid": 1,
            "revoke": 2,
            "foneCard": 3,
            "deny2C": 4
        }],
        "general": {
            "beginMonth": "09/2020",
            "endMonth": "08/2021",
            "icon": "COMPANY",
            "shopCode": "CTY2",
            "shopName": "Công ty 2",
            "postpaid": 1,
            "revoke": 2,
            "foneCard": 3,
            "deny2C": 4
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title={text.reportByUnit} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 5 }}>
                    <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(30)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(30)} />
                </View>
            </View>
            <Body style={reportstyles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <FlatList
                    showsVerticalScrollIndicator={false}
                    data={data.data}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => {
                        return <View>
                            <ReportByUnitItem item={item} index={index} onPress={()=>navigation.navigate("SumReportUnitShop")}/>
                            {
                                index == data.data.length - 1 ? <ReportByUnitItemFinal style={{ marginBottom: fontScale(30) }} item={data.general} index={index} /> : null
                            }
                        </View>
                    }}
                />
            </View>
        </SafeAreaView>
    );
}

const ReportByUnitItem = (props) => {
    const { item, index } = props;
    return <View style={[reportByUnitItem.container, { marginTop: index > 0 ? fontScale(60) : fontScale(30) }]}>
        <Image style={reportByUnitItem.icon} source={item.icon == "BRANCH" ? images.branch : item.icon == "COMPANY" ? images.company :item.icon == "UNIT" ?images.store : null} />
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
    return <View style={[reportByUnitItem.container,props.style, { marginTop: index > 0 ? fontScale(60) : fontScale(30)}]}>
        <Image style={reportByUnitItem.icon} source={item.icon == "COMPANY" ? images.company : images.branch} />
        <TouchableOpacity style={{...reportByUnitItem.subContainer,backgroundColor:"#EFFEFF" }}>
            <Text style={{ ...reportByUnitItem.shopCode, color: "#D19E01" }}>{item.shopCode}</Text>
            <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
                <ReportByUnitSubItem flex={1.3} title='SL TBTS' value={item.postpaid} />
                <ReportByUnitSubItem flex={1.3} title='SL cắt huỷ' value={item.revoke} />
                <ReportByUnitSubItem flex={2.9} title='TB chuyển Fone card' value={item.foneCard} />
                <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
            </View>
        </TouchableOpacity>
    </View>
}


const ReportByUnitSubItem = ({ title, value, flex }) => {
    return <View style={{ flex: flex, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ color: "#9E9898", fontWeight: "bold", fontSize: fontScale(14) }}>{title}</Text>
        <Text style={{ color: "#00BECC", fontWeight: "bold", fontSize: fontScale(14),marginTop:fontScale(11) }}>{value}</Text>
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
        fontSize: fontScale(20),
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
})

const reportItemStyle = StyleSheet.create({
    container: {
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
})

// const reportByUnitstyles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.primary,
//         flex: 1
//     },
//     bodyScr: { marginTop: fontScale(10) }
// })


const reportByUnitstyles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    bodyScr: { marginTop: fontScale(10) }
})


export default SumReportUnit;