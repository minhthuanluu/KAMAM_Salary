import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Header } from '../../../../comps';
import { colors } from '../../../../utils/Colors';

const KPICurrentMonthDashboard = (props) => {
    return (
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title="KPICurrentMonthDashboard" />

        </SafeAreaView>
    );
}

export default KPICurrentMonthDashboard;