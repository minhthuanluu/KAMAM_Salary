import { baseUrl } from "./utils";
import { getToken } from "./emp"
import axios from "axios";

export const getReportByUnit = async (branchCode, shopCode) => {
    let data = {
        message: "",
        status: "",
        data: null,
        loading: null,
        error: null
    };

    const params = {
        "branchCode": branchCode,
        "shopCode": shopCode
    }

    await axios({
        method: "POST",
        url: `${baseUrl}manager/sub/getReportByUnit`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: await getToken(),
        },
        data: params
    })
        .then((res) => {
            if (res.status == 200) {
                data = {
                    data: res.data,
                    loading: false,
                    status: "success",
                    length: res.data.data.length,
                    error: null
                };
            }
        }).catch((error) => {
            if (error) {
                data = {
                    message: error.response.data.message,
                    loading: false,
                    status: "failed",
                    length: 0,
                    error: error.response.data
                };
            }
        });
    return data;
}

export const getReportByEmp = async () => {
    let data = {
        message: "",
        status: "",
        data: null,
        loading: null,
        error: null
    };

    await axios({
        method: "POST",
        url: `${baseUrl}manager/sub/getReportByEmp`,
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
            Authorization: await getToken(),
        }
    })
        .then((res) => {
            if (res.status == 200) {
                data = {
                    data: res.data,
                    isLoading: false,
                    status: "success",
                    length: res.data.data.length,
                    error: null
                };
            }
        }).catch((error) => {
            if (error) {
                data = {
                    message: error.response.data.message,
                    isLoading: false,
                    status: "failed",
                    length: 0,
                    error: error.response.data
                };
            }
        });
    return data;
}