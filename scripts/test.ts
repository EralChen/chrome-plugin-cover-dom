import { workRoot } from '@lib-env/path'
import { taskWithName } from '@lib-env/shared'
import consola from 'consola'
import { series } from 'gulp'

export default series([
  taskWithName('test1', async () => {
    consola.info(workRoot)
  }),
])
