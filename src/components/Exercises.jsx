import React from 'react';
import { useState } from 'react';
// Data start
import BoxesData from '../data/exercises__data/BoxesData';
import jokesData from '../data/exercises__data/jokesData';
// Data end

// Exercises components start
import Star from './Star';
import Box from './exercises__components/Box';
import Joke from './exercises__components/Joke';
import Form from './exercises__components/Form';
import Api from './exercises__components/Api';
import WindowsTracker from './exercises__components/WindowsTracker';
// Exercises components end

import '../styles/Exercises.css';


function Exercises(props) {
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

    /* ============ Part 5 Create simple CARD - || 1)Use State for Arrow{Object} || 2)Passing data from childe component Star ============ */

    // const [contact, setContact] = useState({
    //     firstName: "John",
    //     lastName: "Doe",
    //     phone: "+1 (719) 555-1212",
    //     email: "itsmyrealname@example.com",
    //     isFavorite: false,
    // });
    // // ==== Change type of Star image - Start ====

    // //  Option 2 with ()
    // function toggleFavorite() {
    //     setContact((prevContact) => ({
    //         ...prevContact,
    //         isFavorite: !prevContact.isFavorite,
    //     }));
    // }
    // //==== Change type of Star image - End ====

    // return (
    //     <article className="card">
    //         <img src="/images/user.png" className="card--image" />
    //         <div className="card--info">
    //             <Star isFilled={contact.isFavorite} toggleFavor={toggleFavorite} />
    //             <h2 className="card--name">{contact.firstName} {contact.lastName}</h2>
    //             <p className="card--contact">{contact.phone}</p>
    //             <p className="card--contact">{contact.email}</p>
    //         </div>
    //     </article>
    // );

    /* ============ Part 6 Create Array with map. ============ */
    // 1) Fetching data from BoxesData.jsx with useState.
    // 2) Create props for Box.jsx component
    // 3) Changing true => false from array BoxData.jsx with props from Box.jsx component

    // 1) Variant 1: with props from Box.jsx Component
    // const [squares, setSquares] = React.useState(BoxesData);

    // const boxBackground = {
    //     backgroundColor: squares.on === true ? "black" : "green",
    // };

    // const squareElements = squares.map((square) => {
    //     return <Box key={square.id} on={square.on} number={square.id} />;
    // });

    // return <div className="box__container">{squareElements}</div>;

    // Variant 2 with function in parent element (Exercises.jsx)
    // const [squares, setSquares] = React.useState(BoxesData);

    // const squareElements = squares.map((square) => (
    //     <Box
    //         key={square.id}
    //         id={square.id}
    //         on={square.on}
    //         toggle={toggle}
    //         number={square.id}
    //     />
    // ));

    // function toggle(id) {
    //     setSquares((prevSquares) => {
    //         const newSquares = [];
    //         for (let i = 0; i < prevSquares.length; i++) {
    //             const currentSquare = prevSquares[i];
    //             if (currentSquare.id === id) {
    //                 const updatedSquare = {
    //                     ...currentSquare,
    //                     on: !currentSquare.on,
    //                 };
    //                 newSquares.push(updatedSquare);
    //             } else {
    //                 newSquares.push(currentSquare);
    //             }
    //         }
    //         console.log(newSquares);
    //         return newSquares;
    //     });
    // }

    // return <div className="box__container">{squareElements}</div>;

    // Variant 3 with map function
    // const [squares, setSquares] = React.useState(BoxesData);

    // const squareElements = squares.map((square) => (
    //     <Box
    //         key={square.id}
    //         item={square.id}
    //         on={square.on}
    //         toggle={toggle}
    //         number={square.id}
    //     />
    // ));

    // function toggle(item) {
    //     setSquares((prevSquares) => {
    //         return prevSquares.map((square) => {
    //             return square.id === item ? {...square, on: !square.on} : square
    //         })
    //     });
    // }

    // return <div className="box__container">{squareElements}</div>

    // !!!!================================ Conditional Rendering - Joke.jsx + jokesData.jsx ================================!!!!

    // 1) Show element if it's true, hide if false
    // const jokeElements = jokesData.map(joke => {
    //     return (
    //         <Joke
    //             key={joke.id}
    //             setup={joke.setup}
    //             punchline={joke.punchline}
    //         />
    //     )
    // })
    // return (
    //     <div>
    //         {jokeElements}
    //     </div>
    // )

    // -------- Chalange - 1 -------- (https://scrimba.com/learn/learnreact/conditional-rendering-practice-co6c14590bfc4e8abe0ef2b40)
    // const [messages, setMessages] = useState(['a', 'b']);
    /**
     * Challenge:
     * - If there are no unread messages, display "You're all caught up!"
     * - If there are > 0 unread messages, display "You have <n> unread
     *   message(s)"
     *      - If there's exactly 1 unread message, it should read "message"
     *        (singular)
     */
    // return (
    //     <div>
    //         {/* Variant 1 */}
    //         {/* {messages.length === 0 ? "You're all caught up!" : `You have ${messages.length} unread ${messages.length > 1 ? "messages" : "message"}` } */}
    //         {/* Variant 2 */}
    //         {messages.length === 0 ? (
    //             <h1>You're all caught up!</h1>
    //         ) : (
    //             <h1>
    //                 You have {messages.length} unread{' '}
    //                 {messages.length > 1 ? 'messages' : 'message'}
    //             </h1>
    //         )}
    //     </div>
    // );

    // !!!!================================ Forms ================================!!!!

    // return (
    //     <Form />
    // )

    // !!!!================================ Api ================================!!!!

    // return <Api />;

     // !!!!================================ Windows Tracker ================================!!!!

     return <WindowsTracker />
}
export default Exercises;
