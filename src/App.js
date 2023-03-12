import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deccNumber, divNumber, incNumber, mulNumber } from "./action/action";

const App = () => {
  const myState = useSelector((state) => state.changeTheNumber);
  const myState2 = useSelector((state) => state.mulDivNumber);
  const dispatch = useDispatch();
  console.log(myState2);

  return (
    <>
      <button onClick={() => dispatch(incNumber())}>increment</button>
      <input value={myState} type="text" />
      <button onClick={() => dispatch(deccNumber())}>decrement</button>

      <div>
        <button onClick={() => dispatch(divNumber())}>divide</button>
        <input type="text" value={myState2} />
        <button onClick={() => dispatch(mulNumber())}>multiply</button>
      </div>
    </>
  );
};

export default App;
