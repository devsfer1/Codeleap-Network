import axios from 'axios'

const baseURL = 'https://dev.codeleap.co.uk/careers/'

export const api = axios.create({ baseURL })
