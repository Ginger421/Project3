import React, { Children } from "react";
import Footer from "../components/footer";
import Header from "../components/NavBar";
//import Hero from './../../assests/her.jpg';

const EveryPageLayout = ({children}) => {
  return (
    <div className="flex flex-col LandingPageLayout">
      <Header/>
      <div className="flex container">
        {children}
      </div>
      <Footer/>
    </div>
  );
};

export default EveryPageLayout;
