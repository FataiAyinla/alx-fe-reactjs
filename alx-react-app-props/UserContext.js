import { createContext } from 'react';

const UserContext = createContext();

export default UserContext;

import UserInfo from './UserInfo';

function ProfilePage({ userData }) {
  return <UserInfo userData={userData} />;
}

export default ProfilePage;

