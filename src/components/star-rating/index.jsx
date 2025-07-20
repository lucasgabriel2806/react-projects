// Importação da Biblioteca react-icons
import { useState } from 'react';
import {FaStar} from 'react-icons/fa';

// Componente
// O número de estrelas por é 5 caso nenhum valor seja passado
export default function StarRating({noOfStars = 5}) {


    // states

    // state para a avaliação (rating)
    const [rating, setRating] = useState(0);

    // 
    const [hover, setHover] = useState(0);

    // funções para lidar com eventos
    function handleClick(getCurrentIndex) {

    }

    function handleMouseEnter

    return <div className="star-rating">
    
        {

            [...Array(noOfStars)].map((_, index) => {

                // key
                return <FaStar
                key={index}
                onClick={}
                onMouseMove={}
                onMouseLeave={}
                size={}
                />

            })

        }
    
    </div>

}