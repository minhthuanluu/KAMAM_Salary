import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, SFTable } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';

const SubFluct = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const dataTest = [
        {
            subNumber: "123",
            date: "01/02",
            type: "cắt hủy"
        },
        {
            subNumber: "456",
            date: "03/04",
            type: "hạ gói"
        },
        {
            subNumber: "789",
            date: "05/06",
            type: "hạ gói"
        },
        {
            subNumber: "321",
            date: "07/08",
            type: "cắt hủy"
        },

    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Biến động thuê bao" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />

            <View style={styles.body}>
            <SFTable data={dataTest}/>
            </View>
        </SafeAreaView>
    );
}

export default SubFluct;