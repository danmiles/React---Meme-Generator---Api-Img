import React from 'react';
import { useState, useEffect } from 'react';

function Api() {
    const [starWarsData, setStarWarsData] = useState({});
    const [count, setCount] = React.useState(1)

    // 1. GET the data (fetch)
    // 2. Save the data to state

    // console.log('component rendered');

    // fetch('https://swapi.dev/api/people/1')
    //     .then((res) => res.json())
    //     .then((data) => setStarWarsData(data));

    // With ==!!!! Dependencies array !!!!==
    useEffect(() => {
        fetch(`https://swapi.dev/api/people/${count}`)
            .then((res) => res.json())
            .then((data) => setStarWarsData(data));
    },[count]);


    console.log(starWarsData);
    return (
        <div>
            <h2>The count is {count}</h2>
            <pre>{JSON.stringify(starWarsData, null, 2)}</pre>

            <button className='button' onClick={() => setCount(prevCount => prevCount -1 )}>Get Previous Character</button> 
            <button className='button' onClick={() => setCount(prevCount => prevCount + 1)}>Get Next Character</button>            
                       
        </div>
        
    );
}

export default Api;
