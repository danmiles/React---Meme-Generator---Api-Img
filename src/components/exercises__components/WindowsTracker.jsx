import React from 'react';
import { useState, useEffect } from 'react';

function WindowsTracker() {
    const [show, setShow] = useState(true)

    const [windowWidth, setWindowWidth] = React.useState(window.innerWidth)
    
    useEffect(() => {
        function watchWidth() {
            console.log("Setting up...")
            setWindowWidth(window.innerWidth)
        }
        
        window.addEventListener("resize", watchWidth)
        // Cleaning UP function
        return function() {
            console.log("Cleaning up...")
            window.removeEventListener("resize", watchWidth)
        }
    }, [])

    function toggle () {
        return setShow(prevShow => !prevShow)
    }
    return (
        <div className="windows__tracker">
            <button onClick={toggle} className='button'>Show windows tracker</button>

            {show && <h1>Window width: {windowWidth}</h1> }
        </div>
    );
}

export default WindowsTracker;
