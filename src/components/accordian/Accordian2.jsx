import { useState } from 'react';

import data from './data';

export default function Accordian2() {
    
    const [selected, setSelected] = useState(null);

    function handleSingleSelection(getCurrentId) {

        console.log(getCurrentId);

    }

    return <div className='wrapper'>
        
        <div className="accordian">

            {

                data && data.length > 0 ?

                data.map(dataItem => <div className='item'>

                    <div className='title' onClick={() => handleSingleSelection(dataItem.id)}>                         

                        <h3>{dataItem.question}</h3>

                        <span>+</span>

                    </div>

                </div>)

                : <div>No data found!</div>

            }

        </div>

    </div>;

}