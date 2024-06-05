import React from 'react';

const ErrorOverlay = ({ errorHeading, errorBody, handleError }) => {
  return (
    <div className="fixed top-0 w-screen h-screen z-20 bg-black/85 text-white flex justify-center ">
      <div className="flex flex-col mt-12">
        <div className='bg-red-500 text-center flex gap-4 items-center justify-center p-4 rounded-t-lg'
        >
          <svg className='h-12' fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 361.117 361.117" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M359.568,327.246L191.511,21.818c-2.197-3.993-6.395-6.474-10.952-6.474c-4.558,0-8.754,2.481-10.952,6.474L1.549,327.246 c-2.131,3.872-2.058,8.582,0.191,12.388c2.249,3.805,6.34,6.139,10.76,6.139h336.117c4.421,0,8.512-2.334,10.761-6.139 C361.627,335.828,361.699,331.118,359.568,327.246z M33.646,320.772L180.559,53.773l146.913,266.999H33.646z"></path> <path d="M164.894,143.085v90.351c0,8.65,7.014,15.665,15.665,15.665c8.65,0,15.665-7.015,15.665-15.665v-90.351 c0-8.651-7.015-15.665-15.665-15.665C171.908,127.42,164.894,134.435,164.894,143.085z"></path> <path d="M180.559,265.364c-9.097,0-16.5,7.399-16.5,16.5c0,9.098,7.403,16.5,16.5,16.5c9.097,0,16.5-7.402,16.5-16.5 C197.059,272.764,189.655,265.364,180.559,265.364z"></path> </g> </g> </g></svg>
          <p className='text-2xl font-bold'>{errorHeading}</p>
        </div>
        <div className='bg-black p-4'>
          {errorBody.length > 0 && ( // Check if errorBody has content
            <ul className=""> {/* Add styling for bullet points */}
              {errorBody.map((error, index) => (
                <li key={index}>{error}</li>
              ))}
            </ul>
          )}
        </div>
        <button
          className='text-center bg-blue-600 rounded-b-lg text-2xl font-bold p-4'
          onClick={handleError}
        >Okay</button>
      </div>
    </div>
  );
};

export default ErrorOverlay;
