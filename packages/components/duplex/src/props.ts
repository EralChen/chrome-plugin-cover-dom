import { PropType } from 'vue'

type WithType = 'one'|'two'|'both'|'none'

const props = {
  withFlex: {
    type: String as PropType<WithType>,
    default: 'two',
  },

  withOverflow: {
    type: String as PropType<WithType>,
    default: 'both',
  },

  overflow: {
    type: String,
    default: 'hidden',
  },
  
  flex: {
    type: String,
    default: '1',
  },

  direction: {
    type: String,
    default: 'column',
  },

  gap: {
    type: String,
    required: false,
  },
}
export default props
