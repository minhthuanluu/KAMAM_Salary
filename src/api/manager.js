import { baseUrl } from "./utils";
import {getToken} from "./emp"

export const getReportByUnit = async(branchCode,shopCode)=>{
    let data = {
        message: "",
        status: "",
        res: null,
        loading: null,
        error: null
      };
    
      await axios({
        method: POST,
        url: ``,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
          Authorization: getToken(),
        },
        data: formData
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
          if (error.response.data.status == 403) {
            // navigation.navigate("SignIn")
          } else {
            if (error == "Network Error") {
    
            } else {
              data = {
                message: error.response.data.message,
                isLoading: false,
                status: "failed",
                length: 0,
                error: error.response.data
              };
            }
          }
        });
      return data;
}