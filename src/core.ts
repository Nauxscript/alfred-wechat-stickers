import '@jxa/global-type'
import type { AlfredSelection } from './index.d'
import keywordMap from './keywordMap'
import stickersData from './stickersData'
import type { Keys } from './stickersData'
const iconPath = './icons'
const app = Application.currentApplication()
app.includeStandardAdditions = true
const parentPath = app.doShellScript('pwd')

export const parseData = (stickers: Keys[], iconPath = './icons'): AlfredSelection[] => {
  return stickers.map((key) => {
    const name = key.split('-')[0]
    return {
      uid: name,
      title: name,
      subtitle: `粘贴“[${name}]”到当前应用中`,
      arg: `[${name}]`,
      icon: {
        path: `${iconPath}/${key}.png`,
      },
      mods: {
        ctrl: {
          arg: `[${name}]`,
          subtitle: `复制“[${name}]”到剪切板中`,
        },
        alt: {
          arg: `${parentPath}/icons/${key}.png`,
          subtitle: `复制“[${name}]”的表情图片到剪切板中`,
        },
      },
    }
  })
}

export const searchWithKeyword = (query: string) => {
  const keywordRes = Object.keys(keywordMap).reduce((prev, curr) => {
    if (curr.includes(query))
      return [...prev, ...keywordMap[curr]]
    return prev
  }, [] as Keys[])

  const keyRes = stickersData.filter(key => key.includes(query))
  const result = [...new Set([...keywordRes, ...keyRes])] as Keys[]
  return result
}

export const searchFn = (query: string) => {
  if (!query)
    return parseData(stickersData, iconPath)
  const matches = searchWithKeyword(query)
  return parseData(matches, iconPath)
}
