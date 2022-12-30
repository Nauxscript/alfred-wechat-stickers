import https from 'node:https'
import fs from 'fs'
import download from 'download'
import AdmZip from 'adm-zip'

let stickerAssetVersion = ''

const unzipFile = (src: string) => {
  const zip = new AdmZip(src)
  zip.extractAllTo('./')
  console.log('Updated Stickers, Version is ', stickerAssetVersion)
}

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
    const repoInfo = JSON.parse(datas) as { tag_name: string }
    stickerAssetVersion = repoInfo.tag_name
    const assetUrl = `https://github.com/Nauxscript/wechat-stickers-data/releases/download/${stickerAssetVersion}/icons.zip`
    console.log('Stickers Assets Url', assetUrl)
    const data = await download(assetUrl)
    if (fs.existsSync('./icons.zip'))
      fs.unlinkSync('./icons.zip')
    await fs.promises.writeFile('./icons.zip', data)
    unzipFile('./icons.zip')
  })
  console.log('Response StatusCode:', response.statusCode)
})

req.on('error', (error) => {
  console.log(`Error: ${error.message}`)
})

req.end()
