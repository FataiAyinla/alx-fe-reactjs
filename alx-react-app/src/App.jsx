// App.jsx
import React from 'react';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <Header />
      <WelcomeMessage />
      <MainContent />
      <Footer />
    </>
  );
}

export default App;
