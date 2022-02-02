import React from 'react';
import About from './components/About';
import Nav from './components/Nav';


function App() {
  return (
    <div>
        <Nav></Nav>
        <main>
            <About></About>
        </main>
    </div>
);

function Nav() {
  return (
    <header>
      <h2>
    <a href="/">
      <span role="img" aria-label="camera"> 📸</span> Oh Snap!
    </a>
  </h2>
  <nav>
    <ul className="flex-row">
      <li className="mx-2">
        <a href="#about">
          About me
        </a>
      </li>
      <li>
        <span>Contact</span>
      </li>
    </ul>
  </nav>
    </header>
  );
}
}

export default App;
