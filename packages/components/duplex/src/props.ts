import { PropType } from 'vue'

type WithType = 'one'|'two'|'both'|'none'

const props = {
  withFlex: {
    type: String as PropType<WithType>,
    default: 'two',
  },

  withOverflow: {
    type: String as PropType<WithType>,
    default: 'two',
  },

  overflow: {
    type: String,
    default: 'hidden',
  },
  
  flex: {
    type: String,
    default: '1',
  },
}
export default props
