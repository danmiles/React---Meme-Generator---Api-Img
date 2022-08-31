import React from "react";
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
   * Part 2 Challenge: Set up state to track our count (initial value is 0)
   */
  let [counter, setCounter] = React.useState(0)

  // function increase() {
  //   setCounter(++counter)    
  // }
  // Best practice (prevCounter just name)
  function increase() {
    setCounter((prevCouner) => ++prevCouner)    
  }

  function reduce() {
    setCounter((prevCouner) => --prevCouner)    
  }

  return (
    <div className="counter">
      <button onClick={reduce}  className="counter--minus">–</button>
      <div className="counter--count">
        <h1>{counter}</h1>
      </div>
      <button onClick={increase} className="counter--plus">+</button>
    </div>
  );
}
export default Test;
