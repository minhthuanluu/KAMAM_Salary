import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Header } from '../../../../../comps';
import { colors } from '../../../../../utils/Colors';

const RevenueByEnterprise = (props) => {
    return (
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title="Thuê bao theo doanh nghiệp" />

        </SafeAreaView>
    );
}

export default RevenueByEnterprise;