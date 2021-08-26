import React from 'react';
import { SafeAreaView, Text, View, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, SFTable } from '../../../comps';
import { images } from '../../../utils/Images';
import { fontScale } from '../../../utils/Fonts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';

const ProfileDashboard = (props) => {
    const navigation = useNavigation();
    const [showModal, setShowModal] = useState(false)
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar barStyle="dark-content" translucent backgroundColor={colors.primary} />
            <View style={{ backgroundColor: colors.white, flex: 1 }}>
                <Header showBack={false} title="Thông tin cá nhân" />
                <Image source={images.profileHeader} resizeMode="stretch" style={styles.headerShape} />
                <View style={styles.personInfo}>
                    <Text style={styles.staffCode}>Test name</Text>
                    <Text style={styles.staffName}>KAM/AM - 1.000</Text>
                    <Image style={styles.avatar} source={images.avatar} />
                </View>
                <Text style={{ marginTop: fontScale(30), marginLeft: fontScale(30), fontWeight: "bold", fontSize: fontScale(18), color: "#707070" }}>THÔNG TIN CÁ NHÂN</Text>

                <TouchableOpacity onPress={() => setShowModal(true)} style={{ backgroundColor: colors.primary, width: fontScale(50), height: fontScale(50), padding: fontScale(13), position: "absolute", bottom: fontScale(22), right: fontScale(22), borderRadius: fontScale(25) }}>
                    <Image source={images.pencil} resizeMode="cover" style={{ width: fontScale(25), height: fontScale(25) }} />
                </TouchableOpacity>
            </View>

            <Modal
                animationType={'fade'}
                visible={showModal}
                transparent={true}
                onRequestClose={() => setShowModal(!showModal)}>
                <View style={{ flex: 1, backgroundColor: colors.primary }}>
                    <View style={styles.optionDialogs}>
                        <TouchableOpacity onPress={() => setShowModal(!showModal)}>
                            <Image source={images.close} style={styles.closeIcon} />
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionMenu} onPress={() => [setShowModal(!showModal), navigation.navigate("UpdatePassword")]}>
                            <Text style={styles.menuTitle}>Đổi mật khẩu</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.optionMenu} onPress={() => [setShowModal(!showModal), navigation.navigate("UpdateProfile")]}>
                            <Text style={styles.menuTitle}>Chỉnh sửa thông tin cá nhân</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
        </SafeAreaView>
    );
}

export default ProfileDashboard;