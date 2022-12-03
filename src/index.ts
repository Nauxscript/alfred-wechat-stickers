import type { Sticker } from './index.d'
import stickersData from './stickersData'
const iconPath = './icons'
// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');
const data = JSON.parse(JSON.stringify(stickersData)).data as Sticker[]

const parseData = (stickers: Sticker[]) => {
  return stickers.map(element => ({
    title: element.name,
    subtitle: element.keyword,
    arg: element.code,
    icon: {
      path: element.key ? `${iconPath}/${element.key}.png` : `${iconPath}/default.png`,
    },
    mods: {
      ctrl: {
        arg: element.code,
        subtitle: 'Copy and paste',
      },
    },
  }))
}

const searchFn = (query: string) => {
  if (!query)
    return parseData(data)

  const matches = data.filter(element => element.keyword.includes(query))
  return parseData(matches)
}

export default function run(argv: string[]) {
  const query = argv[0]
  const items = searchFn(query)
  // eslint-disable-next-line no-console
  console.log(JSON.stringify({ items }, null, '/t'))
}
