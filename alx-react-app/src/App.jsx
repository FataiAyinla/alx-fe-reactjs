import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage/>
      <MainContent />
      <Footer />
    </>
  );
}

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

