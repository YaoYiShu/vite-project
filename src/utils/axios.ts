import axios from 'axios'
import { ElMessage, ElLoading } from 'element-plus'

// 创建axios实例
const service = axios.create({
  baseURL: import.meta.env.WEB_BASE_URL,
  timeout: 14000,
  headers: { 'Content-Type': 'application/json;charset=utf-8' }
})

let loading: any
let requestCount: number = 0

// 显示加载
const showLoading = () => {
  if (requestCount === 0 && !loading) {
    loading = ElLoading.service({
      lock: true,
      text: 'Loading',
      background: 'rgba(0, 0, 0, 0.7)'
    })
  }
  requestCount++
}

// 关闭加载
const hideLoading = () => {
  requestCount--
  if (loading && requestCount == 0) {
    loading.close()
  }
}

// 请求拦截
service.interceptors.request.use(
  (response) => {
    showLoading()
    return response
  },
  (error) => {
    return Promise.reject(error)
  }
)

// 响应请求
service.interceptors.response.use(
  (response: any) => {
    hideLoading()
    console.log(response)
    return response
  },
  (error) => {
    ElMessage.error(`Code: ${error}, Message: ${error}`)
    return Promise.reject(error)
  }
)

export default service
