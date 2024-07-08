import React from 'react';
import Image from 'next/image';

const Profile = () => {
  return (
    <div className="profile">
      <div className="banner">
      <img src="https://media.licdn.com/dms/image/C5616AQH1FKB15wIbzQ/profile-displaybackgroundimage-shrink_350_1400/0/1640230191771?e=1726099200&v=beta&t=rvrKIkfHZXW8RU82joD9q7D-2kpeAPWn9veA5JScirs" alt="Banner" />

         </div>
      <div className="profile-info">
        <div className="profile-pic">
          <Image src="/path/to/your/profile-pic.jpg" alt="Profile Picture" width={150} height={150} className="profile-pic-img" />
        </div>
        <div className="info">
          <h1>Shubham Lakhara</h1>
          <p>Prefer Not To Say</p>
          <p>Location, Date</p>
        </div>
        <div className="social-media">
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
          <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">YouTube</a>
          <a href="https://medium.com" target="_blank" rel="noopener noreferrer">Medium</a>
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a>
        </div>
      </div>
      <div className="about-me">
        <h2>About Me</h2>
        <p>Write something about yourself here.</p>
      </div>
    </div>
  );
};

export default Profile;
