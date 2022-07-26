import { request } from './request'

export const getTestJson = () => {
  return request<{ // 返回类型
    name: string
  }>({
    method: 'GET',
    url: '/test.json',
  }).then(res => {
    // 处理数据
    return res.name
  })
}
