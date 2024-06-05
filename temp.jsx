import React, { useState } from 'react';
import Select from 'react-select';

const FormInput = ({ inputName, HandleInput, value, isPhone, isPassword }) => {
  const Capitalize = (str) => {
    if (typeof str !== 'string') {
      return str;
    }
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  // Handling password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  function togglePasswordVisibility() {
    setIsPasswordVisible((prevState) => !prevState);
  }

  if (!isPassword) {
    return (
      <div className='flex flex-col gap-1'>

        {/* label */}
        <label
          className=''
          htmlFor={`input_${inputName}`}
        >{Capitalize(inputName)}</label>

        {/* Input field */}
        <input
          className='flex'
          name={inputName}
          id={`input_${inputName}`}
          type={`${isPhone ? 'number' : 'text'}`}
          value={value}
          placeholder={`Enter your ${Capitalize(inputName)}`}
          onChange={HandleInput}
        />

      </div>
    )
  }
  else return (
    <div className='flex flex-col gap-1'>

        {/* label */}
        <label
          className=''
          htmlFor={`input_${inputName}`}
        >{Capitalize(inputName)}</label>

        {/* Input field */}
        <div className='relative'>
          <input
            className='flex'
            name={inputName}
            id={`input_${inputName}`}
            type={`${isPasswordVisible ? 'text' : 'password'}`}
            value={value}
            placeholder={`Enter your ${Capitalize(inputName)}`}
            onChange={HandleInput}
          />
          <p onClick={togglePasswordVisibility} className='text-black absolute top-0 right-2'>gg</p>
        </div>

      </div>
    
  )
}

export default FormInput;
