import { series } from 'gulp'
import { taskWithName } from '@lib-env/shared'
import fsp from 'fs/promises'
import fs from 'fs'
import { distDir, distTypesDir } from '@lib-env/path'
import { fixDtsPaths } from '@lib-env/build-utils'
import path from 'path'

export default series(
  // 并行打包 packages 下的内容
  taskWithName('fix dts path in distTypesDir', async () => {
    await fixDtsPaths({
      filesRoot: distTypesDir,
    })
  }),

  taskWithName('to-dist-type', async () => {
    const coreDirOrigin = await fsp.readdir(distDir, { withFileTypes: true })

    const coreDirNames = coreDirOrigin.filter(item => {
      return item.isDirectory() 
      && 
      path.resolve(distDir, item.name) !== distTypesDir
    }).map(item => item.name)

    const cpToCoreDir = async (dir: string) => {
      const files = await fsp.readdir(dir, { withFileTypes: true })
      await Promise.all(
        files.map(async item => {
          if (item.isDirectory() && coreDirNames.includes(item.name)) {
            await fsp.cp(path.resolve(dir, item.name), path.resolve(distDir, item.name), {
              recursive: true,
            })
          }
        }),
      )
    }

    await cpToCoreDir(distTypesDir)
    /* 有可能 type打包目录在 packages */
    const distTypesPkgsDir = path.resolve(distTypesDir, 'packages')
    if (fs.existsSync(distTypesPkgsDir)) {
      await cpToCoreDir(distTypesPkgsDir)
    }
    
  }),

)