import React, { useState, useEffect } from 'react';
import countryTelData from 'country-telephone-data';

const PhoneCountryCodeSelect = ({ value, handleValue }) => {
  const [countryCode, setCountryCode] = useState('91');
  const [countryOptions, setCountryOptions] = useState([]);

  useEffect(() => {
    const options = countryTelData.allCountries.map((country) => ({
      value: country.dialCode,
      label: `${country.name} (+${country.dialCode})`,
    }));
    setCountryOptions(options);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountryCode = e.target.value;
    setCountryCode(selectedCountryCode);
    handleValue(selectedCountryCode);
  };

  return (
    <div className='col-span-1 flex flex-col gap-1'>
      <label className=''>Country code</label>
      <div className="w-full">
        <select
          className="w-full rounded-lg px-2 py-1 bg-pink-100 text-[#1e0823] border-2 border-pink-300 focus:outline-none focus:border-pink-600 focus:bg-pink-50 appearance-none custom-select-icon"
          value={countryCode}
          onChange={handleCountryChange}
        >
          <option value='' disabled>Select Country Code</option>
          {countryOptions.map((option, index) => (
            <option
              key={`country_${option.value}_${index}`}
              value={option.value}
              className="text-purple-950 bg-pink-100"
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default PhoneCountryCodeSelect;
