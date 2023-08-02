import { SinglePhoto } from ".";
import { usePicPocket } from "../contexts/PicContext"
import NoDataImage from '../assets/images/no-data.svg'

export function Likes() {

    const { likes } = usePicPocket();

    return (
        <>
            <div className="album-grid">
                {likes.map((photo, index) => (
                    <SinglePhoto key={index} photo={photo} />
                ))}
            </div>
            {likes.length == 0 && <img src={NoDataImage} width="100%" alt="No Data" />}
        </>
    )
}
