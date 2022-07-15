import { series } from 'gulp'
import { run, taskWithName } from '@lib-env/shared'
export default series(
  // 并行打包 packages 下的内容
  taskWithName('buildPackages', async () => run('pnpm run --filter "./packages/**" --parallel build')),

)