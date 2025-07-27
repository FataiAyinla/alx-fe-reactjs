// src/App.jsx
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

import UserProfile from './components/UserProfile';

...

<UserProfile 
  name="Alice" 
  age="25" 
  bio="Loves hiking and photography" 
/>
// src/App.jsx
import ProfilePage from './ProfilePage';
import UserContext from './UserContext';

function App() {
  // The shared data
  const userData = {
    name: "Jane Doe",
    email: "jane.doe@example.com"
  };

  // Provide it to the entire component tree
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage />
    </UserContext.Provider>
  );
}

export default App;
