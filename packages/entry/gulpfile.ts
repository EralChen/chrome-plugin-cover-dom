import {series, parallel} from 'gulp'
import path from 'path'
import fs from 'fs/promises'
import { taskWithName } from '@lib-env/shared'
import { fixPath, genTypes, rollupFile } from '@lib-env/build-utils'
import { distDir, pkgEntryDir } from '@lib-env/path'

export default series(
  taskWithName('bundleFullEntry', async ()=> {
    rollupFile({
      inputFile: path.resolve(pkgEntryDir, './main.ts'),
      outputFile: path.resolve(distDir, './index.esm.js'),
      format: 'esm',
    })
  }),
  parallel(
    taskWithName('genEntryTypes', async () => { // 生成入口 .d.ts
      genTypes({
        filesRoot: path.resolve(__dirname),
      })
    }),

  ),

)