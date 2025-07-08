import { useEffect, useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';

import './styles.css';

function Accordian() {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        
        console.log(`Multi Selection: ${selected}`);
        
    }, [selected])

    function accordianOpen() {

        const description = document.getElementById('description');

        description.classList.toggle('hidden');
        
    }

    function multiSelection() {

        selected ? setSelected(false) : setSelected(true);

    }

    return (

        <>

            <div className='multi-selection' onClick={multiSelection}>

                <p>Enable Multi Selection</p>

            </div>
        
            <div className='accordian'>

                <div className='title'>

                    <p>
                        Titulo
                    </p>

                    <IoIosArrowDropdown className='icon' onClick={accordianOpen} />

                </div>

                <p class='description hidden' id='description'>
                    Descrição
                </p>

            </div>
        
        </>
        
    )

}

export default Accordian;