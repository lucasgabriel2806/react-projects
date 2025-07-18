import { useState } from "react"

export default function RandomColor() {

    // state para definir o tipo da cor (hex ou rgb)
    const [typeOfColor, setTypeOfColor] = useState('hex');

    // state para definir a cor
    const [color, setColor] = useState('#000000');

    function randomColorUtility(length) {

        return Math.floor(Math.random() * length);

    }

    function handleCreateRandomRexColor() {

        const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];

        let hexColor = '#';

        for (let i; i < 6; i++) {

            hexColor += hex[randomColorUtility(hex.length)];

        }

    }

    function handleCreateRandomRgbColor() {

    }

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

            {console.log(typeOfColor)}

            {/* Gerar uma cor aleatória */}
            <button 
                onClick={
                    typeOfColor === 'hex' ? handleCreateRandomRexColor : handleCreateRandomRgbColor
                    }
                >
                Generate Random Color
            </button>

        </div>

    )

}