import './App.css';

import { useState } from 'react';
import { ShortenLinks } from './js/components/short_api';
import { LinkBar } from './js/components/linkbar';
import { Banner } from './js/components/banner';
import { Footer } from './js/components/footer';
import { NavBar } from './js/components/nav';

import GithubCorner from 'react-github-corner';

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
    <Footer />
    <GithubCorner size="100" href="https://github.com/PaulaTam/url_shortening" />
    </>
  );
}

export default App;
