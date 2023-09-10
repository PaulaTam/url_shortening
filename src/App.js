import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { ShortenLinks } from './js/components/short_api';
import { LinkBar } from './js/components/linkbar';

function App() {

  const [input, setInput] = useState("");

  return (
    <>
      <LinkBar setInput={setInput}/>
      <ShortenLinks input={input} />
    </>
  );
}

export default App;
