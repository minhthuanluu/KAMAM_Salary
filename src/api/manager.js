import { baseData, baseUrl } from "./utils";
import axios from "axios";
import { _removeData, _retrieveData, _storeData } from "../utils/Storage";
import { POST, GET, PUT, DELETE } from "./method";
import { getToken } from './emp'

export const getTopAm = async (branchCode, month, shopCode, sort) => {
    console.log(branchCode, month, shopCode, sort)
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}manager/kpi/getTopAM`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: await getToken(),
        },
        data: {
            branchCode: branchCode,
            month: month,
            shopCode: shopCode,
            sort: sort
        }
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
                error: error
            };
        });
    return data;
};
export const getListBranch = async () => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}manager/kpi/getListBranch`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: await getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data.data,
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
                error: error
            };
        });
    return data;
};
export const getListLeader = async (shopcode) => {
    let data = baseData
    await axios({
        method: "POST",
        url: `${baseUrl}manager/kpi/getListLeader?shopCode=${shopcode}`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: await getToken(),
        },
    })
        .then(async (res) => {
            if (res.status == 200) {
                if (Object.values(res.data).length > 0) {
                    data = {
                        data: res.data.data,
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
                error: error
            };
        });
    return data;
};