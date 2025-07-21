import React, { useContext } from 'react';
import Usercontext from './UserContext';

function UserProfile() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
    </div>
  );
}

export default UserProfile;

// src/UserContext.js
import { createContext } from 'react';

const UserContext = createContext(null);

export default UserContext;

