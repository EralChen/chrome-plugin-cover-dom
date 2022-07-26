export interface Media<V = number|string> {
  label: string,
  value: V,
  [s: string]: any
}
