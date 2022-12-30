import https from 'node:https'
import fs from 'fs'
import download from 'download'

const req = https.request({
  host: 'api.github.com',
  path: '/repos/Nauxscript/wechat-stickers-data/releases/latest',
  method: 'GET',
  headers: {
    'User-Agent': 'Nauxscript',
    'Content-Type': 'application/json; charset=utf-8',
  },
  rejectUnauthorized: false,
}, (response) => {
  let datas = ''
  // called when a data chunk is received.
  response.on('data', (chunk) => {
    datas += chunk
  })
  // called when the complete response is received.
  response.on('end', async () => {
    console.log('done')
    const repoInfo = JSON.parse(datas) as { tag_name: string }
    const assetUrl = `https://github.com/Nauxscript/wechat-stickers-data/releases/download/${repoInfo.tag_name}/icons.zip`
    console.log(assetUrl)
    const data = await download(assetUrl)
    await fs.promises.writeFile('./icons.zip', data)
  })
  console.log('Response statusCode:', response.statusCode)
})

req.on('error', (error) => {
  console.log(`Error: ${error.message}`)
})

req.end()
