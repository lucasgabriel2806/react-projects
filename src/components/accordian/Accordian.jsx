import { useState } from 'react';

import { IoIosArrowDropdown } from "react-icons/io";

import './styles.css';

function Accordian() {

    function accordianOpen() {
        alert('Chamando função');
    }

    const [selected, setSelected] = useState(null);

    return (

        <>
        
            <div className='accordian'>

                <p>
                    Titulo
                </p>

                <IoIosArrowDropdown className='icon' onClick={accordianOpen} />

            </div>
        
        </>
        
    )

}

export default Accordian;