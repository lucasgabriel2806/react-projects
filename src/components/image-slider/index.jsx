import { useState, useEffect } from "react";

export default function ImageSlider(url, limit = 5, page = 1) {

    const [images, setImages] = useState([]);

    const [currentSlide, setCurrentSlide] = useState(0);

    const [errorMsg, setErrorMsg] = useState(null);

    const [loading, setLoading] = useState(false);

    // https://picsum.photos/v2/list?page='&limit=5

    async function fetchImages(getUrl) {

        try {

            // Começa a carregar e chama a API
            setLoading(true);

            const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);

            const data = await response.json();

            // Se existir dados
            if (data) {

                // atualizaremos nossa imagem com esses dados 
                setImages();

                // e paramos de carrregar
                setLoading(false);

            }

        } catch(e) {

            setErrorMsg(e.message);

            // Se deu erro (catch) para de carregar
            setLoading(false);

        }

    }

    useEffect(() => {
        // Se existir uma url, busque a imagem
        if(url !== '') fetchImages(url);
    }, [url]);

    if(loading) {
        return <div>Loading data ! Please wait</div>
    }

    if (errorMsg !== null) {
        return <div>Error occured ! {errorMsg}</div>
    }

    return <div className="container"></div>

}