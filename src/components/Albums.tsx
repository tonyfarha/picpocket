import { useEffect, useState } from "react"
import { Album, GroupedAlbums } from "../interfaces";
import { Link } from "react-router-dom";
import { Divider } from 'primereact/divider';
        

export function Albums() {   
	// const [albums, setAlbums] = useState<Album[]>([]);
	const [groupedAlbums, setGroupedAlbums] = useState<GroupedAlbums>({});

	useEffect(() => {

		getAlbums();
		console.log('albums');
		

		async function getAlbums() {
			const res = await fetch(import.meta.env.VITE_API_ALBUMS_URI);
			const json = await res.json();
			// setAlbums(json as Album[]);
			const groupedAlbumsByUserId: GroupedAlbums = json.reduce((acc: GroupedAlbums, curr: Album) => {				
				if(acc[curr.userId]) {
					acc[curr.userId].push(curr)
				}else {
					acc[curr.userId] = [curr]
				}
				return acc;
			}, {})
			setGroupedAlbums(groupedAlbumsByUserId);			
		}

	}, [])



	return (
		<>
		{/* TODO */}
			<h2>Albums</h2>
			{groupedAlbums && Object.keys(groupedAlbums).map((groupedAlbumNum: string, index: number) => (
				<div className="grouped-albums" key={index}>
					<h3>By user {groupedAlbumNum}</h3>
					{groupedAlbums[groupedAlbumNum].map((album: Album, albumIndex: number) => (
						<div className="album" key={albumIndex}>
							<Link to={`/albums/${album.id}`}>{album.title}</Link>
						</div>
					))}
					<Divider />
				</div>
			))}
		</>
	)
}
