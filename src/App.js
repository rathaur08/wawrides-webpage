import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/shared/Nav';
import Footer from './component/shared/Footer';
import Home from './component/Home';
// import HelpCenter from './component/HelpCenter';
// import WelcomeWawride from './component/WelcomeWawride';
// import WawrideCardPage from './component/WawrideCardPage';
// import WawrideCardDetail from './component/WawrideCardDetail';
// import WawrideDetail from './component/WawrideDetail';
// import WawrideBlog from './component/WawrideBlog';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        {/* Page 2 */}  {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <HelpCenter/>   */}

        {/* WelcomeWawrides Page 6 */} {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <WelcomeWawride /> */}

        {/* WawrideCardPage Page 7 */} {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <WawrideCardPage /> */}

        {/* WawrideCardDetail Page 8 */}  {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <WawrideCardDetail /> */}

        {/* WawrideDetail Page 9 */} {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <WawrideDetail /> */}

        {/* Wawride Blog Page 10 */} {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
        {/* <WawrideBlog /> */}

        <Routes>
          {/* Wawride HOME Page 1 */}  {/* ⭐⭐PAGE⭐DONE⭐⭐ */}
          <Route path='/' element={<Home />} /> 
          <Route path='/about' element={<div><h1> This is about Page</h1></div>} />
          <Route path='/login' element={<div><h1> This is login Page</h1></div>} />
          <Route path='/signup' element={<div><h1> This is SIGNUP Page</h1></div>} />
          <Route path='/contact' element={<div><h1> This is contact Page</h1></div>} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  )
}
export default App