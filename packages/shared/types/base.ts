export type ReturnVoid = void | Promise<void>
export type AnyFunc = (...args: any[]) => any
export type AnyObject = Record<string, any>
export type Merge<
  A extends Record<string, any>,
  B,
> = B extends Record<string, any> ? (Omit<A, keyof B> & B) : A
