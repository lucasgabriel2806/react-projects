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

        // console.log(getCurrentIndex);

        setRating(getCurrentIndex);
        
    }

    function handleMouseEnter(getCurrentIndex) {

        // console.log(getCurrentIndex);

        setHover(getCurrentIndex);

    }

    function handleMouseLeave(getCurrentIndex) {

        // console.log(getCurrentIndex);

        setHover(rating);

    }

    return <div className="star-rating">
    
        {

            [...Array(noOfStars)].map((_, index) => {

                index += 1;

                // key
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave(index)}
                size={40}
                />

            })

        }
    
    </div>

}