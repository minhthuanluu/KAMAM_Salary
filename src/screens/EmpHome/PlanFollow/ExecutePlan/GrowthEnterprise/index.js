import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, GETable, Header, MenuItem, MenuItemShow, TextAmount } from '../../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../../utils/Fonts';
import { width } from '../../../../../utils/Dimenssion';
import { colors } from '../../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../../utils/Images';

const GrowthEnterprise = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const dataTest = [
        {
            taxCode: "123123",
            enterpriseName: "test1",
            subNumber: "123213",
            package: "asds"
        },
        {
            taxCode: "454545",
            enterpriseName: "test2",
            subNumber: "3455",
            package: "vcbc"
        },
        {
            taxCode: "787878",
            enterpriseName: "test3",
            subNumber: "331166",
            package: "sfdfd"
        },
        {
            taxCode: "787878",
            enterpriseName: "test4",
            subNumber: "331166",
            package: "sfdfd"
        },
    ]
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Doanh nghiệp phát triển mới" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <GETable data={dataTest} />
            </View>
        </SafeAreaView>
    );
}

export default GrowthEnterprise;