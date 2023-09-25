import './App.css';

import { useState } from 'react';
import { ShortenLinks } from './js/components/short_api';
import { LinkBar } from './js/components/linkbar';
import { Banner } from './js/components/banner';
import { NavBar } from './js/components/nav';

function App() {

  const [input, setInput] = useState("");

  return (
    <>
    <NavBar />
    <div className="wrapper">
      <Banner />
      <div className="app-container">
        <LinkBar setInput={setInput}/>
        <ShortenLinks input={input} />
      </div>

    </div>
    </>
  );
}

export default App;
