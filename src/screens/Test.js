import moment from 'moment';
import React, { useState } from 'react';
import { FlatList, Image, SafeAreaView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Header, DateView, Body, MenuItem } from '../comps';
import { colors } from '../utils/Colors';
import { width } from '../utils/Dimenssion';
import { fontScale } from '../utils/Fonts';
import { images } from '../utils/Images';
import { text } from '../utils/Text';
import ReportSummayByEmp from './Test/ReportSummayByEmp';
import ReportByUnitBranch from './Test/ReportByUnitBranch';
import ReportByUnitShop from './Test/ReportByUnitShop';
import ReportByUnitEmp from './Test/ReportByUnitEmp';

// function SubscriberQualityDashboard(props) {
//     const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
//     const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
//     return (
//         <SafeAreaView style={substyles.container}>
//             <StatusBar translucent backgroundColor={colors.primary} />
//             <Header title={text.subscriberQuality} />
//             <View style={{ flexDirection: "row" }}>
//                 <View style={{ flex: 1, marginLeft: -width / 6 }}>
//                     <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(50)} />
//                 </View>
//                 <View style={{ flex: 1, marginLeft: -width / 4 }}>
//                     <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(50)} />
//                 </View>
//             </View>
//             <Body style={substyles.bodyScr} />
//             <View style={{ flex: 1, backgroundColor: colors.white }}>
//                 <MenuItem style={{ marginTop: fontScale(30) }} title={text.reportByUnit} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.deliveenterpriseamount} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonthDashboard")} />
//                 <MenuItem style={{ marginTop: fontScale(50) }} title={text.reportByEmp} titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.splashshape} width={width - fontScale(60)} onPress={() => navigation.navigate("KPIByMonthDashboard")} />
//             </View>
//         </SafeAreaView>
//     );
// }

const substyles = StyleSheet.create({
    container: {
        backgroundColor: colors.primary,
        flex: 1
    },
    dateView: {
        flex: 1,
        flexDirection: "row"
    },
    bodyScr: { marginTop: fontScale(27) },
})

// ======================== //


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

const FieldItem = ({ item, width }) => {
    return <View style={{ minWidth: width }}>
        <Text style={{ fontSize: fontScale(14), color: "#00BECC", textAlignVertical: "center", textAlign: "center", fontWeight: "bold", marginVertical: fontScale(10) }}>{item}</Text>
    </View>
}

const itemStyles = StyleSheet.create({
    header: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    headerText: {
        color: colors.lightBlue,
        fontSize: fontScale(14),
        fontWeight: "bold",
        marginHorizontal: fontScale(5)
    }
})

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

const ReportByBranch = () => {
    const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
    const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))

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
            "shopType": "BReportByUnitBranch",
            "shopCode": "CTY2",
            "shopName": "Công ty 2",
            "postpaid": 1,
            "revoke": 2,
            "foneCard": 3,
            "deny2C": 4
        }
    }

    return (
        <SafeAreaView style={reportByUnitstyles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
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
                            <ReportByUnitItem item={item} index={index} />
                            {
                                index == data.data.length - 1 ? <ReportByUnitItemFinal style={{ marginBottom: fontScale(30) }} item={data.general} index={index} /> : null
                            }
                        </View>
                    }}
                />
            </View>
        </SafeAreaView>
    )
}

// const ReportByUnit = () => {
//     const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))
//     const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))

//     const data = {
//         "data": [{
//             "icon": 'UNIT',
//             "shopCode": 'UNIT3',
//             "shopName": 'Ho Cho Minh 1',
//             "postpaid": 1,
//             "revoke": 2,
//             "foneCard": 3,
//             "deny2C": 4
//         },
//         {
//             "icon": 'UNIT',
//             "shopCode": 'UNIT1',
//             "shopName": 'Ho Cho Minh 1',
//             "postpaid": 1,
//             "revoke": 2,
//             "foneCard": 3,
//             "deny2C": 4
//         },
//         {
//             "icon": 'UNIT',
//             "shopCode": 'UNIT2',
//             "shopName": 'Ho Cho Minh 1',
//             "postpaid": 1,
//             "revoke": 2,
//             "foneCard": 3,
//             "deny2C": 4
//         }],
//         "general": {
//             "beginMonth": "09/2020",
//             "endMonth": "08/2021",
//             "shopType": "BRANCH",
//             "shopCode": "2HCM1",
//             "shopName": "Công ty 2",
//             "postpaid": 1,
//             "revoke": 2,
//             "foneCard": 3,
//             "deny2C": 4
//         }
//     }

