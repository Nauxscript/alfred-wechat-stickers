export const searchWithKeyword = (query: string) => {
  Object.keys(keywordMap.data as Record<string, string[]>).reduce((prev, curr) => {
    if (curr.includes(query))
      return [...prev, ...keywordMap.data[curr as keyof typeof keywordMap.data]]
    return prev
  }, [] as string[])
}

export const searchFn = (query: string) => {
  if (!query)
    return parseData(allStickersData, iconPath)
  const matches = allStickersData.filter(element => element.key.includes(query))
  return parseData(matches, iconPath)
}
