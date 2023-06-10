import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from './component/shared/Nav';
import Footer from './component/shared/Footer';
// import Home from './component/Home';
import HelpCenter from './component/HelpCenter';
// import WelcomeWawride from './component/WelcomeWawride';
// import WawrideCardPage from './component/WawrideCardPage';
// import WawrideCardDetail from './component/WawrideCardDetail';
// import WawrideDetail from './component/WawrideDetail';

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Nav />
        {/* Page 2 */}
        <HelpCenter/>

        {/* WelcomeWawrides Page 6 */}
        {/* <WelcomeWawride/> */}

        {/* WawrideCardPage Page 7 */}
        {/* <WawrideCardPage /> */}

        {/* Wawride Card Detail Page 8 */}
        {/* <WawrideCardDetail /> */}

        {/* Wawride Card Detail Page 9 */}
        {/* <WawrideDetail/> */}

        {/* Wawride Card Detail Page 10 */}

        <Routes>
          {/* <Route path='/' element={<Home />} /> */}
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