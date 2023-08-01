import { Image } from 'primereact/image';
import { usePicPocket } from '../contexts/PicContext';
import { Photo } from '../interfaces';

export function SinglePhoto({ photo }: { photo: Photo }) {
    const { like, dislike } = usePicPocket();
    return (
        <div className="card flex justify-content-center">
            <Image src={photo.thumbnailUrl} zoomSrc={photo.url} alt={photo.title} width="150" preview />
            <button onClick={like}>Like</button>
            <button onClick={dislike}>Disike</button>
        </div>
  )
}
