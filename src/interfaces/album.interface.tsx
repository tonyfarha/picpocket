export interface Album {
    id: number;
    title: string;
    userId: number;
}

export interface GroupedAlbums {
    [key: string]: Album[];
}