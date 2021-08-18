import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, SFTable } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';
import IFTable from '../../../../comps/ifTable';

const IncomeFluct = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    const dataTest = {
        qualSub: [
            {
                date: "01/02",
                money: "- 100,000"
            },
            {
                date: "02/03",
                money: "- 100,000"
            },
            {
                date: "04/05",
                money: "- 100,000"
            },
            {
                date: "05/06",
                money: "- 100,000"
            },
        ],
        noneQualSub: [
            {
                date: "01/02",
                money: "- 100,000"
            },
            {
                date: "02/03",
                money: "- 100,000"
            },
            {
                date: "04/05",
                money: "- 100,000"
            },
            {
                date: "05/06",
                money: "- 100,000"
            },
        ]
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Biến động doanh thu" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <ScrollView style={styles.body}>
                <IFTable data={dataTest.qualSub} title="Doanh thu trong tập chất lượng" color="#FBEB0B38" />
                <IFTable data={dataTest.noneQualSub} title=" Doanh thu trong tập không chất lượng" color="#6AECDB38" />
            </ScrollView>

        </SafeAreaView>
    );
}

export default IncomeFluct;