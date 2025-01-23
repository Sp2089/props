import React from 'react';
import UserProfile from './Userprofile';
import './style.css'

function App() {
  const user = {
    name: 'Sujal Patel',
    age: 19,
    location: 'Surat',
    bio: 'Passionate Web Developer'
  };

  return (
    <div className="App">
      <h1>User Profile</h1>
      <UserProfile 
        name={user.name} 
        age={user.age} 
        location={user.location} 
        bio={user.bio} 
      />
    </div>
  );
}

export default App;
