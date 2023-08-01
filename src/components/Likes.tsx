import { SinglePhoto } from ".";
import { usePicPocket } from "../contexts/PicContext"

export function Likes() {

    const { likes } = usePicPocket();

    return (
        <div className="album-grid">
            {likes.map((photo, index) => (
                <SinglePhoto key={index} photo={photo} />
            ))}
        </div>
    )
}
