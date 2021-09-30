import { baseUrl } from "./utils";
import axios from "axios";
import { _removeData, _retrieveData, _storeData } from "../utils/Storage";
import { POST, GET, PUT, DELETE } from "./method";



export const getMonthSalary = async (month, branchCode, shopCode) => {
  let token = "";
  await _retrieveData("userInfo").then((data) => {
    if (data != null) {
      token = data.accessToken;
    } else {
    //   navigation.navigate("SignIn");
    }
  });
  let data = {
    message: "",
    status: "",
    data: null,
    length:0,
    loading: null,
    error: null,
  };
  await axios({
    method: GET,
    url: `http://hochiminh.mobifone.vn/luongGDV/api/adminScreens/getMonthSalary?branchCode=${branchCode}&month=01/${month}&shopCode=${shopCode}`,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `4b29214a-db1f-492d-9a1a-8627f916dadf`,
    },
  })
    .then((res) => {
      if (res.status == 200) {
        if (res.data.V_ERROR) {
          data = {
            message: "Chức năng này đang được bảo trì",
            data: null,
            isLoading: false,
            status: "v_error",
            length: 0,
            error: null,
          };
        } else if (Object.values(res.data.data).length > 0) {
          data = {
            data: res.data,
            isLoading: false,
            status: "success",
            length: Object.values(res.data.data).length,
            error: null,
          };
        }
      }
    })
    .catch((error) => {
      if (error) {
        data = {
          message: error.response.data.message,
          isLoading: false,
          status: "failed",
          length: 0,
          error: error.response.data,
        };
      }
    });
  return data;
};

