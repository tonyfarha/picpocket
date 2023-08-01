import { createContext, ReactNode, useContext, useState } from 'react';
import { Photo, PicContextInterface } from '../interfaces';

export const PicContext = createContext({});

export default function PicContextPrivider({ children }: { children: ReactNode }) {
	const [loading, setLoading] = useState<boolean>(true);
	const [photos, setPhotos] = useState<Photo[]>([]);


	const like = () => {
		console.log('like');
	}

	const dislike = () => {
		console.log('dislike');
	}

	const getPhotos = async (albumId: string | undefined) => {		
		const res = await fetch(`${import.meta.env.VITE_API_PHOTOS_URI}?albumId=${albumId}`);
		const json = await res.json();
		setPhotos(json as Photo[]);	
		setLoading(false);		
	}

	const contextData: PicContextInterface = {
		like,
		dislike,
		photos,
		loading,
		getPhotos
	}

  return (
		<PicContext.Provider value={contextData}>
			{ children }
		</PicContext.Provider>
  )
}

export const usePicPocket: () => PicContextInterface = () => useContext(PicContext) as PicContextInterface