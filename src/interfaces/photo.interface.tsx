export interface Photo {
    id: number;
    title: string;
    albumId: number;
    thumbnailUrl: string;
    url: string;
    isLiked?: boolean;
}