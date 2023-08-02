import { useLayoutEffect } from "react"
import { Album } from "../interfaces";
import { Link } from "react-router-dom";
import { Divider } from 'primereact/divider';
import { usePicPocket } from "../contexts/PicContext";
import { ProgressSpinner } from "primereact/progressspinner";
        

export function Albums() {   

	const { getAlbums, groupedAlbums, loading } = usePicPocket();

	useLayoutEffect(() => {

		getAlbums();

	}, [])



	return (
		<>
			{loading && <ProgressSpinner />}
			{!loading &&
				<>
					<h2 style={{textAlign: 'center', margin: '50px 0'}}><i className="pi pi-images" style={{ fontSize: '1.5rem' }}></i> Albums</h2>
					{groupedAlbums && Object.keys(groupedAlbums).map((groupedAlbumNum: string, index: number) => (
						<div className="grouped-albums" key={index}>
							<h3><i className="pi pi-user" style={{ fontSize: '1.2rem' }}></i> By user {groupedAlbumNum}</h3>
							{groupedAlbums[groupedAlbumNum].map((album: Album, albumIndex: number) => (
								<div className="album" key={albumIndex}>
									<Link to={`/albums/${album.id}`}>{album.title}</Link>
								</div>
							))}
							<Divider />
						</div>
					))}
				</>
			}
		</>
	)
}
