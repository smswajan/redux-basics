import React from 'react';
import logo from './logo.svg';
import './App.css';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions'

function App() {
  const counter = useSelector(state => state.counterReducer);
  console.log(counter);
  const isLogged = useSelector(state => state.loggedReducer);
  const dispatch = useDispatch();

  return (
    <div className="container" >
      <h1>Counter: {counter} </h1>
      <button onClick={() => dispatch(increment(5))} >+</button>
      <button onClick={() => dispatch(decrement(5))} >-</button>
      {isLogged ? <h3>You can't see.</h3> : <h4>hello</h4>}
    </div>
  );
}

export default App;
