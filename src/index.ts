// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');

import { searchFn } from './core'

export default function run(argv: string[], forTest = false) {
  const query = argv[0]
  const items = searchFn(query)
  const result = { items }
  if (forTest)
    return result
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, ''))
}
