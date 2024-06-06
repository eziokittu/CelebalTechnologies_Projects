import React, { useEffect, useState } from 'react';
import { Country, City } from 'country-state-city';

const CountryCitySelect = ({ country, setCountry, city, setCity }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);
  const [isCityLoading, setIsCityLoading] = useState(false);

  useEffect(() => {
    const countries = Country.getAllCountries();
    const formattedCountries = countries.map(country => ({
      value: country.isoCode,
      label: country.name,
    }));
    setCountryOptions(formattedCountries);
  }, []);

  useEffect(() => {
    if (country) {
      // Reset cityOptions and set loading state before fetching new cities
      setCityOptions([]);
      setIsCityLoading(true);

      const cities = City.getCitiesOfCountry(country.value);
      const formattedCities = cities.map(city => ({
        value: city.name,
        label: city.name,
      }));

      setCityOptions(formattedCities);
      setCity(null); // Reset city when country changes
      setIsCityLoading(false); // Set loading state to false after updating city options
      // console.log("DEBUG 1");
    } else {
      setCityOptions([]);
      setCity(null); // Reset city when no country is selected
      // console.log("DEBUG 2");
    }
  }, [country, setCity]);

  const handleCountryChange = (e) => {
    const selectedCountry = countryOptions.find(option => option.value === e.target.value);
    setCountry(selectedCountry);
    setCityOptions([]);
  };

  const handleCityChange = (e) => {
    const selectedCity = cityOptions.find(option => option.value === e.target.value);
    setCity(selectedCity);
  };

  return (
    <div className='grid grid-cols-2 gap-2 w-full'>
      <div className='flex flex-col gap-1'>
        <label htmlFor='country'>Country</label>
        <select
          id='country'
          className='rounded-lg px-2 py-1 bg-pink-100 text-[#1e0823] border-2 border-pink-300 focus:outline-none focus:border-pink-600 focus:bg-pink-50 appearance-none custom-select-icon'
          value={country ? country.value : ''}
          onChange={handleCountryChange}
        >
          <option value='' disabled>Select Country</option>
          {countryOptions.map((option, num) => (
            <option
              key={`country_${option.value}_${num}`}
              value={option.value}
              className='text-purple-950 bg-pink-100'
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='city'>City</label>
        <select
          id='city'
          className='rounded-lg px-2 py-1 bg-pink-100 disabled:bg-pink-200 text-[#1e0823] border-2 border-pink-300 focus:outline-none focus:border-pink-600 focus:bg-pink-50 appearance-none custom-select-icon'
          value={city ? city.value : ''}
          onChange={handleCityChange}
          disabled={!country || isCityLoading}
        >
          <option value='' disabled>Select City</option>
          {cityOptions.map((option, num) => (
            <option 
              key={`city_${option.value}_${num}`} 
              value={option.value}
              className='text-purple-950 bg-pink-100'
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryCitySelect;
