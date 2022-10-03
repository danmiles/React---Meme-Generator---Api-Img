import React from "react";

function Star(props) {
    const starIcon = props.isFilled ? "/images/star-filled.png " : "/images/star-empty.png"   
    
    return (
        <img
            src={starIcon}
            className="card--favorite"
            onClick={props.toggleFavor}            
        />
    );
}

export default Star;
