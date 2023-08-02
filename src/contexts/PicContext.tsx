import { createContext, ReactNode, useContext, useState } from 'react';
import { Album, GroupedAlbums, Photo, PicContextInterface } from '../interfaces';

export const PicContext = createContext({});

export default function PicContextProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState<boolean>(true);
	const [groupedAlbums, setGroupedAlbums] = useState<GroupedAlbums>({});
	const [photos, setPhotos] = useState<Photo[]>([]);
	const [likes, setLikes] = useState<Photo[]>(JSON.parse(localStorage.getItem('PicPocketLikes') as string) || []);


	const like = (photo: Photo) => {
		if(likes.some(pic => pic.id == photo.id)) return
		setLikes(prev => [...prev, photo])	
		localStorage.setItem('PicPocketLikes', JSON.stringify([...likes, photo]))	
	}

	const dislike = (photoId: number) => {
		setLikes(prev => prev.filter(pic => pic.id != photoId))	
		localStorage.setItem('PicPocketLikes', JSON.stringify([...likes.filter(pic => pic.id != photoId)]))
	}

	const getAlbums = async () => {
		setLoading(true);
		const res = await fetch('https://jsonplaceholder.typicode.com/albums');
		const json = await res.json();
		const groupedAlbumsByUserId: GroupedAlbums = json.reduce((acc: GroupedAlbums, curr: Album) => {				
			if(acc[curr.userId]) {
				acc[curr.userId].push(curr)
			}else {
				acc[curr.userId] = [curr]
			}
			return acc;
		}, {})
		setGroupedAlbums(groupedAlbumsByUserId);
		setLoading(false);			
	}

	const getPhotos = async (albumId: string | undefined) => {	
		setLoading(true);	
		const res = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
		const json = await res.json();
		setPhotos(json as Photo[]);	
		setLoading(false);		
	}

	const contextData: PicContextInterface = {
		like,
		dislike,
		photos,
		loading,
		getAlbums,
		groupedAlbums,
		getPhotos,
		likes
	}

  return (
		<PicContext.Provider value={contextData}>
			{ children }
		</PicContext.Provider>
  )
}

export const usePicPocket: () => PicContextInterface = () => useContext(PicContext) as PicContextInterface