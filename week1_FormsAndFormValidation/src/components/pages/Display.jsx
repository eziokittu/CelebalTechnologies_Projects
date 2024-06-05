import React, { useContext } from 'react';
import { FormContext } from '../reusable/FormContext';

const Display = () => {
  const { formData } = useContext(FormContext);

  return (
    <div className='mt-10 min-h-[700px] bg-blue-100 w-full flex'>
      <div className='mx-auto sm:w-[675px] md:w-[810px] lg:w-[1024px] flex flex-col justify-center items-center'>
        <div>This is the page which displays all form details</div>
        <div className='flex flex-col'>
          <div>First Name: {formData.firstname}</div>
          <div>Last Name: {formData.lastname}</div>
          <div>Username: {formData.username}</div>
          <div>Email: {formData.email}</div>
          <div>Phone: {formData.phone}</div>
          <div>Country Code: {formData.countryCode}</div>
          <div>Country: {formData.country}</div>
          <div>City: {formData.city}</div>
          <div>PAN: {formData.pan}</div>
          <div>Aadhar: {formData.aadhar}</div>
        </div>
      </div>
    </div>
  )
}

export default Display;
