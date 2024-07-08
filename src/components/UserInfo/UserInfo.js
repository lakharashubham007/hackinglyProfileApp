'use client'
// components/UserInfo/UserInfo.js
import { useState } from 'react';
import styles from './UserInfo.module.css';

const UserInfo = () => {
  const [profilePicture, setProfilePicture] = useState('https://media.licdn.com/dms/image/D4D03AQEga_9GeIhmFg/profile-displayphoto-shrink_400_400/0/1718673084190?e=1726099200&v=beta&t=IKrRPowio8r-2bK6mRF98JPdGSrf_5OTSIhiLUeYs14');
  const [bannerImage, setBannerImage] = useState('/images/default-banner.png');
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');

  const handleProfilePictureUpload = (event) => {
    const file = event.target.files[0];
    setProfilePicture(URL.createObjectURL(file));
  };

  const handleBannerImageUpload = (event) => {
    const file = event.target.files[0];
    setBannerImage(URL.createObjectURL(file));
  };

  return (
    <div className={styles.userInfo}>
      <div className={styles.banner}>
        <img src={bannerImage} alt="Banner" className={styles.bannerImage} />
        <input type="file" onChange={handleBannerImageUpload} className={styles.uploadButton} />
      </div>
      <div className={styles.profile}>
        <img src={profilePicture} alt="Profile" className={styles.profilePicture} />
        <input type="file" onChange={handleProfilePictureUpload} className={styles.uploadButton} />
        <h1>{name}</h1>
        <p>{email}</p>
      </div>
    </div>
  );
};

export default UserInfo;
