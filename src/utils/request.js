/* 封装axios用于发送请求 */

import axios from 'axios'
import { Toast } from 'vant'
import store from '@/store'

const request = axios.create({

  baseURL: '/api',

  timeout: 5000

})
// 添加请求拦截器

request.interceptors.request.use(function (config) {
  Toast.loading({

    message: '请求中',

    forbidClick: true,

    loadingType: 'spinner',

    duration: 0

  })

  const token = store.getters.token

  if (token) {
    config.headers['Access-Token'] = token
    config.headers.platform = 'H5'
  }

  return config
}, function (error) {
  return Promise.reject(error)
})

// 图片地址处理

function replaceImageUrl (data) {
  if (!data) return data

  const str = JSON.stringify(data)

  const newStr = str.replace(

    /https:\/\/localhost:8080/g,

    'https://smart-shop.itheima.net'

  )
  return JSON.parse(newStr)
}
// 添加响应拦截器

request.interceptors.response.use(function (response) {
  const res = replaceImageUrl(response.data)
  if (res.status !== 200) {
    Toast(res.message)
    return Promise.reject(res.message)
  } else {
    Toast.clear()
  }
  return res
}, function (error) {
  return Promise.reject(error)
})

export default request
