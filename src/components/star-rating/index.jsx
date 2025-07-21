import { useState } from 'react';

// Importa o ícone de estrela da biblioteca react-icons (Font Awesome)
import {FaStar} from 'react-icons/fa';

import './styles.css';

// Componente
// O número de estrelas por é 5 caso nenhum valor seja passado
export default function StarRating({noOfStars = 5}) {

    // states

    // Armazena a avaliação atual (quantas estrelas foram clicadas)
    const [rating, setRating] = useState(0);

    // Armazena a estrela atualmente "hovered" (quando o usuário passa o mouse por cima)
    const [hover, setHover] = useState(0);

    // Define a nota atual com base na estrela clicada
    function handleClick(getCurrentIndex) {

        // console.log(getCurrentIndex);

        setRating(getCurrentIndex);
        
    }

    // Atualiza o hover (quando o mouse passa por cima de uma estrela)
    function handleMouseEnter(getCurrentIndex) {

        // console.log(getCurrentIndex);

        setHover(getCurrentIndex);

    }

    // Quando o mouse sai de uma estrela, volta o estado de hover para o valor do rating atual
    function handleMouseLeave() {

        // console.log(getCurrentIndex);

        setHover(rating);

    }

    return <div className="star-rating">
    
        {

            // cria um array com o número de estrelas desejado e usa .map() para renderizar cada estrela individualmente:
            [...Array(noOfStars)].map((_, index) => {

                index += 1; // Corrige o índice para começar de 1 em vez de 0

                // Para cada estrela, um componente FaStar é renderizado:
                return <FaStar
                key={index}
                className={index <= (hover || rating) ? 'active' : 'inactive'}
                onClick={() => handleClick(index)}
                onMouseMove={() => handleMouseEnter(index)}
                onMouseLeave={() => handleMouseLeave()}
                size={40}
                />

            })

        }
    
    </div>

}