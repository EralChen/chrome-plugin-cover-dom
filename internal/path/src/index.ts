import path from 'path'

export const workRoot = path.resolve(__dirname, '../../../')
export const packagesDir = path.resolve(workRoot, './packages')
export const pkgEntryDir = path.resolve(packagesDir, './entry')

export const pkgEntryFile = path.resolve(pkgEntryDir, './main.ts')

export const distDir = path.resolve(workRoot, './dist')
export const distTypesDir = path.resolve(distDir, './types')


// Docs
export const docsDirName = 'docs'
export const docRoot = path.resolve(workRoot, docsDirName)
export const vpRoot = path.resolve(docRoot, '.vitepress')
