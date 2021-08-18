import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, GETable, Header, ListItem, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';

const DeliveSubsciberAmount = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Số lượng TB trả sau thuộc tập DN đang giao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <ScrollView style={styles.bg}>
                    <View style={{ marginTop: fontScale(20) }}>
                        <ListItem isFather={true} icon={images.icon_delivesubsciberamount1} title="TBTS còn trên mạng tháng 7: " price="900TB" />
                        <View style={{ marginLeft: fontScale(5) }}>
                            <ListItem icon={images.none} title="TB chất lượng: " price="800TB" />
                            <ListItem icon={images.none} title="TB không chất lượng: " price="100TB" />
                            <View style={{ marginLeft: fontScale(20) }}>
                                <ListItem isChild={true} icon={images.none} title="TBTS: " price="30TB" />
                                <ListItem isChild={true} icon={images.none} title="TBTT: " price="60TB" />
                                <ListItem isChild={true} icon={images.none} title="TB Data: " price="10TB" />
                            </View>
                        </View>
                    </View>
                    <View style={{ marginVertical: fontScale(20) }}>
                        <ListItem isFather={true} icon={images.icon_delivesubsciberamount1} title="TBTS còn trên mạng tháng 8: " price="900TB" />
                        <View style={{ marginLeft: fontScale(5) }}>
                            <ListItem icon={images.none} title="TB chất lượng: " price="800TB" />
                            <ListItem icon={images.none} title="TB không chất lượng: " price="100TB" />
                            <View style={{ marginLeft: fontScale(20) }}>
                                <ListItem isChild={true} icon={images.none} title="TBTS: " price="30TB" />
                                <ListItem isChild={true} icon={images.none} title="TBTT: " price="60TB" />
                                <ListItem isChild={true} icon={images.none} title="TB Data: " price="10TB" />
                            </View>
                        </View>
                    </View>


                </ScrollView>

            </View>
        </SafeAreaView>
    );
}

export default DeliveSubsciberAmount;