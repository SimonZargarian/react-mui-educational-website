import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Box from '@mui/material/Box';

// Import MenuBar and other components
import About from './components/about/About';
import CourseHome from './components/allcourses/CourseHome';
import Team from './components/team/Team';
import Pricing from './components/pricing/Pricing';
import Blog from './components/blog/Blog';
import Contact from './components/contact/Contact';
import Footer from './components/common/footer/Footer';
import Home from './components/home/Home';
import MenuBar from './MenuBar';
import "./App.css"
import Head from './components/common/header/Head';

function App() {
  return (
    <>
      <Router>
        <Head/>
        {/* Use MenuBar instead of AppBar */}
        <MenuBar />

        <Box sx={{ mt: '0px' }}> {/* Adjust marginTop if needed based on your MenuBar's height + specified marginTop */}
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/courses' element={<CourseHome />} />
            <Route path='/team' element={<Team />} />
            <Route path='/pricing' element={<Pricing />} />
            <Route path='/journal' element={<Blog />} />
            <Route path='/contact' element={<Contact />} />
          </Routes>
        </Box>

        <Footer />
      </Router>
    </>
  );
}

export default App;
