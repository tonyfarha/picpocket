import { Image } from 'primereact/image';
import { usePicPocket } from '../contexts/PicContext';
import { Photo } from '../interfaces';

export function SinglePhoto({ photo }: { photo: Photo }) {
    const { like, dislike, likes } = usePicPocket();
    return (
        <div className="card flex justify-content-center">
            <Image src={photo.thumbnailUrl} zoomSrc={photo.url} alt={photo.title} width="150" preview />
            <div className="actions">
                {!likes.some(pic => pic.title == photo.title) && <button onClick={() => like(photo)}>Like</button>}
                {likes.some(pic => pic.title == photo.title) && <button onClick={() => dislike(photo.id)}>Disike</button>}
            </div>
        </div>
    )
}
