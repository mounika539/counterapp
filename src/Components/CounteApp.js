import React,{useState} from 'react'

function CounteApp() {

    const [counter,setcount]=useState(0)
   const Increment=()=>{
        setcount(pcount=>pcount+1);
    }
    const Decrement=()=>{
        setcount(pcount=>pcount-1);
    }

  return (
    <div className='container'>
        <div className='sub-container'>
        <h5 className='h5tag' >Count {counter}</h5>
        <button  className='button1' onClick={Increment}>Increase(+)</button>
        <button  className='button2' onClick={Decrement}>Decrease(-)</button>
        </div>
        <button className='button3' onClick={()=>setcount(0)}>Reset</button>
    </div>
  )
}

export default CounteApp