//     return (
//         <SafeAreaView style={reportByUnitstyles.container}>
//             <StatusBar translucent backgroundColor={colors.primary} />
//             <Header title={text.reportByUnit} />
//             <View style={{ flexDirection: "row" }}>
//                 <View style={{ flex: 1, marginLeft: -width / 5 }}>
//                     <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(30)} />
//                 </View>
//                 <View style={{ flex: 1, marginLeft: -width / 4 }}>
//                     <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(30)} />
//                 </View>
//             </View>
//             <Body style={reportstyles.bodyScr} />
//             <View style={{ flex: 1, backgroundColor: colors.white }}>
//                 <FlatList
//                     showsVerticalScrollIndicator={false}
//                     data={data.data}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({ item, index }) => {
//                         return <View>
//                             <ReportByUnitItem item={item} index={index} />
//                             {
//                                 index == data.data.length - 1 ? <ReportByUnitItemFinal style={{marginBottom:fontScale(30)}} item={data.general} index={index} /> : null
//                             }
//                         </View>
//                     }}
//                 />
//             </View>
//         </SafeAreaView>
//     )
// }

// function ReportSummayByEmp(props) {
//     const [beginMonth, setBeginMonth] = useState(moment(new Date()).subtract(12, "months").format("MM/YYYY"))
//     const [endMonth, setEndMonth] = useState(moment(new Date()).subtract(1, "months").format("MM/YYYY"))

//     let data = {
//         beginMonth: beginMonth,
//         endMonth: endMonth,
//         data: [{
//             empCode: '001',
//             empName: 'Nguyễn Văn A',
//             shopCode: '2MFHCM1',
//             postpaid: 30,
//             revoke: 3,
//             foneCard: 27,
//             deny2C: 66
//         },
//         {
//             empCode: '002',
//             empName: 'Nguyễn Văn B',
//             shopCode: '2MFHCM1',
//             postpaid: 30,
//             revoke: 3,
//             foneCard: 27,
//             deny2C: 66
//         },
//         {
//             empCode: '003',
//             empName: 'Nguyễn Văn C',
//             shopCode: '2MFHCM1',
//             postpaid: 30,
//             revoke: 3,
//             foneCard: 27,
//             deny2C: 66
//         }]
//     }
//     const header = ["Tên NV", "SL TBTS", "SL cắt huỷ", "Fone -> card", "Chặn 2C"]
//     return (
//         <SafeAreaView style={reportstyles.container}>
//             <StatusBar translucent backgroundColor={colors.primary} />
//             <Header title={text.reportByEmp} />
//             <View style={{ flexDirection: "row" }}>
//                 <View style={{ flex: 1, marginLeft: -width / 6 }}>
//                     <DateView dateLabel={'Tháng ' + beginMonth} width={width / 2 - fontScale(50)} />
//                 </View>
//                 <View style={{ flex: 1, marginLeft: -width / 4 }}>
//                     <DateView dateLabel={'Tháng ' + endMonth} width={width / 2 - fontScale(50)} />
//                 </View>
//             </View>
//             <Body style={reportstyles.bodyScr} />
//             <View style={{ flex: 1, backgroundColor: colors.white }}>
//                 <View style={[itemStyles.header, { marginRight: fontScale(5) }]}>
//                     <FieldItem item={header[0]} width={width * 1 / 4} />
//                     <FieldItem item={header[1]} width={width * 1 / 6.3} />
//                     <FieldItem item={header[2]} width={width * 1 / 5} />
//                     <FieldItem item={header[3]} width={width * 1 / 5} />
//                     <FieldItem item={header[4]} width={width * 1 / 5} />
//                 </View>
//                 <FlatList
//                     data={data.data}
//                     showsVerticalScrollIndicator={false}
//                     keyExtractor={(item, index) => index.toString()}
//                     renderItem={({ item, index }) => { return <ReportEmpItem item={item} index={index} width={[width / 4, width / 6, width / 5.2, width / 4.7, width / 5]} /> }}
//                 />
//             </View>
//         </SafeAreaView>
//     );
// }

