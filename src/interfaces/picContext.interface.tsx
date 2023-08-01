import { MouseEventHandler } from "react";
import { Photo } from ".";

export interface PicContextInterface {
    like: MouseEventHandler,
    dislike: MouseEventHandler,
    photos: Photo[],
    loading: boolean, 
    getPhotos: (albumId: string | undefined) => Promise<void>
}