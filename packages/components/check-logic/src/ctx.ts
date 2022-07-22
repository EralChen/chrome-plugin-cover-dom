
export const props = {
  modelValue: {
    type: Boolean,
    required: false,
  },
  name: {
    type: [String, Number, Boolean],
    required: true,
    default: true,
  },
  injectKey: {
    type: String,
    required: false,
  },
  eventType: {
    type: String,
    default: 'click',
  },
}

export const emits = {
  'update:modelValue': null,
  'active': null,
  'inactive': null,
}
