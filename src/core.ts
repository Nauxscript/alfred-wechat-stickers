import type { AlfredSelection } from './index.d'
import keywordMap from './keywordMap'
// import stickersData from './stickersData.json'
import stickersData from './stickersData'
import type { Keys } from './stickersData'
const iconPath = './icons'
// const allStickersData = JSON.parse(JSON.stringify(stickersData.data)) as Sticker[]

export const parseData = (stickers: Keys[], iconPath = './icons'): AlfredSelection[] => {
  return stickers.map((key) => {
    const name = key.split('-')[0]
    return {
      title: name,
      subtitle: name,
      arg: `[${name}]`,
      icon: {
        path: `${iconPath}/${key}.png`,
      },
      mods: {
        ctrl: {
          arg: `[${name}]`,
          subtitle: 'Copy and paste',
        },
      },
    }
  })
}

// return {
//     }

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
