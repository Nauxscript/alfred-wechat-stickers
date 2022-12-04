import type { AlfredSelection } from './index.d'
import keywordMap from './keywordMap'
// import stickersData from './stickersData.json'
import stickersData from './stickersData'
import type { Keys } from './stickersData'
const iconPath = './icons'
// const allStickersData = JSON.parse(JSON.stringify(stickersData.data)) as Sticker[]

export const parseData = (stickers: Keys[], iconPath = './icons'): AlfredSelection[] => {
  return stickers.map(key => ({
    title: key,
    subtitle: key,
    arg: `[${key}]`,
    icon: {
      path: `${iconPath}/${key}.png`,
    },
    mods: {
      ctrl: {
        arg: `[${key}]`,
        subtitle: 'Copy and paste',
      },
    },
  }))
}

export const searchWithKeyword = (query: string) => {
  return Object.keys(keywordMap).reduce((prev, curr) => {
    if (curr.includes(query))
      return [...prev, ...keywordMap[curr]]
    return prev
  }, [] as Keys[])
}

export const searchFn = (query: string) => {
  if (!query)
    return parseData(stickersData, iconPath)
  const matches = stickersData.filter(key => key.includes(query))
  return parseData(matches, iconPath)
}
