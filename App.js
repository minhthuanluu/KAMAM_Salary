import 'react-native-gesture-handler';
import React, { useEffect, useState } from 'react';
import { Image, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {
  RecoveryScreen, SignInScreen, EmpDashboardScreen, PlanFollowDashboardScreen, ExecutePlanDashboardScreen,
  TotalPostpaidScreen, QualitySubScreen, IncurredRevenueScreen, GrowthEnterpriseScreen, TelecommunicationRevenueScreen,
  RetailRevenueScreen, Change4GsimScreen, DeliveringEnterpriseDashboardScreen, DeliveEnterpriseAmountScreen,
  DeliveSubsciberAmountScreen, KAMPTScreen, ProductivitySubScreen, SalaryByMonthDashboardScreen,
  FixedwageScreen, ProductScreen, PlanOutScreen, SanctionsScreen, OthersScreen, AVGIncomeDashboardScreen,
  TotalFixedwageScreen, TotalProductwageScreen, PlanOutOutcomeScreen, OtherOutcomeScreen, SubscriberQualityScreen,
  WarningDashboardScreen, SubFluctScreen, IncomeFluctScreen, EnterpriseFluctScreen, KPIMonthReportScreen,
  ProfileDashboardScreen, UpdatePasswordScreen, UpdateProfileScreen, SignOutScreen
} from './src/screens';
import { colors } from './src/utils/Colors';
import { images } from './src/utils/Images';
import { _retrieveData } from './src/utils/Storage';
import { fontScale } from './src/utils/Fonts';
import { LogBox } from 'react-native';
import Splash from './src/screens/Auth/Splash';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const EMPBottomTab = () => {
  return (
    <Tab.Navigator tabBarOptions={
      {
        activeTintColor: colors.primary,
        inactiveTintColor: '#A2A1A1'
      }
    }
      initialRouteName="Home"
    >
      <Tab.Screen
        name="Profile"
        component={ProfileStack}
        options={{
          tabBarLabel: 'Profile',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.user} />
          }
        }} />
      <Tab.Screen
        name="Home"
        component={EMPStack}
        options={{
          tabBarLabel: 'Home',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.home} />
          }
        }} />
      <Tab.Screen
        name="SignOut"
        component={SignOutScreen}
        options={{
          tabBarLabel: 'Logout',
          tabBarIcon: ({ color, size, focused }) => {
            return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.logout} />
          }
        }} />
    </Tab.Navigator>
  );
}

// const AdminBottomTab = () => {
//   return (
//     <Tab.Navigator tabBarOptions={
//       {
//         activeTintColor: colors.primary,
//         inactiveTintColor: '#A2A1A1'
//       }
//     }
//       initialRouteName="Home"
//     >
//       <Tab.Screen
//         name="Profile"
//         component={ProfileStack}
//         options={{
//           tabBarLabel: 'Profile',
//           tabBarIcon: ({ color, size, focused }) => {
//             return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.user} />
//           }
//         }} />
//       <Tab.Screen
//         name="Home"
//         component={AdminStack}
//         options={{
//           tabBarLabel: 'Home',
//           tabBarIcon: ({ color, size, focused }) => {
//             return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.home} />
//           }
//         }} />
//       <Tab.Screen
//         name="SignOut"
//         component={SignOutScreen}
//         options={{
//           tabBarLabel: 'Logout',
//           tabBarIcon: ({ color, size, focused }) => {
//             return <Image style={{ width: fontScale(size), height: fontScale(size), tintColor: focused == false ? colors.grey : colors.primary }} resizeMode="cover" source={images.logout} />
//           }
//         }} />
//     </Tab.Navigator>
//   );
// }

