import React from 'react';

const userProfile = (props) => {
  return (
    <div> style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{props.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{props.age}</span></p>
      <p>Bio: {props.bio}</p>
    </div>
  );
};

  import React, { useContext } from 'react';
import userContext from '../UserContext';

const UserProfile = () => {
  const user = useContext(UserContext);

  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h2>{user.name}</h2>
      <p>Age: <span style={{ fontWeight: 'bold' }}>{user.age}</span></p>
      <p>Bio: {user.bio}</p>
    </div>
  );
};

export default UserProfile;
