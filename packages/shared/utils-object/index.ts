
export function isObject (object: any): boolean {
  return typeof object === 'object' && object !== null
}
export function isPlainObject (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]' // 检测数据是否为对象Object
}

export function isEmptyObject (obj: object): boolean {
  if (!isObject(obj)) {
    throw new TypeError('isEmpty() got an argment which is not object')
  }
  return Object.keys(obj).length === 0
}

export function isNotEmptyObject (obj: object): boolean {
  if (!isObject(obj)) {
    throw new TypeError('isNotEmpty() got an argment which is not object')
  }
  return Object.keys(obj).length > 0
}
