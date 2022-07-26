import type { RestFetchRequest } from '@vunk/core'
import { RestFetch } from '@vunk-core/shared/utils-fetch'

const restFetch  = new RestFetch({
  baseURL: '/data',
})
export const request = <T>(...args: Parameters<RestFetchRequest>) => {
  return restFetch.request(...args) as Promise<T>
}
