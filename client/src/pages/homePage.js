import React from "react";
import Greeting from "../components/greeting";
import BoredApi from "../components/RandomActivity";
import EveryPageLayout from "../layouts/EveryPage";

const HomePage = () => {
  return (
    <EveryPageLayout>
      <div className="flex flex-col h-screen bg-girl bg-cover">
      <Greeting/>
      <BoredApi/>
      </div>
    </EveryPageLayout>
  )
};

export default HomePage;
