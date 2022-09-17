
let __unconfig_data;
let __unconfig_stub = function (data = {}) { __unconfig_data = data };
__unconfig_stub.default = (data = {}) => { __unconfig_data = data };
import { defineConfig, PluginOption } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJSX from '@vitejs/plugin-vue-jsx'
import { createSvgIconsPlugin } from 'vite-plugin-svg-icons'
import { windowEnvPlugin } from '@lib-env/app-utils'
import { getEnv } from '@lib-env/app-utils'
import path from 'path'
import { appRoot } from '@lib-env/path'
import legacy from '@vitejs/plugin-legacy'
import { viteExternalsPlugin } from 'vite-plugin-externals'
const unocss = __unconfig_stub;
import { presetAttributify } from 'unocss'
import { presetFlex, presetFont, presetGap } from 'unocss-preset-vunk'
import { chromeExtension } from 'vite-plugin-chrome-extension'
const srcRoot = path.resolve(appRoot, './src')

const sizeTheme = {
  xxxl: '1.4rem',
  xxl: '1.3rem',
  xl: '1.2rem',
  l: '1.1rem',
  m: '1rem',
  s: '.9rem',
  xs: '.8rem',
  xxs: '.7rem',
  xxxs: '.5rem',
}

// https://vitejs.dev/config/
const __unconfig_default =  defineConfig(({ mode }) => {
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
      windowEnvPlugin(),
      chromeExtension() as unknown as PluginOption[],
      unocss({
        presets: [
          presetAttributify(),
          presetFont({
            theme: sizeTheme,
          }),
          presetGap({
            theme: sizeTheme,
          }),
          presetFlex({
            prefix: 'sk',
          }),
        ],
      }),
      legacy({
        modernPolyfills: ['esnext.array.at'],
      }),
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

if (typeof __unconfig_default === "function") __unconfig_default(...[{"command":"serve","mode":"development"}]);export default __unconfig_data;