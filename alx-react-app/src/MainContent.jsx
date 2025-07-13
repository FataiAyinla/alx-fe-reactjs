// src/components/MainContent.jsx
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
