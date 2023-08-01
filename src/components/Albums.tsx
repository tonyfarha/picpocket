import { useEffect, useState } from "react"
import { Album } from "../interfaces";
import { Link } from "react-router-dom";


export function Albums() {   
	const [albums, setAlbums] = useState<Album[]>([]);

	useEffect(() => {

		getAlbums();
		console.log('albums');
		

		async function getAlbums() {
			const res = await fetch(import.meta.env.VITE_API_ALBUMS_URI);
			const json = await res.json();
			setAlbums(json as Album[]);
		}

	}, [])



	return (
		<>
			<h2>Albums</h2>
			{albums && albums.map((album: Album, index: number) => (
				<div key={index}>			
					<Link to={`/albums/${album.id}`}>{album.title}</Link>
					<br/>
				</div>
			))}
		</>
	)
}
