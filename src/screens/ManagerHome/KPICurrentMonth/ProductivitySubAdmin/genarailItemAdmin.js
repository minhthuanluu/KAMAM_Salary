import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, Image, TouchableOpacity } from 'react-native';
import { fontScale } from '../../../../utils/Fonts';
import { images } from '../../../../utils/Images';
import { _retrieveData } from '../../../../utils/Storage';
import { styles } from './stytes';

const GenaralItemAdmin = (props) => {
    const navigation = useNavigation();
    const PressItem = async () => {

        if (props.role == "ROLE_COMPANY" && props.screen == 'company') {
            navigation.navigate("BranchProductivitySub",
                {
                    branchCode: props.item.shopCode,
                    month: props.month
                })
        } else if (props.role == "ROLE_COMPANY" || props.role == "ROLE_BRANCH") {
            navigation.navigate("ShopProductivitySub",
                {
                    branchCode: props.branchCode,
                    month: props.month,
                    shopCode: props.item.shopCode
                })
        }
    }
    return (
        <>
            {
                props.disable == true ?
                    <View style={styles.bg}>
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 4 / 5, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(15), marginLeft: fontScale(15) }}>{props.shopName}</Text>
                            <Image source={props.icon} style={{ flex: 1 / 5, width: fontScale(60), height: fontScale(60), top: fontScale(-20) }} resizeMode="contain" />
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>KHTB</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>TTTB</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>KHDT</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>TTDT</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.khtb}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.tttb}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.khdt}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.ttdt}</Text>
                        </View>
                    </View> :
                    <TouchableOpacity style={styles.bg}
                        onPress={() => { PressItem() }}
                    >
                        <View style={{ flexDirection: "row" }}>
                            <Text style={{ flex: 4 / 5, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(15), marginLeft: fontScale(15) }}>{props.shopName}</Text>
                            <Image source={props.icon} style={{ flex: 1 / 5, width: fontScale(60), height: fontScale(60), top: fontScale(-20) }} resizeMode="contain" />
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>KHTB</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>TTTB</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>KHDT</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#9E9898" }}>TTDT</Text>
                        </View>
                        <View style={{ flexDirection: "row", marginBottom: fontScale(10) }}>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.khtb}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.tttb}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.khdt}</Text>
                            <Text style={{ flex: 1 / 4, textAlign: "center", color: "#1AC4D1", fontWeight: "bold" }}>{props.ttdt}</Text>
                        </View>
                    </TouchableOpacity>
            }
        </>
    );
}
export default GenaralItemAdmin;