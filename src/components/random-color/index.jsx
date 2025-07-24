import { useEffect, useState } from "react";

import './style.css';

export default function RandomColor() {

    // state para definir o tipo da cor (hex ou rgb)
    const [typeOfColor, setTypeOfColor] = useState('hex');

    // state para definir a cor
    const [color, setColor] = useState('#000000');

    // Função para gerar um número aleatório
    function randomColorUtility(length) {

        // Retorna um número aleatório de 0 a 16
        return Math.floor(Math.random() * length);

    }

    function handleCreateRandomHexColor() {

        // Array com caracteres hexadecimais
        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        // Minha cor hexadecimal - #123456
        // O primeiro caracter é #, depois vem a junção dos outros caracteres
        let hexColor = '#';

        // Executa 6 vezes pra preencher o valor hexadecimal.
        for (let i = 0; i < 6; i++) {

            // Preenchendo o valor hexadecimal
            hexColor += hex[randomColorUtility(hex.length)];

        }

        console.log(hexColor);

        // atualizando o state color para ter o valor de hexColor
        setColor(hexColor);

    }

    function handleCreateRandomRgbColor() {

        const r = randomColorUtility(256);

        const g = randomColorUtility(256);

        const b = randomColorUtility(256);

        setColor(`rgb(${r}, ${g}, ${b})`);

    }

    // Sempre que o tipo da cor (typeOfColor) mudar, ele vai mudar o state color de hex pra rgb e vice versa
    useEffect(() => {

        if (typeOfColor === 'rgb') handleCreateRandomRgbColor();

        else handleCreateRandomHexColor();


    }, [typeOfColor]);

    return (

        <div style={{
            width: '100vw',
            height: '100vh',
            background: color,
        }}>

            {/* Coverter para hex */}
            <button onClick={() => setTypeOfColor('hex')}>Create HEX Color</button>

            {/* Coverter para rgb */}
            <button onClick={() => setTypeOfColor('rgb')}>Create RGB Color</button>

            {/* Gerar uma cor aleatória */}
            <button 
                onClick={
                    typeOfColor === 'hex' ? handleCreateRandomHexColor : handleCreateRandomRgbColor
                    }
                >
                Generate Random Color
            </button>

            <div style={{
                display: 'flex',
                justifyContent: 'center',
                aignItems: 'center',
                flexDirection: 'column',
                gap: '200px',
                color: '#fff',
                fontSize: '60px',
                marginTop: '50px'
            }}>

                <h3>
                    {typeOfColor === 'rgb' ? 'RGB Color' : 'HEX Color'}
                </h3>

                <h1>{color}</h1>

            </div>

        </div>

    )

}