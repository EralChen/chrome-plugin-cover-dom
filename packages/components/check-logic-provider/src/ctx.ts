import { PropType } from 'vue'
import { checkLogicProviderKey } from './symbol'
export const props = {
  provideKey: {
    type: [String, Symbol],
    default: checkLogicProviderKey,
  },

  modelValue: {
    type: [String, Number, Boolean, Array, Object] as PropType<any>,
    required: false,
  },
}

export const emits = {
  'update:modelValue': null,
}
