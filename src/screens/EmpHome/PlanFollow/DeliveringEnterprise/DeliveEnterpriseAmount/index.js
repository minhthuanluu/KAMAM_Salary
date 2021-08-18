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

const DeliveEnterpriseAmount = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Số lượng DN đang giao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <View style={styles.bg}>
                    <Text></Text>
                <ListItem  icon={images.deliveenterpriseamount_ic} title="Số lượng DN hiện có tháng 7: " price="9" />
                <Text></Text>
                <ListItem  icon={images.deliveenterpriseamount_ic} title="Số lượng DN tháng 8: " price="5" />
                <Text></Text>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default DeliveEnterpriseAmount;