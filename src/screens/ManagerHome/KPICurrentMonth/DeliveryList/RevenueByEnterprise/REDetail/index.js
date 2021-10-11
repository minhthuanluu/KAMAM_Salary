import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Header } from '../../../../../../comps';
import { colors } from '../../../../../../utils/Colors';

const RevenueByEnterpriseDetail = (props) => {
    return (
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title="Chi tiết biến động doanh thu" />

        </SafeAreaView>
    );
}

export default RevenueByEnterpriseDetail;