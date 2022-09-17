import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { getEnv } from '@lib-env/app-utils'
import path from 'path'
import { appRoot } from '@lib-env/path'
import { viteExternalsPlugin } from 'vite-plugin-externals'
import { chromeExtension } from 'vite-plugin-chrome-extension'
const srcRoot = path.resolve(appRoot, './src')

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = getEnv(mode)
  return {
    base: env.VITE_BASE_URL + '/',
    
    build: {
      
      outDir: path.resolve(appRoot,'./dist' + env.VITE_BASE_URL),
      rollupOptions: {
        input: 'src/manifest.json',
      },
    },
    server: {
      host: '0.0.0.0',
      
    },
    resolve: {
      alias: {
        '_v': path.resolve(srcRoot,'./views'),
        '_c': path.resolve(srcRoot,'./components'),
        '@': path.resolve(srcRoot,'.'),
      },
    },

    plugins: [
      vue(),
      vueJSX(),
      chromeExtension() as unknown as PluginOption[],

      viteExternalsPlugin(),
      createSvgIconsPlugin({
        // Specify the icon folder to be cached
        iconDirs: [path.resolve(srcRoot,'./icons/svg')],
        // Specify symbolId format
        symbolId: 'icon-[dir]-[name]',
      }),

    ],

    css: {
      postcss: {
        plugins: [
          {
            postcssPlugin: 'internal:charset-removal',
            AtRule: {
              charset: (atRule) => {
                if (atRule.name === 'charset') {
                  atRule.remove()
                }
              },
            },
          },
        ],
      },
    },

  }

})
