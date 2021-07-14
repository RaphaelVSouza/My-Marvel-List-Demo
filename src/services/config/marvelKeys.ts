import CryptoJS from 'crypto-js'

const ts = new Date().getTime();
const apikey = process.env.REACT_APP_MARVEL_PUBLIC_KEY as string
const privateKey = process.env.REACT_APP_MARVEL_PRIVATE_KEY as string

if (!apikey || !privateKey) throw Error('Missing marvel keys');

const hash = CryptoJS.MD5(ts + privateKey + apikey).toString()

const marvelKeys = {
    ts: ts.toString(),
    apikey,
    hash
};

export default marvelKeys