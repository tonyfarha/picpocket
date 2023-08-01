import { useEffect, useState } from "react"
import { Album } from "../interfaces";
import { Link } from "react-router-dom";


export default function Albums() {   
	const [albums, setAlbums] = useState<Album[]>([]);

	useEffect(() => {

		getAlbums();

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
				<>			
					<Link key={index} to={`/albums/${album.id}`}>{album.title}</Link>
					<br/>
				</>
			))}
		</>
	)
}
