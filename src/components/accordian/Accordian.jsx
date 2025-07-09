import { useEffect, useState } from 'react';

import { IoIosArrowDropdown } from 'react-icons/io';

import { MdCheckBoxOutlineBlank, MdOutlineCheckBox } from "react-icons/md";

import './styles.css';

import data from './data.js';

function Accordian() {

    const [selected, setSelected] = useState(false);

    useEffect(() => {
        
        console.log(`Multi Selection: ${selected}`);
        
    }, [selected]);

    function multiSelection() {

        selected ? setSelected(false) : setSelected(true);

    }

    return (

        <>

            <div className='multi-selection' onClick={multiSelection}>

                <p>Enable Multi Selection</p>

                {selected ? <MdOutlineCheckBox className='icon' /> : <MdCheckBoxOutlineBlank className='icon' />}

            </div>

            <p>

                {

                    data.map(num => {

                        function accordianOpen() {

                            const description = document.getElementById(num.id);

                            description.classList.toggle('hidden');
                            
                        }

                        return (                            

                            <div className='accordian-container'>

                                <div className='accordian' onClick={accordianOpen}>

                                    <h2 className='title'>

                                        <p>
                                            {num.question}
                                        </p>

                                        <IoIosArrowDropdown className='icon' />

                                    </h2>

                                    <p class='description hidden' id={num.id}>
                                        Descrição
                                    </p>

                                </div>

                            </div>

                        )

                    })
                    
                }

            </p>
        
        </>
        
    )

}

export default Accordian;