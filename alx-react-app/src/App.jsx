import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;

import React from 'react';

function WelcomeMessage() {
  return (
    <section>
      <h2>Welcome to My Favorite Cities App!</h2>
    </section>
  );
}

export default WelcomeMessage;

import WelcomeMessage from './components/WelcomeMessage';

import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
