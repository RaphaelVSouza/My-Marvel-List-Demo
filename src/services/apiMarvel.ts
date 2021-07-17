import axios from 'axios'

export const apiMarvel = axios.create({
  baseURL: 'http://gateway.marvel.com/v1/public',
})
