import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View, Image} from 'react-native';
import { Body, DatePicker, GenaralItem, Header } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';
const ProductivitySub = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Năng suất bình quân" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <ScrollView>
                    <GenaralItem shopName="Công ty 2" icon={images.company} standardSub="800/26" realSub="600/24" standardRevenue="800/26" realRevenue="600/24" />
                    <GenaralItem shopName="Công ty 2" icon={images.branch} standardSub="800/26" realSub="600/24" standardRevenue="800/26" realRevenue="600/24" />
                    <GenaralItem shopName="Công ty 2" icon={images.store} standardSub="800/26" realSub="600/24" standardRevenue="800/26" realRevenue="600/24" />
                    <GenaralItem shopName="Công ty 2" icon={images.AM_KAM} standardSub="800/26" realSub="600/24" standardRevenue="800/26" realRevenue="600/24" />

                </ScrollView>
            </View>

        </SafeAreaView>
    );
}

export default ProductivitySub;