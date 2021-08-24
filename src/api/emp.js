import { _retrieveData, _storeData } from "../utils/Storage";
import { baseData, baseUrl } from "./utils";
import axios from "axios";

const getToken = async () => {
    let token = await _retrieveData("accessToken")
    return token
}
export const login = async (userName, password) => {
    let data = baseData
    await axios({
        method: "GET",
        url: `${baseUrl}login?password=${password}&userName=${userName}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: "token",
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                    await _storeData("accessToken", res.data.accessToken);
                }
            }
        })
        .catch(async (error) => {
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};
export const getExcutePlanDashboard = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/action-plan/getExcutePlanDashboard?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            // console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getGrowthEnterprise = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/action-plan/getGrowthEnterprise?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            // console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getDeliveryEnterprise = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/enterprise/getDeliveryEnterprise?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getDeliverySubAmount = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/enterprise/getDeliverySubAmount?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getKamPTRevenue = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/enterprise/getKamPTRevenue?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getProductivitySub = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/follow-impl-plan/avg-productivity/getProductivitySub?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};

export const getSalaryByMonthDashboard = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/monthly-salary/getSalaryByMonthDashboard?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};
export const getProductSalary = async (month) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}mobile/monthly-salary/dashboard/getProductSalary?month=${month}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data,
                        isLoading: false,
                        status: "success",
                        error: null
                    };
                }
            }
        })
        .catch(async (error) => {
            console.log(error)
            data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                error: error.response.data
            };
        });
    return data;
};