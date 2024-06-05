import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../reusable/FormContext';
import FormInput from '../reusable/FormInput';
import ErrorOverlay from '../ErrorOverlay';
import CountryCitySelect from '../reusable/CountryCitySelect';
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';
import {
  validateName,
  validateAadhar,
  validateCountryCode,
  validateEmail,
  validatePan,
  validatePassword,
  validatePhone,
  validateCountry,
  validateCity
} from '../reusable/Validation';

const Form = () => {
  // For error overlay
  const [error, setError] = useState(false);
  const [errorHeading, setErrorHeading] = useState('Invalid Input Error');
  const [errorBody, setErrorBody] = useState([]);
  const DisplayError = () => {
    setError(true);
  };
  const HandleError = () => {
    setError(false);
  };

  // Handling inputs
  const [countryCode, setCountryCode] = useState('+91');
  const [country, setCountry] = useState('');
  const [city, setCity] = useState('');
  const { formData, setFormData } = useContext(FormContext);
  const [input, setInput] = useState({
    firstname: formData.firstname,
    lastname: formData.lastname,
    username: formData.username,
    email: formData.email,
    password: formData.password,
    phone: formData.phone,
    countryCode: formData.countryCode,
    country: formData.country,
    city: formData.city,
    pan: formData.pan,
    aadhar: formData.aadhar,
  });
  const HandleInput = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  // Form validating inputs
  const validateForm = () => {
    let alerts = [];

    const emailError = validateEmail(input.email);
    if (emailError) alerts.push(emailError);

    const passwordError = validatePassword(input.password);
    if (passwordError) alerts.push(passwordError);

    const phoneError = validatePhone(input.phone);
    if (phoneError) alerts.push(phoneError);

    const firstnameError = validateName(input.firstname, 'first name');
    if (firstnameError) alerts.push(firstnameError);

    const lastnameError = validateName(input.lastname, 'last name');
    if (lastnameError) alerts.push(lastnameError);

    const usernameError = validateName(input.username, 'user name');
    if (usernameError) alerts.push(usernameError);

    const countryError = validateCountry(country);
    if (countryError) alerts.push(countryError);

    const cityError = validateCity(city);
    if (cityError) alerts.push(cityError);

    const panError = validatePan(input.pan);
    if (panError) alerts.push(panError);

    const aadharError = validateAadhar(input.aadhar);
    if (aadharError) alerts.push(aadharError);

    const countryCodeError = validateCountryCode(countryCode);
    if (countryCodeError) alerts.push(countryCodeError);

    return alerts;
  };

  // Submitting the form
  const navigate = useNavigate();
  const FormSubmitHandler = (e) => {
    e.preventDefault();
    
    // if there are validation errors then error overlay is rendered
    const validationAlerts = validateForm(input);
    if (validationAlerts.length > 0) {
      setErrorBody(validationAlerts);
      DisplayError();
      return;
    }

    // Add country and city to form data
    const formDataWithLocationAndPhone = {
      ...input,
      country: country ? country.label : '',
      city: city ? city.label : '',
      countryCode: countryCode,
    };

    // updating the context variables with the local variables since there are no validation errors
    setFormData(formDataWithLocationAndPhone);
    
    // Routing to the display page
    navigate('/display');
  };

  return (
    <div className='mt-10 min-h-[700px] bg-[#eca4fa] flex '>

      {/* Page Contents */}
      <div className='mx-auto 2xsm:w-[290px] xsm:w-[390px] sm:w-[430px] md:w-[500px] flex flex-col justify-center items-center'>

        {/* Form Heading */}
        <p>Week 1 - Form and Form Validation</p>

        {/* FORM Body */}
        <form onSubmit={FormSubmitHandler} className='flex flex-col gap-2'>

          {/* Name input */}
          <div className='grid grid-cols-2 gap-2 '>
            {/* firstname */}
            <FormInput inputName='firstname' HandleInput={HandleInput} value={input.firstname} />

            {/* lastname */}
            <FormInput inputName='lastname' HandleInput={HandleInput} value={input.lastname} />
          </div>

          {/* Username input */}
          <FormInput inputName='username' HandleInput={HandleInput} value={input.username} />

          {/* Email input */}
          <FormInput inputName='email' HandleInput={HandleInput} value={input.email} />

          {/* Password input */}
          <FormInput inputName='password' HandleInput={HandleInput} value={input.password} isPassword={true}/>

          {/* Phone */}
          <div className='grid grid-cols-2 sm:grid-cols-3 gap-2'>

            {/* Phone Country code */}
            <div className='col-span-1 flex flex-col gap-1'>
              <label
                className=''
              >Country code</label>
              <PhoneInput
                className=""
                international
                defaultCountry="IN"
                value={countryCode}
                onChange={setCountryCode}
                maxLength={4}
              />
            </div>

            {/* Phone number */}
            <div className='sm:col-span-2'>
              <FormInput inputName='phone' HandleInput={HandleInput} value={input.phone} isPhone={true} />
            </div>

          </div>

          {/* Country and City Selection */}
          <div className=''>
            <CountryCitySelect
              country={country}
              setCountry={setCountry}
              city={city}
              setCity={setCity}
            />
          </div>

          {/* PAN number input */}
          <FormInput inputName='pan' HandleInput={HandleInput} value={input.pan} />

          {/* Aadhar number input */}
          <FormInput inputName='aadhar' HandleInput={HandleInput} value={input.aadhar} />

          {/* Submit Button */}
          <button type="submit">Submit</button>

        </form>

      </div>

      {/* Error / Warning / Message overlay  */}
      {error && (<ErrorOverlay handleError={HandleError} errorHeading={errorHeading} errorBody={errorBody} />)}

    </div>
  );
};

export default Form;
