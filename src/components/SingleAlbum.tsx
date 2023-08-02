import { useLayoutEffect } from "react"
import { useParams } from "react-router-dom";
import { usePicPocket } from "../contexts/PicContext";
import { SinglePhoto } from ".";
import { ProgressSpinner } from "primereact/progressspinner";



export function SingleAlbum() {   
	const { id: albumId } = useParams();
	const { photos, getPhotos, loading } = usePicPocket();

	useLayoutEffect(() => {
		
		getPhotos(albumId);

	}, [albumId])

	return (
		<>
			{loading && <ProgressSpinner />}
			{!loading &&
				<>
					<h2 style={{ textAlign: 'center', margin: '50px 0' }}><i className="pi pi-images" style={{ fontSize: '1.5rem' }}></i> Album {albumId}</h2>
					<div className="album-grid">
						{photos.map(photo => (
							<SinglePhoto key={photo.id} photo={photo} />
						))}
					</div>
				</>
			}
		</>
	)
}
