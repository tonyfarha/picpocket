import { Photo } from ".";

export interface PicContextInterface {
    like: (photo: Photo) => void,
    dislike: (photoId: number) => void,
    photos: Photo[],
    loading: boolean, 
    getPhotos: (albumId: string | undefined) => Promise<void>,
    likes: Photo[]
}