export interface IAlbumResponse {
  'im:image': { label: string }[]
  title: { label: string }
  'im:price': { label: string }
  'im:artist': { label: string }
  id: {
    attributes: {
      'im:id': string
    }
  }
}

export interface IAlbum {
  image: string
  title: string
  name: string
  price: string
  id: string
}
