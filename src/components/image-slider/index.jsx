import { useState, useEffect } from "react";

export default function ImageSlider(url, limit) {

    const [images, setImages] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    async function fetchImages(getUrl) {



    }

    useEffect(() => {
        // Se existir uma url, busque a imagem
        if(url !== '') fetchImages(url);
    }, [url]);

    return <div className="container"></div>

}