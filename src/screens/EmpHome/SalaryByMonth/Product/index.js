import moment from 'moment';
import React from 'react';
import { useState } from 'react';
import { SafeAreaView, ScrollView, StatusBar, Text, View } from 'react-native';
import { Body, DatePicker, GETable, Header, ListItem, MenuItem, MenuItemShow, TextAmount } from '../../../../comps';
import { useNavigation } from '@react-navigation/core';
import { fontScale } from '../../../../utils/Fonts';
import { width } from '../../../../utils/Dimenssion';
import { colors } from '../../../../utils/Colors';
import { styles } from './style';
import { images } from '../../../../utils/Images';


const Product = (props) => {
    const navigation = useNavigation();
    const [month, setMonth] = useState(moment(new Date()).subtract(1, 'months').format("MM/YYYY"));
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar translucent backgroundColor={colors.primary} />
            <Header title="Lương sản phẩm" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(120)} onChangeDate={(date) => setMonth(date)} />
            </View>
            <Body style={{ marginTop: fontScale(44) }} showInfo={false} />
            <View style={styles.body}>
                <View style={styles.bg}>
                    <View style={{ marginTop: fontScale(20) }}>
                        <ListItem isFather={true} icon={images.growthenterprise} title="CP phát triển mới: " price=" " />
                        <View style={{ marginLeft: fontScale(5) }}>
                            <ListItem icon={images.none} title="Đợt 1: " price="300,000" />
                            <ListItem icon={images.none} title="Đợt 2: " price="600,000" />
                            <ListItem icon={images.none} title="Đợt 3: " price="900,000" />
                        </View>
                        <ListItem isFather={true} icon={images.dataIncentive} title="CP duy trì: " price="1,000,000" />
                        <ListItem isFather={true} icon={images.telecommunicationrevenue} title="CP dịch vụ viễn thông: " price="1,000,000" />
                        <ListItem isFather={true} icon={images.machineSelling} title="CP khuyến khích data: " price="1,000,000" />
                        <ListItem isFather={true} icon={images.maintain} title="CP bán máy: " price="1,000,000" />
                        <ListItem isFather={true} icon={images.change4Gsim} title="CP thay sim 4G: " price="500,000" />
                    </View>
                </View>

            </View>
        </SafeAreaView>
    );
}

export default Product;