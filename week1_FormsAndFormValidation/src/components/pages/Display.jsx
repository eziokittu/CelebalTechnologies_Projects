import React, { useContext } from 'react';
import { FormContext } from '../reusable/FormContext';
import DisplayText from '../reusable/DisplayText';
import { Link } from 'react-router-dom';

const Display = () => {
  const { formData } = useContext(FormContext);

  return (
    <div className='mt-10 min-h-[700px] bg-pink-200 w-full flex text-[#1d0b19]'>
      <div className='mx-auto sm:w-[675px] md:w-[810px] lg:w-[1024px] flex flex-col justify-center items-center p-2 sm:p-4'>

        {/* Heading */}
        <div className='underline underline-offset-2 text-center font-bold text-lg sm:text-2xl pb-4'>Displaying the details of the filled form</div>

        {/* Body */}
        {formData.pan.length === 10 ? (
          <div className='flex flex-col bg-pink-50 rounded-lg shadow-[4px_4px_4px_black] hover:shadow-[6px_6px_8px_black]'>
            <DisplayText headingText={'Name'} bodyTexts={[formData.firstname, formData.lastname]} />
            <DisplayText headingText={'Username'} bodyTexts={[formData.username]} />
            <DisplayText headingText={'Email'} bodyTexts={[formData.email]} />
            <DisplayText headingText={'Password'} bodyTexts={[formData.password]} />
            <DisplayText headingText={'Phone'} bodyTexts={[`+${formData.countryCode}`, formData.phone]} />
            <DisplayText headingText={'Location'} bodyTexts={[`${formData.city},`, formData.country]} />
            <DisplayText headingText={'PAN Card Number'} bodyTexts={[formData.pan]} />
            <DisplayText headingText={'Aadhar Number'} bodyTexts={[formData.aadhar]} />
          </div>
        ) : (
          <div className='flex flex-row flex-wrap gap-2 justify-center text-center'>
            <p>Looks like you haven't filled the form yet!</p>
            <Link
              to={'/'}
              className='underline underline-offset-4 hover:font-bold'
            >Click here</Link>
            <p>to fill the form</p>
          </div>
        )}

        {/* Thank you message */}
        {formData.pan.length === 10 ? (
          <div className='mt-8 font-bold text-lg text-center bg-[#1e0823] text-pink-100 px-2 py-1 rounded-lg'>Thank you ✨ for viewing my page</div>
        ) : (
          <div className='mt-8 font-bold text-lg text-center bg-[#1e0823] text-pink-100 px-2 py-1 rounded-lg'>Your patience is appreciated</div>
        )}
      </div>
    </div>
  )
}

export default Display;
