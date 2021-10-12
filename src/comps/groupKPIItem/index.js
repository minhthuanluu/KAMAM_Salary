import React from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { fontScale } from '../../utils/Fonts';
const GroupKPIItem = (props) => {
    return (
        <View style={{ flexDirection: "row", backgroundColor: props.type == "company" ? "#FBFDC3" : props.type == "branch" ? "#EBFDFD" : "white",borderBottomWidth:0.2,marginBottom:0.3,justifyContent:"center",alignItems:"center" }}>
            <Text style={{ flex: 2 / 7, fontSize: fontScale(16), textAlign: "center",fontWeight: props.type == "company" ? "bold" : props.type == "branch" ? "600" : "normal" }}>{props.name}</Text>
            <Text style={{ flex: 1 / 7, fontSize: fontScale(16), textAlign: "center", color: props.type == "company" ? "#000101" : props.type == "branch" ? "#000101" : "#D19E01" }}>{props.kpi100}</Text>
            <Text style={{ flex: 1 / 7, fontSize: fontScale(16), textAlign: "center", color: props.type == "company" ? "#000101" : props.type == "branch" ? "#000101" : "#D19E01" }}>{props.kpi90}</Text>
            <Text style={{ flex: 1 / 7, fontSize: fontScale(16), textAlign: "center", color: props.type == "company" ? "#000101" : props.type == "branch" ? "#000101" : "#D19E01" }}>{props.kpi70}</Text>
            <Text style={{ flex: 1 / 7, fontSize: fontScale(16), textAlign: "center", color: props.type == "company" ? "#000101" : props.type == "branch" ? "#000101" : "#D19E01" }}>{props.kpilow}</Text>
            <Text style={{ flex: 1 / 7, fontSize: fontScale(16), textAlign: "center", color: props.type == "company" ? "#000101" : props.type == "branch" ? "#000101" : "#D19E01" }}>{props.total}</Text>
        </View>
    )
}
export default GroupKPIItem;