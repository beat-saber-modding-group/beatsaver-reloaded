declare interface IBeatmap {
  _id: string
  key: string
  name: string
  description: string

  uploader: {
    _id: string
    username: string
  }

  uploaded: Date | string

  metadata: {
    songName: string
    songSubName: string
    songAuthorName: string
    levelAuthorName: string

    bpm: number

    difficulties: {
      easy: boolean
      normal: boolean
      hard: boolean
      expert: boolean
      expertPlus: boolean
    }

    characteristics: IBeatmapCharacteristic[]
  }

  stats: {
    downloads: number
    plays: number

    upVotes: number
    downVotes: number

    rating: number
    heat: number
  }

  downloadURL: string
  coverURL: string

  hash: string
}

declare interface IBeatmapCharacteristic {
  name: string
  difficulties: {
    easy: IDifficulty | null
    normal: IDifficulty | null
    hard: IDifficulty | null
    expert: IDifficulty | null
    expertPlus: IDifficulty | null
  }
}

declare interface IDifficulty {
  duration: number
  length: number
  bombs: number
  notes: number
  obstacles: number
  njs: number
}

declare type IBeatmapResponse = IResponse<IBeatmap>
