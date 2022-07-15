
export function isObject (object: any): boolean {
  return typeof object === 'object' && object !== null
}
export function isPlainObject (obj: any): boolean {
  return Object.prototype.toString.call(obj) === '[object Object]' // 检测数据是否为对象Object
}

export function isEmpty (obj: object): boolean {
  return isObject(obj) && Object.keys(obj).length === 0
}

export function isNotEmpty (obj: object): boolean {
  return isObject(obj) && Object.keys(obj).length > 0
}
