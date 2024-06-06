import React, { useState } from 'react';

const FormInput = ({ inputName, HandleInput, value, isPhone, isPassword, hasInfo, infoHandler }) => {
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
    <div className='flex flex-col gap-1 z-0'>
      {/* label */}
      {hasInfo ? (
        <div className='flex gap-4'>
          <label className='' htmlFor={`input_${inputName}`}>
            {Capitalize(inputName)}
          </label>
          <div className='cursor-pointer' onClick={infoHandler}>
            <svg className='w-6 h-6 text-pink-200 hover:rotate-12 hover:animate-[pulse_0.5s_ease-in-out_infinite]' viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="Warning / Info"> <path id="Vector" d="M12 11V16M12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21ZM12.0498 8V8.1L11.9502 8.1002V8H12.0498Z" stroke="#000000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g> </g></svg>
          </div>
        </div>
      ) : (
        <label className='' htmlFor={`input_${inputName}`}>
          {Capitalize(inputName)}
        </label>
      )}


      {/* Input field */}
      {isPassword ? (
        <div className='relative w-full rounded-lg'>
          <input
            className='w-full pl-12 rounded-lg px-2 py-1 bg-pink-100 text-[#1e0823] border-2 border-pink-300 focus:outline-none focus:border-pink-600 focus:bg-pink-50'
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
            className='px-2 bg-pink-200 absolute inset-y-0 left-0 flex items-center rounded-l-lg text-black border-2 border-pink-400 focus:outline-none '
          >
            {isPasswordVisible ? (
              <svg className=' rounded-l-lg w-6 h-6' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path clipRule="evenodd" d="M17.7469 15.4149C17.9855 14.8742 18.1188 14.2724 18.1188 14.0016C18.1188 11.6544 16.2952 9.7513 14.046 9.7513C11.7969 9.7513 9.97332 11.6544 9.97332 14.0016C9.97332 16.3487 12.0097 17.8886 14.046 17.8886C15.3486 17.8886 16.508 17.2515 17.2517 16.2595C17.4466 16.0001 17.6137 15.7168 17.7469 15.4149ZM14.046 15.7635C14.5551 15.7635 15.0205 15.5684 15.3784 15.2457C15.81 14.8566 16 14.2807 16 14.0016C16 12.828 15.1716 11.8764 14.046 11.8764C12.9205 11.8764 12 12.8264 12 14C12 14.8104 12.9205 15.7635 14.046 15.7635Z" fill="#000000" fillRule="evenodd"></path><path clipRule="evenodd" d="M1.09212 14.2724C1.07621 14.2527 1.10803 14.2931 1.09212 14.2724C0.96764 14.1021 0.970773 13.8996 1.09268 13.7273C1.10161 13.7147 1.11071 13.7016 1.11993 13.6882C4.781 8.34319 9.32105 5.5 14.0142 5.5C18.7025 5.5 23.2385 8.33554 26.8956 13.6698C26.965 13.771 27 13.875 27 13.9995C27 14.1301 26.9593 14.2399 26.8863 14.3461C23.2302 19.6702 18.6982 22.5 14.0142 22.5C9.30912 22.5 4.75717 19.6433 1.09212 14.2724ZM3.93909 13.3525C3.6381 13.7267 3.6381 14.2722 3.93908 14.6465C7.07417 18.5443 10.6042 20.3749 14.0142 20.3749C17.4243 20.3749 20.9543 18.5443 24.0894 14.6465C24.3904 14.2722 24.3904 13.7267 24.0894 13.3525C20.9543 9.45475 17.4243 7.62513 14.0142 7.62513C10.6042 7.62513 7.07417 9.45475 3.93909 13.3525Z" fill="#000000" fillRule="evenodd"></path></g></svg>
            ) : (
              <svg className=' rounded-l-lg w-6 h-6' viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path clipRule="evenodd" d="M22.6928 1.55018C22.3102 1.32626 21.8209 1.45915 21.6 1.84698L19.1533 6.14375C17.4864 5.36351 15.7609 4.96457 14.0142 4.96457C9.32104 4.96457 4.781 7.84644 1.11993 13.2641L1.10541 13.2854L1.09271 13.3038C0.970762 13.4784 0.967649 13.6837 1.0921 13.8563C3.79364 17.8691 6.97705 20.4972 10.3484 21.6018L8.39935 25.0222C8.1784 25.4101 8.30951 25.906 8.69214 26.1299L9.03857 26.3326C9.4212 26.5565 9.91046 26.4237 10.1314 26.0358L23.332 2.86058C23.553 2.47275 23.4219 1.97684 23.0392 1.75291L22.6928 1.55018ZM18.092 8.00705C16.7353 7.40974 15.3654 7.1186 14.0142 7.1186C10.6042 7.1186 7.07416 8.97311 3.93908 12.9239C3.63812 13.3032 3.63812 13.8561 3.93908 14.2354C6.28912 17.197 8.86102 18.9811 11.438 19.689L12.7855 17.3232C11.2462 16.8322 9.97333 15.4627 9.97333 13.5818C9.97333 11.2026 11.7969 9.27368 14.046 9.27368C15.0842 9.27368 16.0317 9.68468 16.7511 10.3612L18.092 8.00705ZM15.639 12.3137C15.2926 11.7767 14.7231 11.4277 14.046 11.4277C12.9205 11.4277 12 12.3906 12 13.5802C12 14.3664 12.8432 15.2851 13.9024 15.3624L15.639 12.3137Z" fill="#000000" fillRule="evenodd"></path><path d="M14.6873 22.1761C19.1311 21.9148 23.4056 19.0687 26.8864 13.931C26.9593 13.8234 27 13.7121 27 13.5797C27 13.4535 26.965 13.3481 26.8956 13.2455C25.5579 11.2677 24.1025 9.62885 22.5652 8.34557L21.506 10.2052C22.3887 10.9653 23.2531 11.87 24.0894 12.9239C24.3904 13.3032 24.3904 13.8561 24.0894 14.2354C21.5676 17.4135 18.7903 19.2357 16.0254 19.827L14.6873 22.1761Z" fill="#000000"></path></g></svg>
            )}
          </button>
        </div>
      ) : (
        <div className='relative w-full'>
          <input
            className="flex w-full rounded-lg px-2 py-1 bg-pink-100 text-[#1e0823] border-2 border-pink-300 focus:outline-none focus:border-pink-600 focus:bg-pink-50"
            name={inputName}
            id={`input_${inputName}`}
            type={isPhone ? 'number' : 'text'}
            value={value}
            placeholder={`Enter ${Capitalize(inputName)}`}
            onInput={isPhone ? handleNumericInput : HandleInput}
          />

        </div>
      )}
    </div>
  );
};

export default FormInput;
