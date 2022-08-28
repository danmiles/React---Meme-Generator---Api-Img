import React from "react"

import "../styles/Meme.css"
export default function Meme() {

    const [things, setThings] = React.useState(["Thing 1", "Thing 2"])
    
    function addItem() {
        const newThingText = `Thing ${things.length + 1}`
        setThings(prevState => [...prevState, newThingText])
    }
    
    const thingsElements = things.map(thing => <p key={thing}>{thing}</p>)
    
    return (
        <div>
            <button className="button" onClick={addItem}>Add Item</button>
            {thingsElements}
        </div>
    )

}