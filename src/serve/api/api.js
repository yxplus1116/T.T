import { getApi, postApi } from './index'

// 首页
// https://www.smartisan.com/product/home
export const getHome = () => {
    return getApi('/product/home')
}