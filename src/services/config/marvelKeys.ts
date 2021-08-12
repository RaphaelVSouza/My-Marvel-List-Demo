import CryptoJS from 'crypto-js'

import { MARVEL_PUBLIC_KEY, MARVEL_PRIVATE_KEY } from 'utils/constants'

const ts = new Date().getTime()
const apikey = MARVEL_PUBLIC_KEY
const privateKey = MARVEL_PRIVATE_KEY

if (!apikey || !privateKey) throw Error('Missing marvel keys')

const hash = CryptoJS.MD5(ts + privateKey + apikey).toString()

const marvelKeys = {
  ts: ts.toString(),
  apikey,
  hash,
}

export default marvelKeys
