import React from "react";

import Header from '../Header/Header.js';
import Routers from '../../router/Routers.js'; // Ensure path and capitalization are correct
import Footer from '../Footer/Footer.js';

const Layout = () => {
    return (
      <>
         <Header />
         <Routers />
         <Footer />
      </>
    );
};

export default Layout;
