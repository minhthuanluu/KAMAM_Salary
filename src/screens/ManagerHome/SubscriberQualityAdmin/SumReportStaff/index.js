import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, DateView, Body, MenuItem } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { text } from '../../../../utils/Text';
import moment from 'moment';
import { useNavigation } from '@react-navigation/core';
import { itemStyles, styles } from './stytes';


const SumReportStaff = (props) => {
    const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const navigation = useNavigation();

    const header = ["Tên NV", "SL TBTS", "SL cắt huỷ", "Fone -> card", "Chặn 2C"]

    let data = {
        beginMonth: beginMonth,
        endMonth: endMonth,
        data: [{
            empCode: '001',
            empName: 'Nguyễn Văn A',
            shopCode: '2MFHCM1',
            postpaid: 30,
            revoke: 3,
            foneCard: 27,
            deny2C: 66
        },
        {
            empCode: '002',
            empName: 'Nguyễn Văn B',
            shopCode: '2MFHCM1',
            postpaid: 30,
            revoke: 3,
            foneCard: 27,
            deny2C: 66
        },
        {
            empCode: '003',
            empName: 'Nguyễn Văn C',
            shopCode: '2MFHCM1',
            postpaid: 30,
            revoke: 3,
            foneCard: 27,
            deny2C: 66
        }]
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title={text.reportByEmp}/>
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 6 }}>
                    <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(50)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(50)} />
                </View>
            </View>
            <Body style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                <View style={[styles.header, { marginRight: fontScale(5) }]}>
                    <FieldItem item={header[0]} width={width * 1 / 4} />
                    <FieldItem item={header[1]} width={width * 1 / 7} />
                    <FieldItem item={header[2]} width={width * 1 / 5} />
                    <FieldItem item={header[3]} width={width * 1 / 5} />
                    <FieldItem item={header[4]} width={width * 1 / 5} />
                </View>
                <FlatList
                    data={data.data}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => { return <ReportEmpItem item={item} index={index} width={[width / 4, width / 6, width / 5.2, width / 4.7, width / 5]} /> }}
                />
            </View>
        </SafeAreaView>
    );
}

const FieldItem = ({ item, width }) => {
    return <View style={{ minWidth: width }}>
        <Text style={{ fontSize: fontScale(13), color: "#00BECC", textAlignVertical: "center", textAlign: "center", fontWeight: "bold", marginVertical: fontScale(10) }}>{item}</Text>
    </View>
}

const ReportEmpItem = (props) => {
    const { item, index, width } = props;
    return <View>
        <View style={[itemStyles.header, { marginTop: fontScale(10), backgroundColor: index % 2 ? colors.white : colors.lightGrey, paddingVertical: fontScale(5) }]}>
            <View style={{ width: props.width[0] }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.empName}</Text>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.shopCode}</Text>
            </View>
            <View style={{ width: props.width[1], justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.postpaid}</Text>
            </View>
            <View style={{ width: props.width[2], justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.revoke}</Text>

            </View>
            <View style={{ width: props.width[3], justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.foneCard}</Text>
            </View>
            <View style={{ width: props.width[4], justifyContent: "center" }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.deny2C}</Text>
            </View>
        </View>
    </View>
}


export default SumReportStaff;