import path from 'path'
import fs from 'fs'
import MarkdownIt from 'markdown-it'
import mdContainer from 'markdown-it-container'
import { highlight } from '../utils/highlight'
import type Token from 'markdown-it/lib/token'
import type Renderer from 'markdown-it/lib/renderer'
import { docRoot } from '@lib-env/path'
import { fixPath } from '@lib-env/build-utils'

const localMd = MarkdownIt()

interface ContainerOpts {
  marker?: string | undefined
  validate?(params: string): boolean
  render?(
    tokens: Token[],
    index: number,
    options: any,
    env: any,
    self: Renderer
  ): string
}

export const mdPlugin = (md: MarkdownIt) => {
  md.use(mdContainer, 'demo', {
    validate (params) {
      return !!params.trim().match(/^demo\s*(.*)$/)
    },

    render (tokens, idx) {
      const m = tokens[idx].info.trim().match(/^demo\s*(.*)$/)
      if (tokens[idx].nesting === 1 /* means the tag is opening */) {
        const description = m && m.length > 1 ? m[1] : ''
        const sourceFileToken = tokens[idx + 2]
        let source = ''
        const sourceFile = sourceFileToken.children?.[0].content ?? ''

        if (sourceFileToken.type === 'inline') {
          source = fixPath(
            fs.readFileSync(
              path.resolve(docRoot, 'examples', `${sourceFile}.vue`),
              'utf-8',
            ),
          ) 
        }

        // 在 container_demo_close 之前， 向下找到 blockquote_open 
        let tabsTokenIndex = idx + 2
        while (
          !(tokens[tabsTokenIndex].type === 'blockquote_open'
            || tokens[tabsTokenIndex].type === 'container_demo_close')
        ) {
          tabsTokenIndex++
        }

        let tabsToken = tokens[tabsTokenIndex]
        const tabs: string[] = []
        const tabsSource: Record<string, string> = {}
        if (tabsToken?.type === 'blockquote_open' && tabsToken.nesting === 1) {
          tabsToken = tokens[tabsTokenIndex + 4]

          if (tabsToken.type === 'inline') {
            const tabsRE = /^tabs\s*\[(.+)\]/
            const m = tabsToken.content.match(tabsRE)
            const content = m && m.length > 1 ? m[1] : ''

            content && content.split(',').forEach(item => {
              item = item.trim()
              tabs.push(item)
              tabsSource[item] = highlight(
                fixPath(
                  fs.readFileSync(
                    path.resolve(docRoot, 'examples', `${item}.vue`),
                    'utf-8',
                  ),
                ),
                'vue',
              )
            })

          }

        }

      
        if (!source) throw new Error(`Incorrect source file: ${sourceFile}`)
        return `<Demo 
        :demos="demos" 
          source="${encodeURIComponent(
          highlight(source, 'vue'),
        )}" 
          path="${sourceFile}" 
          raw-source="${encodeURIComponent(
          source,
        )}"
        rawTabsSource="${encodeURIComponent(
          JSON.stringify(tabsSource),
        )}"
          :tabs='${JSON.stringify(tabs)}'
          description="${encodeURIComponent(localMd.render(description))}"
        >`

      } else {
        return '</Demo>'
      }
    },
  } as ContainerOpts)
}
