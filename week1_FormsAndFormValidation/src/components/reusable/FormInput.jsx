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

  const handleNumericInput = (e) => {
    const inputValue = e.target.value;
    if (inputValue.length <= 10) {
      HandleInput(e);
    }
  };

  return (
    <div className='flex flex-col gap-1'>
      {/* label */}
      <label className='' htmlFor={`input_${inputName}`}>
        {Capitalize(inputName)}
      </label>

      {/* Input field */}
      {isPassword ? (
        <div className='relative w-full'>
          <input
            className='w-full pl-10'
            name={inputName}
            id={`input_${inputName}`}
            type={`${isPasswordVisible ? 'text' : 'password'}`}
            value={value}
            placeholder={`Enter your ${Capitalize(inputName)}`}
            onChange={HandleInput}
          />
          <button
            type='button'
            onClick={togglePasswordVisibility}
            className='absolute inset-y-0 left-0 flex items-center text-black bg-gray-300'
          >
            {isPasswordVisible ? (
              <svg className='w-8 h-8' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="185px" height="185px" viewBox="-13.26 -13.26 86.77 86.77" xml:space="preserve" transform="rotate(0)" stroke="#000000" stroke-width="3.3139700000000003"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" stroke="#CCCCCC" stroke-width="0.48203199999999996"></g><g id="SVGRepo_iconCarrier"> <g> <g> <g> <path d="M29.008,48.308c-16.476,0-28.336-17.029-28.833-17.754c-0.248-0.36-0.231-0.841,0.039-1.184 c0.561-0.712,13.906-17.424,29.913-17.424c17.953,0,29.474,16.769,29.956,17.482c0.23,0.342,0.229,0.79-0.007,1.129 c-0.475,0.688-11.842,16.818-29.899,17.721C29.786,48.297,29.396,48.308,29.008,48.308z M2.267,30.028 c2.326,3.098,13.553,16.967,27.812,16.254c15.237-0.76,25.762-13.453,27.938-16.3c-2.175-2.912-12.811-16.035-27.889-16.035 C16.7,13.947,4.771,27.084,2.267,30.028z"></path> </g> <g> <path d="M30.127,37.114c-3.852,0-6.986-3.135-6.986-6.986c0-3.851,3.134-6.985,6.986-6.985s6.986,3.135,6.986,6.985 C37.113,33.979,33.979,37.114,30.127,37.114z"></path> </g> <g> <path d="M30.127,42.614c-6.885,0-12.486-5.602-12.486-12.486c0-6.883,5.602-12.485,12.486-12.485 c6.884,0,12.486,5.602,12.486,12.485C42.613,37.012,37.013,42.614,30.127,42.614z M30.127,19.641 c-5.782,0-10.486,4.704-10.486,10.486c0,5.781,4.704,10.485,10.486,10.485s10.486-4.704,10.486-10.485 C40.613,24.345,35.91,19.641,30.127,19.641z"></path> </g> </g> </g> </g></svg>
            ) : (
              <svg className='w-8 h-8' viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" transform="rotate(180)"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M4.5 15.5C7.5 9 16.5 9 19.5 15.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M16.8162 12.1825L19.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M12 10.625V7" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> <path d="M7.18383 12.1825L4.5 8.5" stroke="#000000" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path> </g></svg>
            )}
          </button>
        </div>
      ) : (
        <div className='relative w-full'>
          <input
            className='flex w-full'
            name={inputName}
            id={`input_${inputName}`}
            type={isPhone ? 'number' : 'text'}
            value={value}
            placeholder={`Enter your ${Capitalize(inputName)}`}
            onInput={isPhone ? handleNumericInput : HandleInput}
          />
        </div>
      )}
    </div>
  );
};

export default FormInput;
