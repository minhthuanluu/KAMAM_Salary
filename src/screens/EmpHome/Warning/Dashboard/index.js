import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, Header, MenuItem } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';

const WarningDashboard = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Cảnh báo" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <MenuItem value=" "  style={{ marginTop: fontScale(30) }} title="Biến động thuê bao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.subfluct} width={width - fontScale(60)} onPress={() => navigation.navigate("SubFluct")} />
                <MenuItem value=" " style={{ marginTop: fontScale(50) }} title="Biến động doanh thu" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.incomefluct} width={width - fontScale(60)} onPress={() => navigation.navigate("IncomeFluct")} />
                <MenuItem value="Giảm 1 DN" style={{ marginTop: fontScale(50) }} title="Biến động DN trong tập DS giao" titleMenuStyle={{ paddingTop: fontScale(17) }} icon={images.enterprisefluct} width={width - fontScale(60)} onPress={() => navigation.navigate("EnterpriseFluct")} />
            </View>
        </SafeAreaView>
    );
}

export default WarningDashboard;