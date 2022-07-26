import { LIB_ENTRY_FLIENAME } from '@lib-env/build-constants'
import { distDir, workRoot } from '@lib-env/path'
import { taskWithName } from '@lib-env/shared'
import consola from 'consola'
import { series } from 'gulp'
import path from 'path'

export default series([
  taskWithName('test1', async () => {
    consola.info(workRoot)

  }),
  
])
