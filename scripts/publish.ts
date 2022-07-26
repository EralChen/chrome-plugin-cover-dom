import {series} from 'gulp'
import fs from 'fs/promises'
import path from 'path'
import { entryPackage, distDir } from '@lib-env/path'
import { run, taskWithName } from '@lib-env/shared'

export default series(
  taskWithName('update:vision', async () => {
    const file = await fs.readFile(entryPackage)
    const fileObj:{ version: string; module: string } = JSON.parse(file.toString())
    
    // 默认小版本+1
    const versionList = fileObj.version.split('.')
    const sVersion = versionList.at(-1)
    if (sVersion) {
      versionList[versionList.length - 1] = +sVersion + 1 + ''
    }
    fileObj.version = versionList.join('.')

    // 将入口改为 index.esm.js
    fileObj.module = 'index.esm.js'
        
    const nFileStr = JSON.stringify(fileObj, null, 2)

    
    await fs.writeFile(entryPackage, nFileStr)
  }),
  taskWithName('destPkg', async () => {
    fs.cp(
      entryPackage,
      path.resolve(distDir, './package.json'),
    )
  }),
  taskWithName('publish', async () => {
    run(
      'npm publish --tag alpha --registry https://registry.npmjs.org --access public',
      distDir,
    )
  }),
)
