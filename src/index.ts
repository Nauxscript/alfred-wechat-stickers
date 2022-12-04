// const data = await alfy.fetch('https://jsonplaceholder.typicode.com/posts');

import { searchFn } from './core'

export default function run(argv: Array<string | boolean >) {
  const query = argv[0]
  const items = searchFn(query as string)
  const result = { items }
  if (argv[1]) {
    // eslint-disable-next-line no-console
    return result
  }
  // eslint-disable-next-line no-console
  console.log(JSON.stringify(result, null, ''))
}
