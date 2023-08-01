import { useEffect } from "react"
import { useParams } from "react-router-dom";
import { usePicPocket } from "../contexts/PicContext";
import { SinglePhoto } from ".";



export function SingleAlbum() {   
	const { id: albumId } = useParams();
	const { photos, getPhotos, loading } = usePicPocket();

	useEffect(() => {
		console.log('albumId', albumId);
		
		getPhotos(albumId);

	}, [albumId])

	return (
		<>
			{loading && <h1>Loading...</h1>}
			{!loading && 
				<div className="album-grid">
					{photos.map((photo, index) => (
						<SinglePhoto key={index} photo={photo} />
					))}
				</div> 
			}
		</>
	)
}
