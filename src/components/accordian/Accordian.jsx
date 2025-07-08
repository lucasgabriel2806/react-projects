import { useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';

import './styles.css';

function Accordian() {

    function accordianOpen() {

        const description = document.getElementById('description');

        description.classList.toggle('hidden');
        
    }

    const [selected, setSelected] = useState(null);

    return (

        <>
        
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