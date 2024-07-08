// import styles from './ProfileBanner.module.css';

// const ProfileBanner = () => {
//   return (
//     <div className={styles.profileBanner}>
//       <img src="https://media.licdn.com/dms/image/C5616AQH1FKB15wIbzQ/profile-displaybackgroundimage-shrink_350_1400/0/1640230191771?e=1726099200&v=beta&t=rvrKIkfHZXW8RU82joD9q7D-2kpeAPWn9veA5JScirs" alt="Banner" />
//     </div>
//   );
// };

// export default ProfileBanner;

'use client'

import { useState, useEffect } from 'react';
import styles from './ProfileBanner.module.css';

const ProfileBanner = () => {
  const [bannerSrc, setBannerSrc] = useState(
    localStorage.getItem('bannerImage') || 'https://media.licdn.com/dms/image/C5616AQH1FKB15wIbzQ/profile-displaybackgroundimage-shrink_350_1400/0/1640230191771?e=1726099200&v=beta&t=rvrKIkfHZXW8RU82joD9q7D-2kpeAPWn9veA5JScirs'
  );

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    
    reader.onload = () => {
      const result = reader.result;
      setBannerSrc(result);
      localStorage.setItem('bannerImage', result);
    };
    
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className={styles.profileBanner}>
      <img src={bannerSrc} alt="Banner" />
      <input 
        type="file" 
        id="bannerInput" 
        className={styles.fileInput} 
        accept="image/*" 
        onChange={handleFileChange} 
      />
      <button 
        className={styles.editButton} 
        onClick={() => document.getElementById('bannerInput').click()}
      >
        <img src="data:image/png;base64,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" alt="Edit" />
      </button>
    </div>
  );
};

export default ProfileBanner;
