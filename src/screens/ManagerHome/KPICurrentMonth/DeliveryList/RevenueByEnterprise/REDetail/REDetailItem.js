import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { fontScale } from '../../../../../../utils/Fonts';
import { images } from '../../../../../../utils/Images';
const REDetailItem = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", backgroundColor: props.index % 2 == 0 ? "#EFEFEF" : "white", justifyContent: "center", alignItems: "center", minHeight: fontScale(40) }}>
            <Text style={{ flex: 1 / 4, fontSize: fontScale(16), textAlign: "center" }}>{props.empCode}</Text>
            <Text style={{ flex: 1 / 4, fontSize: fontScale(16), textAlign: "center" }}>{props.empName}</Text>
            <Text style={{ flex: 1 / 4, fontSize: fontScale(16), textAlign: "center" }}>{props.taxCode}</Text>
            <Text style={{ flex: 1 / 4, fontSize: fontScale(16), textAlign: "center" }}>{props.difference}</Text>


        </View>
    )
}
export default REDetailItem;