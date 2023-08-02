import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom";
import { usePicPocket } from "../contexts/PicContext";
import { SinglePhoto } from ".";
import { ProgressSpinner } from "primereact/progressspinner";



export function SingleAlbum() {   
	const { id: albumId } = useParams();
	const { photos, getPhotos, loading } = usePicPocket();

	useLayoutEffect(() => {
		console.log('albumId', albumId);
		
		getPhotos(albumId);

	}, [albumId])

	return (
		<>
			{loading && <ProgressSpinner />}
			{!loading && 
				<div className="album-grid">
					{photos.map(photo => (
						<SinglePhoto key={photo.id} photo={photo} />
					))}
				</div> 
			}
		</>
	)
}
