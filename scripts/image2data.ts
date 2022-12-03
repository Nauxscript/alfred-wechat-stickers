// const fs = require('fs')
// const path = require('path')

import fs from 'fs'
import path from 'path'

const files = fs.readdirSync('./icons')

const iconFiles = files.filter((icon) => {
  return path.extname(icon).toLowerCase() === '.png'
}).map(icon => ({
  key: icon,
}))

const fileString2jsonString = (fileObj: any) => {
  const obj = { data: fileObj }
  return JSON.stringify(obj).replace(/.png/g, '')
}

fs.writeFile('./src/stickersData.json', fileString2jsonString(iconFiles), (err) => {
  console.log(err)
})
