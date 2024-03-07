import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'

function Input({
    type = 'text',
    className = '',
    setlocation,
    ...props
}) {
    const [inputValue,setinputValue]=useState('')
    const handleChange=(event)=>{
          setinputValue(event.target.value)
    }
    const handleSubmit=(event)=>{
        event.preventDefault()
        setlocation(inputValue)
    }
    return (
        <>
        <form onSubmit={handleSubmit} className='relative rounded-3xl px-6 py-4 bg-zinc-200 w-2/6 flex justify-between items-center'>
            
                <input className={`${className} bg-transparent focus:outline-none placeholder-gray-600`}{...props}
                value={inputValue}
                onChange={handleChange}
                placeholder='Search By City or Country'
                />
                <div className="absolute inset-y-0 right-0 flex items-center pr-3 ">
                    <FaSearch className='text-gray-700 cursor-pointer' onClick={handleSubmit}/>
                </div>
          
            </form>
        </>
    )
}

export default Input