// const ReportByUnitItemFinal = (props) => {
//     const { item, index } = props;
//     return <View style={[reportByUnitItem.container,props.style, { marginTop: index > 0 ? fontScale(60) : fontScale(30)}]}>
//         <Image style={reportByUnitItem.icon} source={item.shopType == "COMPANY" ? images.company : images.branch} />
//         <TouchableOpacity style={{...reportByUnitItem.subContainer,backgroundColor:"#EFFEFF" }}>
//             <Text style={{ ...reportByUnitItem.shopCode, color: "#D19E01" }}>{item.shopCode}</Text>
//             <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
//                 <ReportByUnitSubItem flex={1} title='SL TBTS' value={item.postpaid} />
//                 <ReportByUnitSubItem flex={1.5} title='SL cắt huỷ' value={item.revoke} />
//                 <ReportByUnitSubItem flex={3} title='TB chuyển Fone card' value={item.foneCard} />
//                 <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
//             </View>
//         </TouchableOpacity>
//     </View>
// }

// const ReportByUnitItem = (props) => {
//     const { item, index } = props;
//     return <View style={[reportByUnitItem.container, { marginTop: index > 0 ? fontScale(60) : fontScale(30) }]}>
//         <Image style={reportByUnitItem.icon} source={item.icon == "BRANCH" ? images.branch : item.icon == "COMPANY" ? images.company :item.icon == "UNIT" ?images.store : null} />
//         <TouchableOpacity style={reportByUnitItem.subContainer}>
//             <Text style={reportByUnitItem.shopCode}>{item.shopCode}</Text>
//             <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
//                 <ReportByUnitSubItem flex={1} title='SL TBTS' value={item.postpaid} />
//                 <ReportByUnitSubItem flex={1.5} title='SL cắt huỷ' value={item.revoke} />
//                 <ReportByUnitSubItem flex={3} title='TB chuyển Fone card' value={item.foneCard} />
//                 <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
//             </View>
//         </TouchableOpacity>
//     </View>
// }

// const ReportByUnitSubItem = ({ title, value, flex }) => {
//     return <View style={{ flex: flex, justifyContent: "center", alignItems: "center" }}>
//         <Text style={{ color: "#9E9898", fontWeight: "bold", fontSize: fontScale(14) }}>{title}</Text>
//         <Text style={{ color: "#00BECC", fontWeight: "bold", fontSize: fontScale(14),marginTop:fontScale(11) }}>{value}</Text>
//     </View>
// }

// const reportByUnitItem = StyleSheet.create({
//     container: {

//     },
//     icon: {
//         resizeMode: "cover",
//         width: fontScale(50),
//         height: fontScale(50),
//         position: "absolute",
//         right: fontScale(20),
//         top: -fontScale(25),
//         zIndex: 10
//     },
//     shopCode: {
//         fontSize: fontScale(20),
//         fontWeight: "bold",
//         marginLeft: fontScale(10)
//     },
//     subContainer: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         backgroundColor: "#fff",
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         padding: fontScale(10),
//         alignSelf: "center",
//         borderRadius: fontScale(20),
//         width: width - fontScale(20)
//     }
// })

// const reportItemStyle = StyleSheet.create({
//     container: {
//         shadowColor: "#000",
//         shadowOffset: {
//             width: 0,
//             height: 10,
//         },
//         backgroundColor: "#fff",
//         shadowOpacity: 0.25,
//         shadowRadius: 3.84,
//         elevation: 5,
//         padding: fontScale(10),
//         alignSelf: "center",
//         borderRadius: fontScale(20),
//         width: width - fontScale(20)

//     }
// })

// const reportByUnitstyles = StyleSheet.create({
//     container: {
//         backgroundColor: colors.primary,
//         flex: 1
//     },
//     bodyScr: { marginTop: fontScale(10) }
// })

export default ReportByUnitEmp;

// SubscriberQualityDashboard => Dashboard chất lượng thuê bao
// ReportSummayByEmp => Dashboard > Báo cáo tổng hợp theo nhân viên

// ReportByUnitBranch => Báo cáo tổng hợp theo đơn vị - Branch
// ReportByUnitShop => Báo cáo tổng hợp theo đơn vị - Shop
// ReportByUnitEmp => Báo cáo tổng hợp theo đơn vị - Employee
