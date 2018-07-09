/**
 * axios 配置
 */

import axios from 'axios'
import env from '~/env'

const http = axios.create({baseURL: env.apiURL}) // 配置基础请求网址
http.defaults.headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8'
export default http