import { useState } from 'react';

import data from './data';

import './styles.css';

export default function Accordian2() {
    
    // Hook's

    const [selected, setSelected] = useState(null);

    const [enableMultiSelection, setEnableMultiSelection] = useState(false); 
    
    const [multiple, setMultiple] = useState([]);

    function handleSingleSelection(getCurrentId) {

        setSelected(getCurrentId === selected ? null : getCurrentId);

    }

    function handleMultiSelection(getCurrentId) {

        let cpyMultiple = [...multiple];

        const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);

        console.log(findIndexOfCurrentId);

        if(findIndexOfCurrentId === -1) cpyMultiple.push(getCurrentId)
        else cpyMultiple.splice(findIndexOfCurrentId , 1);

        setMultiple(cpyMultiple);
        
    }

    console.log(selected , multiple);

    return <div className='wrapper'>

        {/* Estamos usando o operador NOT ! para inverter o valor de
        true para false e vice versa. */}

        <button 
            onClick={() => setEnableMultiSelection(!enableMultiSelection)}
        >
            Enable Multi Selection
        </button>
        
        <div className="accordian2">

            {

                // Verificando se existe dados

                data && data.length > 0 ?

                // Usando o map para percorrer o array de objetos e
                // gerar o HTML com os dados do array

                data.map(dataItem => <div className='item'>

                    <div className='title2' 
                         // Se for single ou multi selection ele vai lidar com isso
                         onClick={ 
                            enableMultiSelection 
                            ? () => handleMultiSelection(dataItem.id) 
                            : () => handleSingleSelection(dataItem.id)}
                    >                         

                        <h3>{dataItem.question}</h3>

                        <span>+</span>

                    </div>

                    {
                        enableMultiSelection 
                        ? multiple.indexOf(dataItem.id) !== -1 &&
                        <div className="content">{dataItem.answer}</div> 
                        : selected === dataItem.id && 
                        <div className="content">{dataItem.answer}</div>
                    }

                    {/* {
                        selected === dataItem.id || multiple.indexOf(dataItem.id) !== -1 ? (
                        
                            <div className="content">{dataItem.answer}</div>
                        
                        ) : null
                    } */}

                </div>)

                // Se não existir dados:

                : <div>No data found!</div>

            }

        </div>

    </div>

}