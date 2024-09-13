import axios from "axios";

// axios实例1
const service = axios.create({
  baseURL: "https://app.upnetwork.one/",
  timeout: 50000,
});

service.interceptors.request.use(
  (config) => {
    // if (store.getters.token) {
    //   config.headers['X-Token'] = getToken()
    // }
    console.log('config', config)
    return config;
  },
  (error) => {
    console.log(error); // for debug
    return error
  }
);

service.interceptors.response.use(
  (response) => {
    const res = response.data;
    // if (res.code !== 20000) {
    //   console.log('接口信息报错',res.message)
    //   return Promise.reject(new Error(res.message || 'Error'))
    // } else {
    //   return res
    // }
    return res;
  },
  (error) => {
    // console.log('接口信息报错' + error)
    return error;
  }
);

export default service;
