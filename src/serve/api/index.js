import axios from 'axios'
import Vue from 'vue'

let DPURL;

if ( process.env.NODE_ENV !== 'production' ) {
  DPURL = '/apis'
}else {
  DPURL = 'https://www.smartisan.com'
}

const service = axios.create({
  baseURL: DPURL,
  timeout: 10000, //10秒超时
  withCredentials: true       
})
const ERR_OK = 0;

// http response 全局拦截器
service.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    if(error.message.includes('timeout')){   // 判断请求异常信息中是否含有超时timeout字符串
      // 请求超时
      Vue.$vux.toast.show({
        text: '网络异常，请手动重新加载',
        time:'2000',
        width:'15rem'
      })
      return Promise.reject(error);          // reject错误信息
    }
      return Promise.reject(error);
  })


//get
export function getApi(url, params = {}) {
  return service.get(url, {
    params
  }).then((res) => {
    return res.data
  }).catch((err) => {
    console.log(err)
  })
}


//post
export function postApi(url, params = {}) {
  return service.post(url, params).then((res) => {
    return res.data;
  }).catch((err) => {
    console.log(err)
  })
}
