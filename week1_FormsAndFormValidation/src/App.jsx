import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FormProvider } from './components/reusable/FormContext';
import Display from './components/pages/Display';
import Form from './components/pages/Form';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

const App = () => {
  return (
    <FormProvider>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/form" element={<Form />} />
          <Route exact path="/display" element={<Display />} />

          {/* Did not create an error 404 page, so every other route displays the form */}
          <Route path="*" element={<Form />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </FormProvider>
  )
}

export default App;

// Website is hosted on NETLIFY - https://bodhisatta1999-celebaltech-week1.netlify.app