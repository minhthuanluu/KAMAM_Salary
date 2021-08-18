import React from 'react';
import { SafeAreaView, Text, View, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, SFTable, Button } from '../../../comps';
import { images } from '../../../utils/Images';
import { fontScale } from '../../../utils/Fonts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

const UpdateProfile = (props) => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" translucent backgroundColor={colors.primary} />
            <View style={{ backgroundColor: colors.white, flex: 1 }}>
                <View style={{ flex: 1 / 2 }}>


                    <Header title="Chỉnh sửa thông tin cá nhân" />
                    <Image source={images.profileHeader} resizeMode="stretch" style={styles.headerShape} />
                    <View style={styles.personInfo}>
                        <Text style={styles.staffName}>Test name</Text>
                        <Text style={styles.staffCode}>KAM/AM - 001</Text>

                        <Image style={styles.avatar} source={images.avatar} />
                    </View>
                    <Text style={{ marginTop: fontScale(30), marginLeft: fontScale(30), fontWeight: "bold", fontSize: fontScale(18), color: "#707070" }}>THÔNG TIN CÁ NHÂN</Text>
                </View>
                <View style={{ flex: 1 / 2, justifyContent: "flex-end", marginBottom: fontScale(20) }}>
                    <Button
                        style={styles.button}
                        label="Lưu thay đổi"
                        onPress={() => {alert("UpdateProfile func")}} />
                </View>

            </View>

        </SafeAreaView>
    );
}

export default UpdateProfile;