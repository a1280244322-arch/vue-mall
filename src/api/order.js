import request from '@/utils/request'

export const checkOrder = (mode, obj) => {
  const params = {
    mode,
    delivery: 0,
    couponId: 0,
    isUsePoints: 0,
    ...obj
  }

  const str = Object.keys(params)
    .map(key => `${key}=${params[key]}`)
    .join('&')

  return request.get(`/checkout/order&${str}`)
}
// 提交订单
export const submitOrder = (mode, params) => {
  return request.post('/checkout/submit', {
    mode,
    delivery: 10, // 物流方式  配送方式 (10快递配送 20门店自提)
    couponId: 0, // 优惠券 id
    payType: 10, // 余额支付
    isUsePoints: 0, // 是否使用积分
    ...params
  })
}

// 订单列表
export const getMyOrderList = (dataType, page) => {
  return request.get(`/order/list/dataType/${dataType}/page/${page}`)
}
