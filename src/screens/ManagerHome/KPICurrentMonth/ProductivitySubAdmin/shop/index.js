import { useNavigation, useRoute } from '@react-navigation/core';
import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar, FlatList, View } from 'react-native';
import { Body, DatePicker, Header, Loading } from '../../../../../comps';
import { colors } from '../../../../../utils/Colors';
import { width } from '../../../../../utils/Dimenssion';
import { fontScale } from '../../../../../utils/Fonts';
import GenaralItemAdmin from '../genarailItemAdmin';
import Toast from 'react-native-toast-message';
import moment from 'moment';
import { styles } from './stytes';
import { images } from '../../../../../utils/Images';
import { _retrieveData } from '../../../../../utils/Storage';
import { getProductivitySubAdmin } from '../../../../../api/manager';
import { showToast } from '../../../../../utils/toast';
import { check403 } from '../../../../../api/emp';

const ShopProductivitySub = (props) => {
    const navigation = useNavigation();
    const route = useRoute()
    const [general, setGeneral] = useState([]);
    const [data, setData] = useState([]);
    const [role, setRole] = useState('');
    const [month, setMonth] = useState(route.params.month);
    const [loading, setLoading] = useState(false);
    const checkIcon = (icon) => {
        if (icon == "EMPLOYEE") {
            return images.AM_KAM
        } else if (icon == "UNIT") {
            return images.store
        } else if (icon == "BRANCH") {
            return images.branch
        } else if (icon == "COMPANY") {
            return images.company
        } else {
            return images.none
        }
    }
    const onChangeDatePicker = (date) => {
        setData([])
        setGeneral([])
        setMonth(date)
        getData(route.params.branchCode, month, route.params.shopCode)
    }

    const getData = async (branchCode, month, shopCode) => {
        setLoading(true)
        let res = await getProductivitySubAdmin(branchCode, month, shopCode)
        if (res.status == "success") {
            // showToast("success", "Th??nh c??ng", "L???y d??? li???u th??nh c??ng")
            if (res.data != undefined && res.data != null) {
                if (res.data.data != null && res.data.data != undefined) {
                    res.data.data.push(res.data.general)
                    setData(res.data.data)
                    // setGeneral(res.data.general)
                    // console.log(res.data.data)
                    setLoading(false)
                } else {
                    setLoading(false)
                    showToast("info", "Th??ng b??o", "Kh??ng c?? d??? li???u")
                }
            } else {
                setLoading(false)
                showToast("info", "Th??ng b??o", "Kh??ng c?? d??? li???u")
            }
        } else {
            setLoading(false)
            showToast("error", "L???i h??? th???ng", res.message)
            check403(res.error, navigation)
        }
    }
    const getRole = async () => {
        const role = await _retrieveData("role")
        setRole(role)
    }
    useEffect(() => {
        // navigation.addListener('focus', async () => {
        // const branchCode = route.params.branchCode
        getData(route.params.branchCode, month, route.params.shopCode)
        getRole()
        // })
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <Toast style={{ position: "absolute", zIndex: 100 }} ref={(ref) => Toast.setRef(ref)} />
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title="N??ng su???t b??nh qu??n" />
            <View style={{ alignSelf: "center" }}>
                <DatePicker month={month} width={width - fontScale(140)} onChangeDate={(date) => onChangeDatePicker(date)} />
            </View>
            <Body />
            <View style={styles.body}>
                {
                    data.length == 0 && loading == false ?
                        <Text style={{ textAlign: "center" }}>Kh??ng c?? d??? li???u</Text>
                        :
                        <FlatList
                            data={data}
                            keyExtractor={(item, key) => key.toString()}
                            renderItem={({ item, index }) => {
                                return (
                                    <GenaralItemAdmin icon={checkIcon(item.icon)} shopName={item.shopName} disable={role == "ROLE_LEADER" ? true : false}
                                        khtb={item.khtb} tttb={item.tttb} khdt={item.khdt} ttdt={item.ttdt} role={role} item={item} month={month} disable={true} />
                                )
                            }}
                        />
                }

                {/* {
                    general.length == 0 ?
                        null :
                        <GenaralItemAdmin icon={checkIcon(general.icon)} shopName={general.shopName} disable={true}
                            khtb={general.khtb} tttb={general.tttb} khdt={general.khdt} ttdt={general.ttdt} role={role} />
                } */}

            </View>

            <Loading loading={loading} />
        </SafeAreaView>
    );
}

export default ShopProductivitySub;