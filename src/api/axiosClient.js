import axios from 'axios'

const instance = axios.create({
  baseURL: "https://api.jikan.moe/v4",
  timeout: 1000,
})

export const getMangaFullById = async (path, options = {}) => {
  try {
    const res = await instance.get(`manga/${path}`, {
      params: {
        ...options
      }
    })
    return res
  } catch(err) {
    return Promise.reject(new Error('getMangaById failed'))
  }
}

export const searchManga = async (mangaName) => {
  if (!mangaName) return Promise.resolve()
  try {
    const res = await instance.get('manga', {
      params: {
        q: mangaName,
      }
    })
    return res
  } catch (error) {
    return Promise.reject(new Error('Search input invalid'))
  }
}

export default instance
