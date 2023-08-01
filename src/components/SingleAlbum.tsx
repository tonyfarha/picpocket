import { useEffect, useState } from "react"
import { Photo } from "../interfaces";
import { useParams } from "react-router-dom";
import { Image } from 'primereact/image';



export default function SingleAlbum() {   
	const [photos, setPhotos] = useState<Photo[]>([]);
	const { id: albumId } = useParams();

	useEffect(() => {

		getPhotos();

		async function getPhotos() {
			const res = await fetch(`${import.meta.env.VITE_API_PHOTOS_URI}?albumId=${albumId}`);
			const json = await res.json();
			setPhotos(json as Photo[]);			
		}

	}, [albumId])

	return (
		<>
			<div className="album-grid">
				{photos.map((photo, index) => (
					<div key={index} className="card flex justify-content-center">
						<Image src={photo.thumbnailUrl} zoomSrc={photo.url} alt={photo.title} width="150" preview />
					</div>
				))}
			</div>
		</>
	)
}
