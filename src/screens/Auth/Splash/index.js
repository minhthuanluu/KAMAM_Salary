import React, { useEffect } from 'react';
import { SafeAreaView, StatusBar, View, Text, Image, ActivityIndicator } from 'react-native';
import { _removeData, _retrieveData } from '../../../utils/Storage';
import { useIsFocused, useNavigation } from '@react-navigation/core';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { styles } from './style';
import { text } from '../../../utils/Text';
import { checkLogin, checkUserRole } from '../../../utils/Logistics';
import { fontScale } from '../../../utils/Fonts';

const Splash = () => {
    const navigation = useNavigation();
    const isFocus = useIsFocused();

    useEffect(() => {
        setTimeout(async () => {
            let isLogin = await _retrieveData("isLogin")
            if (isLogin == true) {
                navigation.navigate("AdminHome")
            } else {
                navigation.navigate("SignIn")
            }

        }, 3000);
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <StatusBar backgroundColor={colors.primary} />
            <Image source={images.logo} style={styles.logo} />
            <View style={{ flex: 3.5, justifyContent: "center", top: fontScale(20) }}>
                <Image source={images.splashshape} style={styles.shape} />
            </View>
            <View style={{ flex: 2, top: fontScale(70) }}>
                <Text style={styles.appName}>
                    {/* {text.appName} */}
                    KAM/AM Salary
                </Text>
                <ActivityIndicator size="small" color={colors.white} style={styles.loadingIcon} />
            </View>
        </SafeAreaView>
    );
}

export default Splash;