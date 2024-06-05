import React, { useEffect, useState } from 'react';
import { Country, City } from 'country-state-city';

const CountryCitySelect = ({ country, setCountry, city, setCity }) => {
  const [countryOptions, setCountryOptions] = useState([]);
  const [cityOptions, setCityOptions] = useState([]);

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
      const cities = City.getCitiesOfCountry(country.value);
      const formattedCities = cities.map(city => ({
        value: city.name,
        label: city.name,
      }));
      setCityOptions(formattedCities);
    } else {
      setCityOptions([]);
    }
  }, [country]);

  const handleCountryChange = (e) => {
    const selectedCountry = countryOptions.find(option => option.value === e.target.value);
    setCountry(selectedCountry);
  };

  const handleCityChange = (e) => {
    const selectedCity = cityOptions.find(option => option.value === e.target.value);
    setCity(selectedCity);
  };

  return (
    <div className='grid grid-cols-2 gap-2 w-full'>
      <div className='flex flex-col gap-1 '>
        <label htmlFor='country'>Country</label>
        <select
          id='country'
          className=''
          value={country ? country.value : ''}
          onChange={handleCountryChange}
        >
          <option value='' disabled>Select Country</option>
          {countryOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
      <div className='flex flex-col gap-1'>
        <label htmlFor='city'>City</label>
        <select
          id='city'
          className=''
          value={city ? city.value : ''}
          onChange={handleCityChange}
          disabled={!country}
        >
          <option value='' disabled>Select City</option>
          {cityOptions.map(option => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default CountryCitySelect;