const EMPStack = () => {
  return (
    <Stack.Navigator initialRouteName="Home" screenOptions={{ headerShown: false, gestureEnabled: true }} >
      <Stack.Screen name="Home" component={EmpDashboardScreen} />
      <Stack.Screen name="PlanFollowDashboard" component={PlanFollowDashboardScreen} />
      <Stack.Screen name="SalaryByMonthDashboard" component={SalaryByMonthDashboardScreen} />
      <Stack.Screen name="AVGIncomeDashboard" component={AVGIncomeDashboardScreen} />
      <Stack.Screen name="SubscriberQuality" component={SubscriberQualityScreen} />
      <Stack.Screen name="WarningDashboard" component={WarningDashboardScreen} />
      <Stack.Screen name="KPIMonthReport" component={KPIMonthReportScreen} />
    </Stack.Navigator>
  )
}

// const AdminStack = () => {
//   return (
//     <Stack.Navigator initialRouteName="AdminHome" screenOptions={{ headerShown: false }}>
//       <Stack.Screen name="AdminHome" component={AdminHomeScreen} />
//       <Stack.Screen name="AdminKPIDashboard" component={AdminKPIDashboardScreen} />
//       <Stack.Screen name="AdminTopTellersKPI" component={AdminTopTellersKPIScreen} />
//       <Stack.Screen name="AdminKPIGroupKPI" component={AdminKPIGroupKPIScreen} />
//       <Stack.Screen name="AdminKPIMonth" component={AdminKPIMonthScreen} />
//       <Stack.Screen name="AdminKPIMonthShop" component={AdminKPIMonthShopScreen} />
//       <Stack.Screen name="AdminKPIMonthGDV" component={AdminKPIMonthGDVScreen} />
//       <Stack.Screen name="AdminProductivitySub" component={AdminProductivitySubScreen} />
//       <Stack.Screen name="AdminSalaryByMonthDashboard" component={AdminSalaryByMonthDashboardScreen} />
//       <Stack.Screen name="AdminTopTellers" component={AdminTopTellersScreen} />
//       <Stack.Screen name="AdminSalaryGroup" component={AdminSalaryGroupScreen} />

//       <Stack.Screen name="AdminMonthSalary" component={AdminMonthSalaryScreen} />
//       <Stack.Screen name="AdminMonthSalaryShop" component={AdminMonthSalaryShopScreen} />
//       <Stack.Screen name="AdminMonthSalaryGDV" component={AdminMonthSalaryGDVScreen} />

//       <Stack.Screen name="AdminAvgIncomeDashboard" component={AdminAvgIncomeDashboardScreen} />
//       <Stack.Screen name="AdminAvgIncomeTopSellers" component={AdminAvgIncomeTopSellersScreen} />
//       <Stack.Screen name="AdminAvgIncomeSalaryGroup" component={AdminAvgIncomeSalaryGroupScreen} />
//       <Stack.Screen name="AdminAvgIncome" component={AdminAvgIncomeScreen} />
//       <Stack.Screen name="AdminAvgIncomeShop" component={AdminAvgIncomeShopScreen} />
//       <Stack.Screen name="AdminAvgIncomeTellers" component={AdminAvgIncomeTellersScreen} />
//       <Stack.Screen name="AdminExpenseManagement" component={AdminExpenseManagementScreen} />
//       <Stack.Screen name="AdminDetailProductivitySub" component={AdminDetailProductivitySubScreen} />

//       <Stack.Screen name="SubscriberQualityDashboard" component={AdminSubscriberQualityDashboardScreen} />
//       <Stack.Screen name="BranchSubscriberQuality" component={AdminBranchSubscriberQualityScreen} />
//       <Stack.Screen name="ShopSubscriberQuality" component={AdminShopSubscriberQualityScreen} />
//       <Stack.Screen name="EmpSubscriberQuality" component={AdminEmpSubscriberQualityScreen} />
//       {/* Chất lượng thuê bao > Cảnh báo vi phạm */}
//       <Stack.Screen name="AdminViolateSubscriber" component={AdminViolateSubscriberScreen} />
//       {/* Chất lượng thuê bao > Cảnh báo vi phạm > Chuyển Fast/MD1/MDT>=1TB*/}
//       <Stack.Screen name="AdminViolateSubscriberFast" component={AdminViolateSubscriberFastScreen} />
//       {/* Chất lượng thuê bao > Cảnh báo vi phạm > Chuyển FCard >= 3TB*/}
//       <Stack.Screen name="AdminViolateSubscriberFCard" component={AdminViolateSubscriberFCardScreen} />
//       {/* Chất lượng thuê bao > Cảnh báo vi phạm > GDV xuất hiện  >= 3 lần trong 6 tháng*/}
//       <Stack.Screen name="AdminViolateSubscriberOverThree" component={AdminViolateSubscriberOverThreeScreen} />


