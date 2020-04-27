import React from "react";
import HomePage from "./pages/HomePage";
import About from './pages/About'
import ManyServiceCards from './components/servicecard/ManyServiceCards'
const App = () => {
  return (
    <div>
      <HomePage />
      <About/>
      <ManyServiceCards/>
    </div>
  );
};

export default App;
