import React from 'react';
import { StyleSheet,View,Image,Text,TouchableOpacity } from 'react-native';
import { width } from '../../../../utils/Dimenssion';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';

const ReportByUnitItem = (props) => {
    const { item, index } = props;
    return <View style={[reportByUnitItem.container, { marginTop: index > 0 ? fontScale(60) : fontScale(30) }]}>
        <Image style={reportByUnitItem.icon} source={item.icon == "BRANCH" ? images.branch : item.icon == "COMPANY" ? images.company :item.icon == "UNIT" ?images.store : null} />
        <TouchableOpacity style={reportByUnitItem.subContainer}>
            <Text style={reportByUnitItem.shopCode}>{item.shopCode}</Text>
            <View style={{ flexDirection: "row", marginTop: fontScale(20) }}>
                <ReportByUnitSubItem flex={1} title='SL TBTS' value={item.postpaid} />
                <ReportByUnitSubItem flex={1.5} title='SL cắt huỷ' value={item.revoke} />
                <ReportByUnitSubItem flex={3} title='TB chuyển Fone card' value={item.foneCard} />
                <ReportByUnitSubItem flex={1} title='Chặn 2c' value={item.deny2C} />
            </View>
        </TouchableOpacity>
    </View>
} 
const ReportByUnitItemFinal = (props) => {
    const { item, index } = props;
    return <View style={[reportByUnitItem.container,props.style, { marginTop: index > 0 ? fontScale(60) : fontScale(30)}]}>
        <Image style={reportByUnitItem.icon} source={item.shopType == "COMPANY" ? images.company : images.branch} />
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


export default {
    ReportByUnitItem, 
    ReportByUnitItemFinal
};