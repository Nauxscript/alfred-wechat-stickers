import type { Sticker } from './index.d'
import stickersData from './stickersData.json'
const iconPath = './icons'
// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');

const parseData = (stickers: Sticker[]) => {
  return stickers.map(element => ({
    title: element.key,
    subtitle: element.key,
    arg: `[${element.key}]`,
    icon: {
      path: element.key ? `${iconPath}/${element.key}.png` : `${iconPath}/default.png`,
    },
    mods: {
      ctrl: {
        arg: `[${element.key}]`,
        subtitle: 'Copy and paste',
      },
    },
  }))
}

const searchFn = (query: string) => {
  if (!query)
    return parseData(stickersData.data)

  const matches = stickersData.data.filter(element => element.key.includes(query))
  return parseData(matches)
}

export default function run(argv: string[]) {
  const query = argv[0]
  const items = searchFn(query)
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ items }, null, '/t'))
}
