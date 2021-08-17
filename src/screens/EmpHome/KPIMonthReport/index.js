import React from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, Header, ListItem } from '../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../utils/Fonts';
import { width } from '../../../utils/Dimenssion';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../utils/Images';

const KPIMonthReport = (props) => {
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Báo cáo KPI tháng" />
            <Text style={{ textAlign: "center", fontWeight: "bold", color: "white", fontSize: fontScale(18) }}>KPI khoáng sản phẩm tháng 08/2021</Text>
            <Body style={{ marginTop: fontScale(22) }} showInfo={false} />

            <View style={styles.body}>
                <ScrollView style={styles.bg}>
                    <ListItem isFather={true} icon={images.newSubTotal} title="Chỉ tiêu phát triển mới TB: " price="100%" />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price="900TB" />
                        <ListItem isChild={true} icon={images.none} title="SLTB chất lượng thực hiện" price="450TB" />
                        <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price="50%" />
                    </View>
                    <ListItem isFather={true} icon={images.growthTotal} title="Chỉ tiêu tăng trưởng doanh thu:" price="100%" />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price="900TB" />
                        <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price="9,000,000" />
                        <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price="50%" />
                    </View>
                    <ListItem isFather={true} icon={images.totalOTarget} title="Chỉ tiêu điều hành_CTĐH:" price="100%" />
                    <View style={{ marginLeft: 10 }}>
                        <ListItem icon={images.none} title="Chỉ tiêu PTM doanh nghiệp:" price="100%" />
                        <View style={{ marginLeft: 15 }}>
                            <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price="900TB" />
                            <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price="9,000,000" />
                            <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price="50%" />
                        </View>
                        <ListItem icon={images.none} title="Chỉ tiêu tăng trưởng DTVT:" price="100%" />
                        <View style={{ marginLeft: 15 }}>
                            <ListItem isChild={true} icon={images.none} title="Kế hoạch giao" price="900TB" />
                            <ListItem isChild={true} icon={images.none} title="Doanh thu thực hiện" price="9,000,000" />
                            <ListItem isChild={true} icon={images.none} title="% hoàn thành kế hoạch" price="50%" />
                        </View>
                        <ListItem icon={images.none} title="BQ % HT chỉ tiêu điều hành:" price="100" />
                    </View>
                    <ListItem isFather={true} icon={images.totalKPI} title="Tổng KPI khoán sản phẩm:" price="100%" />
                </ScrollView>
            </View>
        </SafeAreaView>
    );
}

export default KPIMonthReport;