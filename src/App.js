import React from "react";
import HomePage from "./pages/HomePage";
import About from './pages/About'
import NewsLetter from './components/newsletter/newsletter'
import ManyServiceCards from './components/servicecard/ManyServiceCards'
const App = () => {
  return (
    <div>
      <HomePage />
      <About/>
      <ManyServiceCards/>
      <NewsLetter />
    </div>
  );
};

export default App;
