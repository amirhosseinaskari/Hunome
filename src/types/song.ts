export interface ISongResponse {
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

export interface ISong {
  image: string
  title: string
  name: string
  price: string
  id: string
}
