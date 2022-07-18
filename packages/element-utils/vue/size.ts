import { componentSizeMap } from 'element-plus'

import type { ComponentSize } from 'element-plus'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
