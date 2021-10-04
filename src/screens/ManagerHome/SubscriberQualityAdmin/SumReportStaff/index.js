import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Header, DateView, Body, Search } from '../../../../comps';
import { colors } from '../../../../utils/Colors';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { text } from '../../../../utils/Text';
import moment from 'moment';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import { itemStyles, styles } from './stytes';
import { ReportByEmp } from '../../../../models/Admin';
import { getReportByEmp } from '../../../../api/manager';
import Toast from 'react-native-toast-message';
import { ToastNotif } from '../../../../utils/Logistics';
import { images } from '../../../../utils/Images';

const SumReportStaff = (props) => {
    const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const navigation = useNavigation();
    const [data, setData] = useState(ReportByEmp)
    const header = ["Tên NV", "SL TBTS", "SL cắt huỷ", "Fone -> card", "Chặn 2C"]
    const isFocus = useIsFocused();
    const [tempData,setTempData] = useState([])
    const [loading, setLoading] = useState(false);
    const [message,setMessage] = useState('')

    const getData = async () => {
        setLoading(true);
        setMessage('');
        setData([]);
        setTempData([])
        await getReportByEmp().then((res) => {
            if (res.status == "success") {
                setData(res.data.data.data)
                setTempData(res.data.data.data)
                setBeginMonth(res.data.data.beginMonth)
                setEndMonth(res.data.data.endMonth)
                setLoading(res.loading);
            }
            if (res.status == "failed") {
                setLoading(res.loading);
                ToastNotif('Cảnh báo', res.message, 'error', true);
            }
            if (res.status == "v_error") {
                setLoading(res.loading);
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
        getData()
    }, [isFocus])

    const onSearch = (text = "") => {
        setMessage("")
        tempData.concat(tempData)
        const newData = tempData.filter((item) => {
            const itemData = item.empCode;
            return itemData.indexOf(text) > -1;
        });
        setTempData(newData);
        if (text.length > 0) {
            if (newData.length == 0) {
                setLoading(false);
                setMessage("Không tìm thấy nhân viên");
                setTempData([]);
            } else {
                setLoading(false);
                setMessage("");
                setTempData(newData);
            }
        } else {
            setTempData(data);
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title={text.reportByEmp} />
            <View style={{ flexDirection: "row" }}>
                <View style={{ flex: 1, marginLeft: -width / 6 }}>
                    <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(50)} />
                </View>
                <View style={{ flex: 1, marginLeft: -width / 4 }}>
                    <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(50)} />
                </View>
            </View>
            <Search 
                onChangeText={(text)=>onSearch(text)}
                leftIcon={images.delivesubsciberamount} rightIcon={images.search} width={width-fontScale(70)} placeholder={text.findEmpCode}/>
            <Body style={styles.bodyScr} />
            <View style={{ flex: 1, backgroundColor: colors.white }}>
                {loading == true ? <ActivityIndicator size="small" color={colors.primary} style={{marginVertical:fontScale(10)}} /> : null}
                <View style={[styles.header, { marginRight: fontScale(5) }]}>
                    <FieldItem item={header[0]} width={width * 1 / 4} />
                    <FieldItem item={header[1]} width={width * 1 / 7} />
                    <FieldItem item={header[2]} width={width * 1 / 5} />
                    <FieldItem item={header[3]} width={width * 1 / 5} />
                    <FieldItem item={header[4]} width={width * 1 / 5} />
                </View>
                {message?<Text style={{fontSize:fontScale(13),color:colors.primary,textAlign:"center"}}>{message}</Text>:null}
                <FlatList
                    data={tempData}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => { return <ReportEmpItem item={item} index={index} width={[width / 4, width / 6, width / 5.2, width / 4.7, width / 5]} /> }}
                />
            </View>
            <Toast ref={(ref) => Toast.setRef(ref)} />
        </SafeAreaView>
    );
}

const FieldItem = ({ item, width }) => {
    return <View style={{ minWidth: width }}>
        <Text style={{ fontSize: fontScale(13), color: "#00BECC", textAlignVertical: "center", textAlign: "center", fontWeight: "bold", marginVertical: fontScale(10) }}>{item}</Text>
    </View>
}

const ReportEmpItem = (props) => {
    const { item, index } = props;
    return <View>
        <View style={[itemStyles.header, { marginTop: fontScale(10), backgroundColor: index % 2 ? colors.white : colors.lightGrey, paddingVertical: fontScale(5) }]}>
            <View style={{ width: props.width[0] }}>
                <Text style={{ textAlignVertical: "center", textAlign: "center" }}>{item.empName}</Text>
                <Text style={{ textAlignVertical: "center", textAlign: "center", marginTop: fontScale(5) }}>({item.shopCode})</Text>
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