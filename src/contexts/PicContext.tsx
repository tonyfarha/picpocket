import { createContext, ReactNode, useContext, useState } from 'react';
import { Photo, PicContextInterface } from '../interfaces';

export const PicContext = createContext({});

export default function PicContextProvider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState<boolean>(true);
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