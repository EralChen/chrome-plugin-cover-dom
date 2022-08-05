import { parallel, series } from 'gulp'
import glob, { sync } from 'fast-glob'
import path from 'path'

import { distDir } from '@lib-env/path'
import { rollupComponents, rollupFile  } from '@lib-env/build-utils'
import { genTypes } from '@lib-env/build-utils'
import { filePathIgnore, libExternal } from '@lib-env/build-constants'
import { taskWithName } from '@lib-env/shared'

// sync 快速找到所有目录
const files = sync('*', {
  cwd: path.resolve(__dirname, './'),
  onlyDirectories: true,
  ignore: ['node_modules'],
})

export default  series(
  parallel(

    taskWithName('bundleComponents', 
      () => rollupComponents({
        files,
        entry: (file)=> path.resolve(__dirname, file, './index.ts'),
        outputFile: (file) => path.resolve(distDir, `./components/${file}/index.js`),
      }),
    ),

  
    taskWithName('bundleComponentsSrcTs', async () => {
    
      const getOutputFile = (filePath: string) => path.resolve(
        distDir, 
        `./components/${path.relative(
          path.resolve(__dirname, './'), filePath,
        )
          .replace('.ts', '.js')}`,
      )
    
      const filePaths = await glob('**/src/**/*.ts', {
        cwd: path.resolve(__dirname, './'),
        onlyFiles: true,
        absolute: true,
        ignore: [...filePathIgnore],
      })

      filePaths.forEach(item => {
        rollupFile({
          inputFile: item,
          outputFile: getOutputFile(item),
          format: 'esm',
          external: libExternal,
        })
      })

    }),


    taskWithName('genTypes', () => genTypes({
      filesRoot: path.resolve(__dirname, './'),
    })),
  
  ),

)

