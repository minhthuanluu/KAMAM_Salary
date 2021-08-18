import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, Image } from 'react-native';
import { Body, DatePicker, GETable, Header, ListItem, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';

const KAMPT = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="DT TB do KAM PT thuộc tập DN giao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <MenuItemShow value="38,000,000" style={{ marginTop: fontScale(25) }} title="Doanh thu tháng 7" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.ic_KAMPT1} width={width - fontScale(60)} />
                {/* --------------------- */}
                <View style={styles.bg}>
                    <View style={{ flexDirection: "row" }}>
                        <Text style={{ flex: 1 / 2, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(40), marginLeft: fontScale(10) }}>Doanh thu tháng 8</Text>
                        <Image source={images.ic_KAMPT2} style={{ width: fontScale(50), height: fontScale(50), position: "absolute", right: fontScale(30), top: -fontScale(23) }} resizeMode="contain" />
                        <Text style={{
                            flex: 1 / 2, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(40), textAlign: "right",
                            marginRight: fontScale(30), color: "#35CBD6"
                        }}
                        >18,000,000</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{
                            flex: 2 / 3, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(10),
                            marginLeft: fontScale(10), color: "#9E9898"
                        }}>Doanh thu từ tập TB chất lượng</Text>
                        <Text style={{
                            flex: 1 / 3, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(10), textAlign: "right",
                            marginRight: fontScale(30), color: "#35CBD6"
                        }}
                        >9,000,000</Text>
                    </View>

                    <View style={{ flexDirection: "row", alignItems: "center" }}>
                        <Text style={{
                            flex: 2 / 3, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(10),
                            marginLeft: fontScale(10), color: "#9E9898"
                        }}>Doanh thu từ tập TB không chất lượng (TS, TT ,Data)</Text>
                        <Text style={{
                            flex: 1 / 3, fontSize: fontScale(18), fontWeight: "bold", marginBottom: fontScale(10), marginTop: fontScale(10), textAlign: "right",
                            marginRight: fontScale(30), color: "#35CBD6"
                        }}
                        >9,000,000</Text>
                    </View>
                </View>
                {/* --------------------- */}
            </View>
        </SafeAreaView>
    );
}

export default KAMPT;