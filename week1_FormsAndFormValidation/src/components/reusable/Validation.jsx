// validation.js
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/;
const nameRegex = /^[a-zA-Z]+$/;
const panRegex = /^[A-Z]{5}[0-9]{4}[A-Z]{1}$/;
const aadharRegex = /^[2-9]{1}[0-9]{11}$/;
const countryCodeRegex = /^\+\d{1,3}$/;
const phoneRegex = /^\d{10}$/;

// Function to validate email
export const validateEmail = (email) => {
  if (!email.trim() || !emailRegex.test(email)) {
    return 'Enter a valid email';
  }
  return null;
};

// Function to validate password
export const validatePassword = (password) => {
  if (!password.trim() || !passwordRegex.test(password)) {
    return 'Enter a valid password';
  }
  return null;
};

// Function to validate name
export const validateName = (name, fieldName) => {
  if (!name.trim() || !nameRegex.test(name)) {
    return `Enter a valid ${fieldName}`;
  }
  return null;
};

// Function to validate PAN card number
export const validatePan = (pan) => {
  if (!pan.trim() || !panRegex.test(pan)) {
    return 'Enter a valid PAN card number';
  }
  return null;
};

// Function to validate Aadhar number
export const validateAadhar = (aadhar) => {
  if (!aadhar.trim() || !aadharRegex.test(aadhar)) {
    return 'Enter a valid Aadhar number';
  }
  return null;
};

// Function to validate phone number's country code
export const validateCountryCode = (countryCode) => {
  if (!countryCodeRegex.test(countryCode)) {
    return 'Enter a valid country code';
  }
  return null;
};

// Function to validate phone number
export const validatePhone = (phone) => {
  if (!phone.trim() || !phoneRegex.test(phone)) {
    return 'Enter a valid phone number';
  }
  return null;
};

// Function to validate country
export const validateCountry = (country) => {
  if (country === '') {
    return 'Enter a valid country';
  }
  return null;
};

// Function to validate country
export const validateCity = (city) => {
  if (city === '') {
    return 'Enter a valid city';
  }
  return null;
};
