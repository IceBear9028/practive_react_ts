import React,{useState, useEffect} from 'react';
import './App.css';

function App() {
  const [number, setNumber] = useState(0);
  const [test, setTest] = useState(false);
  useEffect(()=>{
    console.log('랜더링이 될때마다 출력');
  },[number])
  useEffect(()=>{
    console.log("스위치 값이 변할때 출력",test);
  },[test])
  
  return (
    <>
      <div className='box1'>
        <div className = 'numberResult'>
          <p>{number}</p>
        </div>
        <div className='buttons'>
          <button className = 'plusOne' onClick={()=>{setNumber((i)=>i+1)}}>+ 1</button>
          <button className = 'minusOne' onClick={()=>{setNumber((i)=>i-1)}}>- 1</button>
        </div> 
        <div>
          <button onClick={()=>{setTest((i)=> !i)}}>눌러</button>
        </div>
        <div>
          {test && <p>응 병신아</p>}
        </div>
      </div>
    </>
  );
}

export default App;
