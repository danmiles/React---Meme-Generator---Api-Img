import React from "react";
import { useState } from "react";
import "../styles/Test.css";

function Test() {
    // 1) ============================================== Start
    // const [isImportant, setIsImportant] = React.useState("Yes");

    /**
     * Challenge:
     * 1. Create a function called `handleClick` that runs
     *    setIsImportant("No")
     * 2. add a click event listener to the div.state--value
     *    that runs `handleClick` when the div is clicked.
     */

    // function handleClick() {
    //   setIsImportant("No")

    // }
    // return (
    //   <div className="state">
    //     <h1 className="state--title">Is state important to know?</h1>
    //     <div onClick={handleClick} className="state--value">
    //       <h1>{isImportant}</h1>
    //     </div>
    //   </div>
    // );
    // 1) ============================================== End

    /**
     * =============== Part 2 Challenge: Set up state to track our count (initial value is 0) - Counter ===============
     */
    // let [counter, setCounter] = React.useState(0)

    // // function increase() {
    // //   setCounter(++counter)
    // // }
    // // Best practice (prevCounter just name)
    // function increase() {
    //   setCounter((prevCouner) => ++prevCouner)
    // }

    // function reduce() {
    //   setCounter((prevCouner) => --prevCouner)
    // }

    // return (
    //   <div className="counter">
    //     <button onClick={reduce}  className="counter--minus">–</button>
    //     <div className="counter--count">
    //       <h1>{counter}</h1>
    //     </div>
    //     <button onClick={increase} className="counter--plus">+</button>
    //   </div>
    // );

    // =============== Part 3 useState --- Boolean value True or False ===============

    // const [isGoingOut, setIsGoingOut] = useState(true)
    // // Just change value True to False
    // function changeAnswer () {
    //     setIsGoingOut(prevState => !prevState)
    // }
    // // if (isGoingOut === true) {
    // //     answer = "Yes";
    // // } else {
    // //     answer = "No";
    // // }

    // return (
    //     <div className="state">
    //         <h1 className="state--title">Do I feel like going out tonight?</h1>
    //         <div className="state--value" onClick={changeAnswer}>
    //             <h1>{isGoingOut ? "Yes" : "No"}</h1>
    //         </div>
    //     </div>
    // );

    // =============== Part 4 useState --- add Array elem. with useState hook ===============

    /**
     * Challenge: Convert the code below to use an array
     * held in state instead of a local variable. Initialize
     * the state array with the same 2 items below
     *
     * Don't worry about fixing `addItem` quite yet.
     */
    //    const [thingsArray,setThingsArray] = useState(["Thing 1", "Thing 2"])

    //    function addItem() {
    //         setThingsArray(prevState => {
    //            return [...prevState, `Thing ${prevState.length + 1}`]
    //         })
    //    }

    //    const thingsElements = thingsArray.map(thing => <p key={thing}> {thing} </p>)

    //    return (
    //        <div>
    //            <button onClick={addItem}>Add Item</button>
    //            {thingsElements}
    //        </div>
    //    )

    /* ============ Part 5 Create simple CARD ============ */

    const [contact, setContact] = React.useState({
        firstName: "John",
        lastName: "Doe",
        phone: "+1 (719) 555-1212",
        email: "itsmyrealname@example.com",
        isFavorite: false,
    });
    /**
     * Challenge: Fill in the values in the markup
     * using the properties of our state object above
     * (Ignore `isFavorite` for now)
     */

    function toggleFavorite() {
        console.log("Toggle Favorite");
    }

    return (
        <main>
            <article className="card">
                <img src="./images/user.png" className="card--image" />
                <div className="card--info">
                    <img
                        src={`../images/star-empty.png`}
                        className="card--favorite"
                        onClick={toggleFavorite}
                    />
                    <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
                    <p className="card--contact">+1 (719) 555-1212</p>
                    <p className="card--contact">itsmyrealname@example.com</p>
                </div>
            </article>
        </main>
    );
}
export default Test;
