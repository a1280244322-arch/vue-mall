import request from '@/utils/request'
export const getProList = ({ categoryId, goodsName, page }) => {
  return request.get(
    `/goods/list&categoryId=${categoryId || ''}&goodsName=${goodsName || ''}&page=${page}`
  )
}
export const getProDetail = (goodsId) => {
  return request.get(`/goods/detail&goodsId=${Number(goodsId)}`)
}
// 获取商品评价
export const getProComments = (goodsId, page = 1) => {
  return request.get(
    `/comment/list&scoreType=-1&goodsId=${Number(goodsId)}&page=${page}`
  )
}
