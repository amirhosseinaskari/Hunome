const SONGS_API = 'https://itunes.apple.com/us/rss/topsongs/limit=30/json'
const ALUBMS_API = 'https://itunes.apple.com/us/rss/topalbums/limit=30/json'

export const fetchAPI = async (url: string) => {
  const result = await fetch(url)
  return result.json()
}

export const requests = {
  getSongs: () => fetchAPI(SONGS_API),
  getAlbums: () => fetchAPI(ALUBMS_API),
}
