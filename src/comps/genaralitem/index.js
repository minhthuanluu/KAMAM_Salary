import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, Image } from 'react-native';
import { fontScale } from '../../utils/Fonts';
import { images } from '../../utils/Images';
import { styles } from './styles';

const GenaralItem = (props) => {
    return (
        <View style={styles.bg}>
            <View style={{ flexDirection: "row" }}>
                <Text style={{ fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(10), marginLeft: fontScale(10) }}>{props.shopName}</Text>
                <Image source={props.icon} style={{ width: fontScale(60), height: fontScale(60), position: "absolute", right: fontScale(40), top: -fontScale(23) }} resizeMode="contain" />
            </View>

            <Text style={{ fontSize: fontScale(17), fontWeight: "bold", marginBottom: fontScale(10), color: "#CBAD15", marginLeft: fontScale(20) }}>Thuê bao</Text>
            <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                <View style={{ flexDirection: "row", flex: 2 / 4, marginLeft: fontScale(30) }}>
                    <Text style={{ color: "#9E9898", fontWeight: "bold" }}>BQ chuẩn: </Text>
                    <Text style={{ color: "#00BECC", fontWeight: "bold" }}>{props.standardSub}</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 2 / 4, justifyContent: "flex-end", marginRight: fontScale(30) }}>
                    <Text style={{ color: "#9E9898", fontWeight: "bold" }}>BQ thực tế: </Text>
                    <Text style={{ color: "#00BECC", fontWeight: "bold" }}> {props.realSub}</Text>
                </View>
            </View>

            <Text style={{ fontSize: fontScale(17), fontWeight: "bold", marginBottom: fontScale(10), color: "#CBAD15", marginLeft: fontScale(20) }}>Doanh thu</Text>
            <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                <View style={{ flexDirection: "row", flex: 2 / 4, marginLeft: fontScale(30) }}>
                    <Text style={{ color: "#9E9898", fontWeight: "bold" }}>BQ chuẩn: </Text>
                    <Text style={{ color: "#00BECC", fontWeight: "bold" }}> {props.standardRevenue}</Text>
                </View>
                <View style={{ flexDirection: "row", flex: 2 / 4, justifyContent: "flex-end", marginRight: fontScale(30) }}>
                    <Text style={{ color: "#9E9898", fontWeight: "bold" }}>BQ thực tế: </Text>
                    <Text style={{ color: "#00BECC", fontWeight: "bold" }}> {props.realRevenue}</Text>
                </View>
            </View>
        </View>
    );
}

export default GenaralItem;