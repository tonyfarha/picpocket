import { Image } from 'primereact/image';
import { usePicPocket } from '../contexts/PicContext';
import { Photo } from '../interfaces';
import { Button } from 'primereact/button';

export function SinglePhoto({ photo }: { photo: Photo }) {
    const { like, dislike, likes } = usePicPocket();
    return (
        <div className="card flex justify-content-center">
            <Image src={photo.thumbnailUrl} zoomSrc={photo.url} alt={photo.title} width="150" preview />
            <div className="actions">
                {!likes.some(pic => pic.title == photo.title) && <Button onClick={() => like(photo)} icon="pi pi-heart" rounded text severity="danger" aria-label="Favorite" />}
                {likes.some(pic => pic.title == photo.title) && <Button onClick={() => dislike(photo.id)} icon="pi pi-heart-fill" rounded text severity="danger" aria-label="Favorite" />}
            </div>
        </div>
    )
}
