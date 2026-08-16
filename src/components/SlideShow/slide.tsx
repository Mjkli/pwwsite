import {useState} from "react";
import "./slide.css"

function SlideShow() {
    const images = [
        "/assets/artists/artist1.jpg",
        "/assets/artists/artist2.jpg",
        "/assets/artists/artist3.jpg",
        "/assets/artists/artist4.jpg",
        "/assets/artists/artist5.jpg",
    ];

    const [imgIndex, setImgIndex] = useState(0);

    setTimeout(() => {
        if (imgIndex < images.length - 1) {
            setImgIndex(imgIndex + 1);
        } else {
            setImgIndex(0);
        }
    }, 4000);
    return(
        <>
        <div className="home-photo">
            <img src={images[imgIndex]}></img>
        </div>
        </>
    )
}

export default SlideShow;