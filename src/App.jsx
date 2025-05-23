import Homepage from '../components//Home'
import AboutUs from '../components/About';
import Contact from '../components/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        
      </Routes>
    </BrowserRouter>
  );
};

export default App;
