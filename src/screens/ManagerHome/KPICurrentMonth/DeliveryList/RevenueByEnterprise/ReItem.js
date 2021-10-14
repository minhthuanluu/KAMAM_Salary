import { useNavigation } from '@react-navigation/core';
import React from 'react';
import { Image, SafeAreaView, StatusBar, Text, View, TouchableOpacity } from 'react-native';
import { fontScale } from '../../../../../utils/Fonts';
import { images } from '../../../../../utils/Images';
const ReItem = (props) => {
    const navigation = useNavigation();
    return (
        <View style={{ flexDirection: "row", backgroundColor: props.type.toUpperCase() == "COMPANY" ? "#FBFDC3" : props.type.toUpperCase() == "BRANCH" ? "#EBFDFD" : "white", borderBottomWidth: 0.2, marginBottom: 0.3, justifyContent: "center", alignItems: "center",minHeight: fontScale(40) }}>
            <Text style={{ flex: 3 / 10, fontSize: fontScale(15), textAlign: "center", fontWeight: props.type.toUpperCase() == "COMPANY" ? "bold" : props.type.toUpperCase() == "BRANCH" ? "600" : "normal" }}>{props.name}</Text>
            <Text style={{ flex: 2 / 10, fontSize: fontScale(15), textAlign: "center", color: props.type.toUpperCase() == "COMPANY" ? "#000101" : props.type.toUpperCase() == "BRANCH" ? "#000101" : "#D19E01" }}>{props.preMonth}</Text>
            <Text style={{ flex: 2 / 10, fontSize: fontScale(15), textAlign: "center", color: props.type.toUpperCase() == "COMPANY" ? "#000101" : props.type.toUpperCase() == "BRANCH" ? "#000101" : "#D19E01" }}>{props.curMonth}</Text>
            <Text style={{ flex: 2 / 10, fontSize: fontScale(15), textAlign: "center", color: props.type.toUpperCase() == "COMPANY" ? "#000101" : props.type.toUpperCase() == "BRANCH" ? "#000101" : "#D19E01" }}>{props.difference}</Text>
            {/* <Text style={{ flex: 1 / 10, fontSize: fontScale(16), textAlign: "center", color: props.type.toUpperCase() == "company" ? "#000101" : props.type.toUpperCase() == "branch" ? "#000101" : "#D19E01" }}>*</Text> */}
            <TouchableOpacity style={{ flex: 1 / 11,alignItems:"center" }} onPress={() => { props.onPress(props.code) }} >

                {
                    props.type.toUpperCase() == "LEADER" ?
                        <Image source={images.eye} style={{ width: fontScale(25), height: fontScale(25), tintColor: '#cccccc' }} />
                        : null
                }

            </TouchableOpacity>

        </View>
    )
}
export default ReItem;