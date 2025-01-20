
export interface IResultDogImage {
    success: boolean
    message: string
}

export interface DocApiService {
    getImage(): Promise<IResultDogImage>
}