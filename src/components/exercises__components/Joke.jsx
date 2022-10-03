import React from 'react';
import { useState } from 'react';

function Joke(props) {
    /**
     * Challenge:
     * - Create state `isShown` (boolean, default to `false`)
     * - Add a button that toggles the value back and forth
     */

    const [isShown, setIsShown] = useState(false);

    function toggleShown() {
        console.log(isShown);
        setIsShown((prevShown) => !prevShown);
    }
    return (
        // 1) Conditional Rendering - With Boolean hide and show
        // <div>
        //     {props.setup && <h3>{props.setup}</h3>}
        //     {isShown && <p>{props.punchline}</p>}
        //     {!isShown && <button onClick={toggleShown}>Show Punchline</button>}
        //     {isShown && <button onClick={toggleShown}>Hide Punchline</button>}
        //     <hr />
        // </div>

        // 2)Conditional Rendering - With ternary operator
        <div>
            {props.setup && <h3>{props.setup}</h3>}
            {isShown && <p>{props.punchline}</p>}
            <button onClick={toggleShown}>{isShown ? "Hide" : "Show"} Punchline</button>
            
            <hr />
        </div>
    );
}

export default Joke;
