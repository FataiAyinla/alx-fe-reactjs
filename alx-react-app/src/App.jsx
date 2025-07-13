
export default App;
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
      <WelcomeMessage/>
    </>
  );
}

export default App;

// src/App.jsx
import React from 'react';
import WelcomeMessage from './components/WelcomeMessage'; // <- Correct import

function App() {
  return (
    <div>
      <WelcomeMessage /> {/* <- Correct usage */}
    </div>
  );
}

export default App;

import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;

import React from 'react';

function Footer() {
  return (
    <footer>
      <p>© 2023 City Lovers</p>
    </footer>
  );
}

export default Footer;

import React from 'react';

function MainContent() {
  return (
    <main>
      <p>I love to visit New York, Paris, and Tokyo.</p>
    </main>
  );
}

export default MainContent;

import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent'; // ✅ Required!
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

