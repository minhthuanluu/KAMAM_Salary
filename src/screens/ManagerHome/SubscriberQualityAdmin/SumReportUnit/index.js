import React from 'react';
import { SafeAreaView, Text, StatusBar } from 'react-native';
import { Header } from '../../../../comps';
import { colors } from '../../../../utils/Colors';

const SumReportUnit = (props) => {
    return (
        <SafeAreaView>
            <StatusBar translucent={true} backgroundColor={colors.primary} />
            <Header title="SumReportUnit" />

        </SafeAreaView>
    );
}

export default SumReportUnit;