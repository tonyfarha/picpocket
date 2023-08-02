import { SinglePhoto } from ".";
import { usePicPocket } from "../contexts/PicContext"
import NoDataImage from '../assets/images/no-data.svg'

export function Likes() {

    const { likes } = usePicPocket();

    return (
        <>
            <h2 style={{ textAlign: 'center', margin: '50px 0' }}><i className="pi pi-images" style={{ fontSize: '1.5rem' }}></i> Liked Photos</h2>
            <div className="album-grid">
                {likes.map((photo, index) => (
                    <SinglePhoto key={index} photo={photo} />
                ))}
            </div>
            {likes.length == 0 && <img src={NoDataImage} width="100%" alt="No Data" />}
        </>
    )
}
