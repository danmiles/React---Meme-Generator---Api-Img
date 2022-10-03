import React from "react";

function Box(props) {
    // =========== Variant 1 ===========
    //     const [on, setOn] = React.useState(props.on)

    //     function toggle() {
    //         setOn(prevOn => !prevOn)
    //     }

    //     const boxBackground = {
    //         backgroundColor: on === true ? "green" : "black",
    //     };

    //     return (
    //         <div style={boxBackground} className="box" onClick={toggle}>
    //             {props.number}
    //         </div>
    //     );

    // =========== Variant 2 ===========

    const styles = {
        backgroundColor: props.on ? "#222222" : "transparent",
    };

    return <div style={styles} className="box" onClick={()=> props.toggle(props.item)}>{props.number}</div>;
}

export default Box;
