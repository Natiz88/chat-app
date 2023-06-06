import React from 'react'

interface inputProps{
    id:string,
    label:string,
    type?:string,
    disabled?:boolean,
    required?:boolean,
}

const Input = ({id,label,type="text",disabled,required}:inputProps) => {
  return (
    <div>
        <label
        htmlFor={id}
        className="
        block 
        text-sm 
        font-medium 
        leading-6 
        text-gray-900
        mt-2
      "
        >{label}</label>
        <div className='mt-2'>
            <input
                      id={id}
                      type={type}
                      autoComplete={id}
                      disabled={disabled}
                      required={required}
                      className=' 
                      block
                      pl-2 
                      w-full 
                      rounded-md 
                      border-0 
                      py-1.5 
                      text-sm 
                      font-medium 
                      text-gray-900 
                      shadow-sm 
                      ring-1 
                      ring-inset 
                      ring-gray-300 
                      focus:ring-sky-600 
                      sm:text-sm outline-none
                      sm:leading-6`'
            />
        </div>
    </div>
  )
}

export default Input;