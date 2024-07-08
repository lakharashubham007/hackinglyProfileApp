'use client'
'use client'
import { useState, useEffect } from 'react';
import styles from './ProfileInfo.module.css';

const ProfileInfo = () => {
  const [profileSrc, setProfileSrc] = useState(localStorage.getItem('profileImage') || 'https://media.licdn.com/dms/image/D4D03AQEga_9GeIhmFg/profile-displayphoto-shrink_400_400/0/1718673084190?e=1726099200&v=beta&t=IKrRPowio8r-2bK6mRF98JPdGSrf_5OTSIhiLUeYs14');
  const [isEditingInfo, setIsEditingInfo] = useState(false);
  const [name, setName] = useState(localStorage.getItem('profileName') || 'Shubham Lakhara');
  const [bio, setBio] = useState(localStorage.getItem('profileBio') || 'Prefer Not To Say');
  const [location, setLocation] = useState(localStorage.getItem('profileLocation') || 'Udaipur, Rajasthan');
  const [rank, setRank] = useState(localStorage.getItem('rank') || '12/1500');

  const [linkedin, setLinkedin] = useState(localStorage.getItem('profileLinkedin') || '');
  const [instagram, setInstagram] = useState(localStorage.getItem('profileInstagram') || '');
  const [youtube, setYoutube] = useState(localStorage.getItem('profileYoutube') || '');
  const [mdn, setMdn] = useState(localStorage.getItem('profileMdn') || '');
  const [github, setGithub] = useState(localStorage.getItem('profileGithub') || '');

  useEffect(() => {
    localStorage.setItem('profileName', name);
  }, [name]);

  useEffect(() => {
    localStorage.setItem('profileBio', bio);
  }, [bio]);

  useEffect(() => {
    localStorage.setItem('profileLocation', location);
  }, [location]);

  useEffect(() => {
    localStorage.setItem('rank', rank);
  }, [rank]);

  useEffect(() => {
    localStorage.setItem('profileLinkedin', linkedin);
  }, [linkedin]);

  useEffect(() => {
    localStorage.setItem('profileInstagram', instagram);
  }, [instagram]);

  useEffect(() => {
    localStorage.setItem('profileYoutube', youtube);
  }, [youtube]);

  useEffect(() => {
    localStorage.setItem('profileMdn', mdn);
  }, [mdn]);

  useEffect(() => {
    localStorage.setItem('profileGithub', github);
  }, [github]);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      const result = reader.result;
      setProfileSrc(result);
      localStorage.setItem('profileImage', result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const handleEditInfo = () => {
    setIsEditingInfo(true);
  };

  const handleSaveInfo = (e) => {
    e.preventDefault();
    setIsEditingInfo(false);
  };

  const handleCloseModal = () => {
    setIsEditingInfo(false);
  };

  return (
    <div className={styles.profileInfo}>
      <div className={styles.profileImageContainer}>
        <img src={profileSrc} alt="Profile" className={styles.profileImage} />
        <input 
          type="file" 
          id="profileInput" 
          className={styles.fileInput} 
          accept="image/*" 
          onChange={handleFileChange} 
        />
        <button 
          className={styles.editImageButton} 
          onClick={() => document.getElementById('profileInput').click()}
        >
          <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAgVBMVEX///8AAADT09MyMjKamprZ2dmqqqp8fHzy8vK2trZlZWX8/PxgYGB2dnb29vZJSUno6OiUlJSkpKRFRUVbW1u/v7+CgoJRUVE+Pj7MzMzq6upqampYWFgmJiYbGxs5OTkNDQ3Dw8OMjIxwcHAXFxewsLAiIiIsLCzf39+Hh4c0NDReW6b3AAAI5ElEQVR4nO2d6XrqIBCGo3WJpkbtolW7GFur7f1f4DlpLQMEEmAGTJ6H71+bFHjLMjOgQ5JERUVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFWav/OFjNduPDsUiv3RQPSkfzHqf9eJNdu0mk2jz3Kvpcbq/dLDJt7qt8Pzrk124aidKphq8crJMwbcjytFaowgs9X6md5+mYDier3frtdV/bigWihmU9YK/3hCm9Qf3l/KOpfizhqrn0D0+I54MRHJJwbFS+hzU1m+hWN1rCCuBp/fzw/CTPiRdyB+B4Y8PnTigBPhzPv9Zh2/96FZ/QsZUqTnZ8zoQi4O7MP8smwsMBBdhFW4V34YdQADz1K8+/CP6JCh3t+RyrFwBvVVav4F54RnL9Kdu5ADoRCoAz9Tt97pVqH7tooZyBT++D0fE4qZGD92gC+N9hhXdIFpuNzNb73E3OzX/nIAFwrH/vDt4iaEgh8+0KX669ALivexOCxgO61keJb+UvOpPtYM2rMBW/sS641IMzj/sIFU/muabxa/YW0mAMhSrfaFYutRS+6IMeEYbWCFVrKnhJB58xmdLZ1pu7DKYNqto1X90GVVSDNNGEfi4+/L0yx1TLR0qvfuzDRdpwSTtQoW2IanlD+OZ1g0sAXA1MehFMIqLeT6iHPhTjJXsywhaGBhGCDPd6+TEaFFBGVA5UAsIzV8nQuRQDqXzRZsQRnvAdqsCZnAapne3GgQovuFbMdeHUtQwT6aKJJkTWATeuNXNd6HMPXR9NCIhVB449enesOYXSj45FmKguHhQQ5WgfXG/XvRqwSW+OJZioPuCtG6gz9sB1FQSHtHAswUBNEb0ekRtijnMI3Jl7twJM1LxloTUa7/V/ZyA4N/A3C032ZDS9WMAvXeOBt78C9t4WUrNNJ3G5ufwyhZMhV1sBxtB1LW6UGaCyFzNu7891iMEGsK91xhRQYTTyJ/j5E1+/awnGFTQByqY/yfnzL+cOYJt1T64l1MsGUO5Fft/htulPdcpZEUvXImplB6g/8v50XgbBnnr5zIMtoBbRfesP7L2PzRl7QA0i4t8P8bMHa+gCqETERK0QP9PvkLoBKhBRYTnbx/okJ3QFrCDi9h1Y6HSiJnQHTLIXOkAgRB/sSMIAfhMCAuENLSECkHfVCLbGPBFiAO9JAT0RYoYobQ96IsQA3hADeiFs0RBNvBBiAOfkgB4I2zQHS5ETtsdMXERN2LIhmpATYoYo/SLzI1rC1rhqnEgJ22UmLqIkbN8cLEVI2DYzcREdIQbwzR8gHWE7h2hCR4jpQa+AVIRtHaIJFWHrXDVOJIStnYOlKAhb6KpxIiBsVURfFZ6wla4aJzRhq+dgKSxhS101TkjC9gMiCVs/RBMkYXtdNU4Ywha7apwQhG03Exe5E3ZhDpZyJmy3q8bJlbCNu2pqORJ2ZYgmroSdMBMXORF2wJMBuRB2CtCFsENzsJQ9YZfmYClrwu6YiYtsCTviqnGyJOzYHCxlR9gZV42TFWE3wiVJNoQdHKKJFWHXzMRF5oSdHKKJBWGbD19qZUrYzTlYypBw5Q7oaiYeRxc9WlVXkRmhkF+wJuWRQs6uGsv3gUzyZUQo5Iaz+6apu6vGcpo6f+PpVyaEi56gO4viEXMwJKHQSitETMAbkLCahM8UERXRhyPkv6hqh4gzE+EIxRSUFohIVy0coTpTazMi1lULRsglPhH6pAkRHdEHI4Tvka3EfGD1iHhXLRghdEUqzaw6RIKIPhgha+au/MkQkWJXLRQh5Br8+SpuZjRQSaKJUIRgK37TMuYGiDQRfShC9vzvC/HNc5HobCIUIUsrvGa/akCkOnwJRcjM9o79qn6gkkX0oQhZehguxW1e04t0u2qBCCE0FLIaaBEJd9UCEUImMSExhc5oUB6+BCKEDLdi2gz1XCTdVQtEyLxSOeWCymjQHr4EImTGopqsroJIvLMdiJANxmrKSHkuUm/8hiHM2Q6GIgORiDQQ7owg2NkOQ6gxFhdl8iYcJWAgQogslPnudIgkZxPkhMrcJhBZqLMLi0aDFDBQHzbmt1X1ItHpEiNE5sVlhC8qQpY69KQtoIJIdXzGCJHZDiEbuIqQDcKd4uGvsgc/gAlbm+3OuiqqzfWVsYul9Plt87EfQAgzkfcgQb42xeURkJBPl3fyLFxYRHnCm+6b6jbUljVOcdSqiSxK5elwsqzcK0R4hL2oa5iNoJsUgwFOncBYZIvh4+F9LWTj8gCojWrsxYb7uvqMLbT78qfF5nEwva+5sIz0QwgkVz78aFZTEktSfBrsmq9io00tySKxb2xJYC6qjpnNBXp72hS2MHu+sEXB2VL1FhcLwDXxtR+wBKCHBgRIlcyJqZJFKfJE2eAq4e/bgIzg8rJcvaNMrY8BeVZJGFmKBdBWBStM/miO8nxb1n468XBzEnwGy+azLRrBdUqyXb9TAAl6mg02Xi5t4eYHRWpccLykThwpoH718jA4bjzehaFtkpu4k3pxxV9UyF7vbw+TjccLiBta5CqIf6TlFG6+2M/fD8fhOdCl9bBz8EpTILdmSua1WPdO78tjPw16wzm3wlE5glwQ6/ESD1Nxk8M5l74s/mJAr1eSmYg/YaVzdcH9ps+YbKsptIXA2v8J/FzSYl3E/bNJ7w/j3Ze6GzO9i9/1ob3LgLvVqjcPunIK4nuQ+G6mnN+WePFu0zWNELbQqRvB35/n6SqIJvX3fBOQG1AKFQLiNJD7AsrFjUmCmKIiKZS4C7vgPIq7d7hrY3UaiIgvAb/AU0ifRPZ1M1MlIFwGWXLSuw+pXj89WKr6xYP5cuh1Rubn0UOlUj+X+vyqqNT2P4JZz+6KTZ9cm2K0elZtw/q8hTFJtt+KKoNq7/NG8B+tmhvhU7sADtXmit34EcbVyBo32XxpFczPSK8yVKdB3eHt8rW5SaQae73RXaV8chsObz66zu5Jepw2Nw6v9d1VN4fOk6/1jacR+3Gaj4/ezZ+R8u15SK7z4np7CVFRUVFRUVFRUVFRUVFRUVFRUVFRUVFRV9E/7oN3jyQrXPcAAAAASUVORK5CYII=" alt="Edit" />
        </button>
      </div>
      <div className={styles.profileDetails}>
        <h1>{name}</h1>
        <p>{bio}</p>
        <p>{location}</p>
        <p>Rank: {rank}</p>
        <div className={styles.socialLinks}>
          {linkedin && <a href={linkedin} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><img src="data:image/png;base64,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" alt="LinkedIn" /></a>}
          {instagram && <a href={instagram} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><img src="data:image/jpeg;base64,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" alt="Instagram" /></a>}
          {youtube && <a href={youtube} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><img src="data:image/png;base64,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" alt="YouTube" /></a>}
          {mdn && <a href={mdn} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><img src="data:image/png;base64,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" alt="MDN" /></a>}
          {github && <a href={github} target="_blank" rel="noopener noreferrer" className={styles.socialIcon}><img src="data:image/png;base64,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" alt="GitHub" /></a>}
        </div>
      </div>
      <button 
        className={styles.editButton} 
        onClick={handleEditInfo}
      >
        <img src="data:image/png;base64,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" alt="Edit" />
      </button>
      {isEditingInfo && (
        <>
          <div className={styles.modalOverlay} onClick={handleCloseModal}></div>
          <div className={styles.modal}>
          <div className={styles.modalContent}>
            <form onSubmit={handleSaveInfo}>
              <div className={styles.formGroup}>
                <label>Name:</label>
                <input 
                  type="text" 
                  value={name} 
                  onChange={(e) => setName(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>Bio:</label>
                <input 
                  type="text" 
                  value={bio} 
                  onChange={(e) => setBio(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>Location:</label>
                <input 
                  type="text" 
                  value={location} 
                  onChange={(e) => setLocation(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>LinkedIn:</label>
                <input 
                  type="url" 
                  value={linkedin} 
                  onChange={(e) => setLinkedin(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>Instagram:</label>
                <input 
                  type="url" 
                  value={instagram} 
                  onChange={(e) => setInstagram(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>YouTube:</label>
                <input 
                  type="url" 
                  value={youtube} 
                  onChange={(e) => setYoutube(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>MDN:</label>
                <input 
                  type="url" 
                  value={mdn} 
                  onChange={(e) => setMdn(e.target.value)} 
                />
              </div>
              <div className={styles.formGroup}>
                <label>GitHub:</label>
                <input 
                  type="url" 
                  value={github} 
                  onChange={(e) => setGithub(e.target.value)} 
                />
              </div>
              <button type="submit" className={styles.submitButton}>Save</button>
            </form>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ProfileInfo;

