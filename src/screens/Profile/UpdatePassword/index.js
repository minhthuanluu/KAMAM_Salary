import React from 'react';
import { SafeAreaView, Text, View, StatusBar, Image, TouchableOpacity, Modal } from 'react-native';
import { colors } from '../../../utils/Colors';
import { styles } from './style';
import { Body, DatePicker, Header, MenuItem, MenuItemShow, SFTable, Button, Input,AuthTitle } from '../../../comps';
import { images } from '../../../utils/Images';
import { fontScale } from '../../../utils/Fonts';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/core';
import { width } from '../../../utils/Dimenssion';

const UpdatePassword = (props) => {
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const navigation = useNavigation();
    const [loading, setLoading] = useState(false)


    const onChangePassword = async (oldPassword = '', newPassword = '', reNewPassword = '') => {
        if (oldPassword.length == 0) {
            setMessage("Vui lòng nhập mật khẩu cũ!")
        } else if (newPassword.length == 0) {
            setMessage("Vui lòng nhập mật khẩu mới!")
        } else if (phone.length == 0) {
            setMessage("Vui lòng nhập số điện thoại !")
        } else {
            setMessage('')
            // setLoading(true)
            // await updatePassword(oldPassword, newPassword).then((data) => {
            //     if (data.status == "success") {
            //         ToastNotif('Thông báo', 'Cập nhật mật khẩu thành công!', 'success', true);
            //         setLoading(false);
            //         setTimeout(() => {
            //             navigation.navigate("Home");
            //         }, 3000);
            //     }
            //     if (data.status == "failed") {
            //         ToastNotif('Thông báo', data.message, 'error', true);
            //         setLoading(false);
            //     }
            // });
            alert("updatePassword func")
        }
    }
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            {/* <Header title="Đổi mật khẩu" /> */}
            <View style={styles.bottomShape}>
                <Image source={images.loginbg} resizeMode="stretch" style={styles.trigleShape} />
            </View>
            <View style={styles.mbfLogoContainer}>
                <Image source={images.mblogo} resizeMode="contain" style={styles.logo} />
            </View>
            <View style={styles.topShape}>
                <AuthTitle title="đổi mật khẩu" style={styles.authTitle} />
                <Input underline pwd title="Mật khẩu cũ" width={width - fontScale(70)} style={styles.ipUsn} onChangeText={(value) => setOldPassword(value)} />
                <Input underline pwd title="Mật khẩu mới" width={width - fontScale(70)} style={styles.ipUsn} onChangeText={(value) => setNewPassword(value)} />
                {/* <Input underline pwd title="Xác nhận mật khẩu mới" width={width - fontScale(70)} style={styles.ipPwd} onChangeText={(value) => setReNewPassword(value)} /> */}
                <Input underline title="Số điện thoại" width={width - fontScale(70)} style={styles.ipPwd} onChangeText={(value) => setPhone(value)} />
                <Button width={fontScale(150)} label={"Đổi mật khẩu"} center style={styles.loginButton} onPress={() => onChangePassword(oldPassword, newPassword, phone)} />
                <Text style={{ textAlign: "center", color: colors.white, marginTop: fontScale(30) }}>{message}</Text>

            </View>
        </SafeAreaView>
    );
}

export default UpdatePassword;