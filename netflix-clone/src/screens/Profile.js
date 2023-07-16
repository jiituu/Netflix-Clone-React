import React from 'react';
import "./Profile.css";
import Nav from '../Nav';
import { auth } from '../firebase';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Profile() {
  const user = useSelector(selectUser);

  const handleSignOut = () => {
    auth.signOut();
  };

  return (
    <div className='profile'>
      <Nav />
      <div className="profile__body">
        <h1>
          Edit Profile
          <div className="profile__info">
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png' alt="profile"/>
            <div className="profile__details">
              <h2>{user.email}</h2>
              <div className="profile_plans">
                <button onClick={handleSignOut} className='profile_signout'>Sign out</button>
              </div>
            </div>
          </div>
        </h1>
      </div>
    </div>
  );
}

export default Profile;