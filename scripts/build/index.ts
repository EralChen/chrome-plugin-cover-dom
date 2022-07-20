import { series } from 'gulp'
import { run, taskWithName } from '@lib-env/shared'
import clearDist from './clear-dist'
import toDistType from './to-dist-type'
export default series(
  // 并行打包 packages 下的内容
  clearDist,
  taskWithName('buildPackages', async () => run('pnpm run --filter "./packages/**" --parallel build')),
  toDistType,
)
