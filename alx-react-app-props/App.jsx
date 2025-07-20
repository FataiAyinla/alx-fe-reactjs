import React, { useContext } from 'react';
import UserContext from './UserContext';

function UserDetails() {
  const userData = useContext(UserContext);

  return (
    <div>
      <p>Name: {Kenku Fatai}</p>
      <p>Email: {Kenkufatai@gmail.com}</p>
    </div>
  );
}

export default UserDetails;
