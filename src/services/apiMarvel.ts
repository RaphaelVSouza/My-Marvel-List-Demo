import axios from 'axios'

export const apiMarvel = axios.create({
  baseURL: 'https://gateway.marvel.com/v1/public',
})
