import './App.css';
import { useState } from 'react';
import { ShortenLinks } from './js/components/short_api';
import { LinkBar } from './js/components/linkbar';

function App() {

  const [input, setInput] = useState("");

  return (
    <>
    <div className="wrapper">
      <div className="app-container">
        <LinkBar setInput={setInput}/>
        <ShortenLinks input={input} />
      </div>
    </div>
    </>
  );
}

export default App;
