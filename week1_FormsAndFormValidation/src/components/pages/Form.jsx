import React, { useState, useContext, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FormContext } from '../reusable/FormContext';
import FormInput from '../reusable/FormInput';
import ErrorOverlay from '../DisplayOverlay';
import CountryCitySelect from '../reusable/CountryCitySelect';
import PhoneCountryCodeSelect from '../reusable/PhoneCountryCodeSelect';
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
  const [overlay, setOverlay] = useState(false);
  const [overlayType, setOverlayType] = useState('error');
  const [overlayHeading, setOverlayHeading] = useState('Invalid Input Error');
  const [overlayBody, setOverlayBody] = useState([]);
  const DisplayOverlay = () => {
    setOverlay(true);
  };
  const HandleExitOverlay = () => {
    setOverlay(false);
  };

  // Showing information
  const infoHandler = (e) => {
    // if (e.name === 'password') {
      setOverlayType('info');
      setOverlayHeading("Information - Password");
      let rules = [];
      rules.push('Minimum length: 8');
      rules.push('Maximum length: 32');
      rules.push('At least 1 uppercase');
      rules.push('At least 1 lowercase');
      rules.push('At least 1 number');
      rules.push('At least 1 special character');
      setOverlayBody(rules);
      setOverlay(true);
      return;
    // }
  }

  // Handling inputs
  const [countryCode, setCountryCode] = useState('+91');
  const [country, setCountry] = useState(null);
  const [city, setCity] = useState(null);
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

    if (name !== 'password') {
      setInput({ ...input, [name]: value.trim() });
    }
    else {
      setInput({ ...input, [name]: value });
    }
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
      setOverlayBody(validationAlerts);
      DisplayOverlay();
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
    <div className='mt-8 py-8 min-h-[700px] bg-[#230c29] text-pink-100 flex '>

      {/* Page Contents */}
      <div className='mx-auto 2xsm:w-[290px] xsm:w-[390px] sm:w-[430px] md:w-[500px] flex flex-col justify-center items-center my-auto h-fit bg-black/20 px-2 pt-8 rounded-lg shadow-[0_0_50px_pink] shadow-[#5c274d]'>

        {/* Form Heading */}
        <p className='text-lg sm:text-2xl'>Week 1 - Form and Form Validation</p>

        {/* FORM Body */}
        <form onSubmit={FormSubmitHandler} className='flex flex-col gap-2 my-8'>

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
          <FormInput inputName='password' HandleInput={HandleInput} value={input.password} isPassword={true} hasInfo={true} infoHandler={infoHandler}/>

          {/* Phone */}
          <div className='grid grid-cols-2 gap-2'>

            {/* Phone Country code */}
            <PhoneCountryCodeSelect value={countryCode} handleValue={setCountryCode} />

            {/* Phone number */}
            <FormInput inputName='phone' HandleInput={HandleInput} value={input.phone} isPhone={true} />

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
          <button type="submit" className='text-lg sm:text-2xl mx-auto w-fit mt-8 px-8 py-2 rounded-lg bg-pink-100 hover:bg-pink-300 text-purple-900 hover:text-[#230c29] transition-colors duration-300 font-bold'>Submit</button>

        </form>

      </div>

      {/* Error / Warning / Message overlay  */}
      {overlay && (<DisplayOverlay handleOkay={HandleExitOverlay} overlayHeading={overlayHeading} overlayBody={overlayBody} type={overlayType} />)}

    </div>
  );
};

export default Form;
