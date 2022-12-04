// const fs = require('fs')
// const path = require('path')

import fs from 'fs'
import path from 'path'

const files = fs.readdirSync('./icons')

const iconFiles = files.filter((icon) => {
  return path.extname(icon).toLowerCase() === '.png'
})

const string2Export = (head: string, tail: string) => {
  return `${head} = ${tail}`
}

// const fileString2jsonString = (fileObj: any) => {
//   const obj = { data: fileObj }
//   return JSON.stringify(obj).replace(/.png/g, '')
// }

const string2typeExport = (name: string, str: string) => {
  return string2Export(`export type ${name}`, `${str}`)
}

const string2defaultExport = (valueStr: string, typeStr: string) => {
  return `export default ${valueStr} as ${typeStr}`
}

const assembler = (keys: string[]) => {
  const typeValueStr = keys.map(item => `'${item}'`).join(' | ')
  const keyValueStr = JSON.stringify(keys)
  const typeStr = string2typeExport('Keys', typeValueStr)
  const valueStr = string2defaultExport(keyValueStr, 'Keys[]')
  return `${typeStr}\r${valueStr}\r`.replace(/.png/g, '').replace(/\"/g, '\'').replace(/\,/g, ', ')
}

fs.writeFile('./src/stickersData.ts', assembler(iconFiles), (err) => {
  console.log(err)
})