//       <Stack.Screen name="AdminSubscriberQualitySummaryBranch" component={AdminSubscriberQualitySumBranchScreen} />
//       <Stack.Screen name="AdminSubscriberQualitySummaryShop" component={AdminSubscriberQualitySumShopScreen} />
//       <Stack.Screen name="AdminSubscriberQualitySummaryEmp" component={AdminSubscriberQualitySumEmpScreen} />
//       <Stack.Screen name="AdminViolateFastSubDetail" component={AdminViolateFastSubDetailScreen} />

//       <Stack.Screen name="AdminTransInfoDashdoard" component={AdminTransInfoDashdoardScreen} />
//       <Stack.Screen name="AdminStatisticalBranch" component={AdminStatisticalBranchScreen} />
//       <Stack.Screen name="AdminStatisticalShop" component={AdminStatisticalShopScreen} />
//       <Stack.Screen name="AdminStatisticalEmp" component={AdminStatisticalEmpScreen} />
//       <Stack.Screen name="AdminViolateWarningDashboard" component={AdminViolateWarningDashboardScreen} />
//       <Stack.Screen name="AdminEmpRegInfo" component={AdminEmpRegInfoScreen} />
//       <Stack.Screen name="AdminEmpRegInfoDetail" component={AdminEmpRegInfoDetailScreen} />
//       <Stack.Screen name="AdminDenyByWrongInfo" component={DenyByWrongInfoScreen} />
//       <Stack.Screen name="AdminEmpThreeTime" component={AdminEmpThreeTimeScreen} />


//       <Stack.Screen name="AdminUnitInfo" component={AdminUnitInfoScreen} />
//       <Stack.Screen name="AdminDetailUnitInfo" component={AdminDetailUnitInfoScreen} />
//       <Stack.Screen name="AdminImageDetailUnitInfo" component={AdminImageDetailUnitInfoScreen} />

//       <Stack.Screen name="AdminBranchTransInfo" component={AdminBranchTransInfoScreen} />
//       <Stack.Screen name="AdminShopTransInfo" component={AdminShopTransInfoScreen} />
//       <Stack.Screen name="AdminEmpTransInfo" component={AdminEmpTransInfoScreen} />

//     </Stack.Navigator>
//   )
// }

const ProfileStack = () => {
  return (
    <Stack.Navigator initialRouteName="Profile" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Profile" component={ProfileDashboardScreen} />
      <Stack.Screen name="UpdateProfile" component={UpdateProfileScreen} />
      <Stack.Screen name="UpdatePassword" component={UpdatePasswordScreen} />
    </Stack.Navigator>
  )
}

const AuthStack = () => {
  return (
    <Stack.Navigator initialRouteName="Splash" screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Splash" component={Splash} />
      <Stack.Screen name="SignIn" component={SignInScreen} />
    </Stack.Navigator>
  )
}

export default function App() {
  StatusBar.setBarStyle('light-content', true);
  LogBox.ignoredYellowBox = ["Warning: Each", "Warning: Failed"]

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Splash" component={AuthStack} />
        <Stack.Screen name="EMPHome" component={EMPBottomTab} />
        {/* <Stack.Screen name="AdminHome" component={AdminBottomTab} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  );
}