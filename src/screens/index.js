import React, { Component } from "react";

import Recovery from "./Auth/Recovery";
import SignIn from "./Auth/Signin";

import EmpDashboard from "./EmpHome/Dashboard";

import PlanFollowDashboard from "./EmpHome/PlanFollow/Dashboard";

import ExecutePlanDashboard from "./EmpHome/PlanFollow/ExecutePlan/Dashboard";
import TotalPostpaid from "./EmpHome/PlanFollow/ExecutePlan/TotalPostpaid";
import QualitySub from "./EmpHome/PlanFollow/ExecutePlan/QualitySub";
import IncurredRevenue from "./EmpHome/PlanFollow/ExecutePlan/IncurredRevenue";
import GrowthEnterprise from "./EmpHome/PlanFollow/ExecutePlan/GrowthEnterprise";
import TelecommunicationRevenue from "./EmpHome/PlanFollow/ExecutePlan/TelecommunicationRevenue";
import RetailRevenue from "./EmpHome/PlanFollow/ExecutePlan/RetailRevenue";
import Change4Gsim from "./EmpHome/PlanFollow/ExecutePlan/Change4Gsim";

import DeliveringEnterpriseDashboard from "./EmpHome/PlanFollow/DeliveringEnterprise/Dashboard"
import DeliveEnterpriseAmount from "./EmpHome/PlanFollow/DeliveringEnterprise/DeliveEnterpriseAmount";
import DeliveSubsciberAmount from "./EmpHome/PlanFollow/DeliveringEnterprise/DeliveSubsciberAmount";
import KAMPT from "./EmpHome/PlanFollow/DeliveringEnterprise/KAMPT";

import ProductivitySub from "./EmpHome/PlanFollow/ProductivitySub";

import SalaryByMonthDashboard from "./EmpHome/SalaryByMonth/Dashboard";
import Fixedwage from "./EmpHome/SalaryByMonth/Fixedwage";
import Product from "./EmpHome/SalaryByMonth/Product";
import PlanOut from "./EmpHome/SalaryByMonth/PlanOut";
import Sanctions from "./EmpHome/SalaryByMonth/Sanctions";
import Others from "./EmpHome/SalaryByMonth/Others";

import AVGIncomeDashboard from "./EmpHome/AVGIncome/Dashboard";
import TotalFixedwage from "./EmpHome/AVGIncome/TotalFixedwage";
import TotalProductwage from "./EmpHome/AVGIncome/TotalProductwage";
import PlanOutOutcome from "./EmpHome/AVGIncome/PlanOutOutcome";
import OtherOutcome from "./EmpHome/AVGIncome/OtherOutcome";

import SubscriberQuality from "./EmpHome/SubscriberQuality";

import WarningDashboard from "./EmpHome/Warning/Dashboard";
import SubFluct from "./EmpHome/Warning/SubFluct";
import IncomeFluct from "./EmpHome/Warning/IncomeFluct";
import EnterpriseFluct from "./EmpHome/Warning/EnterpriseFluct";
import KPIMonthReport from "./EmpHome/KPIMonthReport";

import ProfileDashboard from "./Profile/Dashboard"
import UpdatePassword from "./Profile/UpdatePassword"
import UpdateProfile from "./Profile/UpdateProfile"
import SignOut from "./SignOut"

export const RecoveryScreen = () => { return <Recovery /> }
export const SignInScreen = () => { return <SignIn /> }

export const EmpDashboardScreen = (route) => { return <EmpDashboard route={route} /> }
export const PlanFollowDashboardScreen = (route) => { return <PlanFollowDashboard route={route} /> }
export const ExecutePlanDashboardScreen = (route) => { return <ExecutePlanDashboard route={route} /> }

export const TotalPostpaidScreen = () => { return <TotalPostpaid /> }
export const QualitySubScreen = () => { return <QualitySub /> }
export const IncurredRevenueScreen = () => { return <IncurredRevenue /> }
export const GrowthEnterpriseScreen = () => { return <GrowthEnterprise /> }
export const TelecommunicationRevenueScreen = () => { return <TelecommunicationRevenue /> }
export const RetailRevenueScreen = () => { return <RetailRevenue /> }
export const Change4GsimScreen = () => { return <Change4Gsim /> }
export const DeliveringEnterpriseDashboardScreen = (route) => { return <DeliveringEnterpriseDashboard route={route} /> }
export const DeliveEnterpriseAmountScreen = () => { return <DeliveEnterpriseAmount /> }
export const DeliveSubsciberAmountScreen = () => { return <DeliveSubsciberAmount /> }
export const KAMPTScreen = () => { return <KAMPT /> }
export const ProductivitySubScreen = () => { return <ProductivitySub /> }
export const SalaryByMonthDashboardScreen = (route) => { return <SalaryByMonthDashboard route={route} /> }
export const FixedwageScreen = () => { return <Fixedwage /> }
export const ProductScreen = () => { return <Product /> }
export const PlanOutScreen = () => { return <PlanOut /> }
export const SanctionsScreen = () => { return <Sanctions /> }
export const OthersScreen = () => { return <Others /> }
export const AVGIncomeDashboardScreen = (route) => { return <AVGIncomeDashboard route={route} /> }
export const TotalFixedwageScreen = () => { return <TotalFixedwage /> }
export const TotalProductwageScreen = () => { return <TotalProductwage /> }
export const PlanOutOutcomeScreen = () => { return <PlanOutOutcome /> }
export const OtherOutcomeScreen = () => { return <OtherOutcome /> }
export const SubscriberQualityScreen = () => { return <SubscriberQuality /> }
export const WarningDashboardScreen = (route) => { return <WarningDashboard route={route} /> }
export const SubFluctScreen = () => { return <SubFluct /> }
export const IncomeFluctScreen = () => { return <IncomeFluct /> }
export const EnterpriseFluctScreen = () => { return <EnterpriseFluct /> }
export const KPIMonthReportScreen = () => { return <KPIMonthReport /> }

export const ProfileDashboardScreen = (route) => { return <ProfileDashboard route={route} /> }
export const UpdatePasswordScreen = () => { return <UpdatePassword /> }
export const UpdateProfileScreen = () => { return <UpdateProfile /> }

export const SignOutScreen = () => { return <SignOut /> }