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
