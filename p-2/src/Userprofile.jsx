import React from 'react';
import './userprofile.css'

function UserProfile({ name, age, location, bio }) {
  return (
    <div className="UserProfile">
      <h2>{name}</h2>
      <p><strong>Age:</strong> {age}</p>
      <p><strong>Location:</strong> {location}</p>
      <p><strong>Bio:</strong> {bio}</p>
    </div>
  );
}

export default UserProfile;
