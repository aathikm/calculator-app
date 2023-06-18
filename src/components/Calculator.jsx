import React, {useState} from 'react';
import { FaBars } from "react-icons/fa";

function Calculator() {

  const [number, setNumber] = useState('')

  const handleSubmit = (e) => {
    setNumber(number.concat(e.target.value))
  }

  //handle clear the value
  const handleClear = () => {
    setNumber('')
  }

  //handle slice -> remove the number one by one
  const handleSlice = () => {
    setNumber(number.slice(0, -1))
  }

  //handle answer
  const handleAnswer = () => {
    try{
      setNumber(eval(number).toString())
    }catch(error){
      setNumber('Invalid')
    }
  }
  return (
    <React.Fragment>
      <section>
        {/*Header */}

        <div className='flex px-3 py-3'>
          <FaBars className='text-white text-4xl hover:cursor-pointer'/>
          <h1 className='px-3'>Calculator App</h1>
        </div>

        {/*Screen */}
        <div className='w-full h-20 py-4'>
          <input
            type='text'
            placeholder='0'
            value={number}
            className='w-full h-20 text-4xl text-white text-right text-black border-2 border-white bg-gray-900 '></input>
        </div>

        {/*Keys */}
        <div className='grid grid-cols-4 gap-2'>
          <button onClick={handleClear} className='text-white mt-10 h-20 w-20 bg-blue-400 rounded-md mx-4 '>AC</button>
          <button onClick={handleSlice} className='text-white mt-10 h-20 w-20 bg-blue-400 rounded-md mx-4'>C</button>
          <button value="/" onClick={handleSubmit} className='text-white mt-10 h-20 w-20 bg-blue-400 rounded-md mx-4'>/</button>
          <button value="+" onClick={handleSubmit} className='text-white mt-10 h-50 w-20 items-center bg-blue-400 rounded-md mx-4 grid row-span-2'>+</button>
          <button value="7" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4 '>7</button>

          <button value="8" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>8</button>
          <button value="9" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>9</button>
          <button value="4" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>4</button>
          <button value="5" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>5</button>
          <button value="6" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>6</button>
          <button value="-" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>-</button>
          <button value="1" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>1</button>
          <button value="2" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>2</button>
          <button value="3" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>3</button>
          <button value="*" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>x</button>

          <button value="." onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>.</button>
          <button value="0" onClick={handleSubmit} className='text-white mt-5 h-20 w-20 bg-blue-400 rounded-md mx-4'>0</button>
          <button onClick={handleAnswer} className='text-white mt-5 h-20 w-40 bg-blue-400 rounded-md mx-4 col-span-2'>=</button>
        </div>

      </section>
    </React.Fragment>
  )
}

export default Calculator