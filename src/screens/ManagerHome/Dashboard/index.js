import React, { useEffect, useState } from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { imgUrl } from '../../../api/utils';
import { Header } from '../../../comps';
import { colors } from '../../../utils/Colors';
import { images } from '../../../utils/Images';
import { useNavigation } from '@react-navigation/core';
import { useIsFocused } from '@react-navigation/native';

const AdminDashboard = (props) => {
    const navigation = useNavigation();
    const [user, setUserData] = useState([]);
    const [loading, setLoading] = useState(false);
    return (
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header showBack={false} profile avatar={user.linkImg != "" && user.linkImg != undefined ? { uri: imgUrl + user.linkImg } : images.avatar} fullName={user.empName} maGDV={user.shopName} />

        </SafeAreaView>
    );
}

export default AdminDashboard;