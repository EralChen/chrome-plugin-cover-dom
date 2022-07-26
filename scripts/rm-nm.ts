import { series } from 'gulp'
import { run, taskWithName } from '@lib-env/shared'
import { workRoot } from '@lib-env/path'

export default series([
  taskWithName('remove node-modules', async () => {
    
    run(
      `find . -name "node_modules" -type d -exec rm -rf '{}' +`,
      workRoot,
    )
    
  }),
  
])
