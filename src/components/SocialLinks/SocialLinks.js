// components/SocialLinks/SocialLinks.js
'use client'
import { useState } from 'react';
import styles from './SocialLinks.module.css';

const SocialLinks = () => {
  const [github, setGithub] = useState('https://github.com/username');
  const [linkedin, setLinkedin] = useState('https://linkedin.com/in/username');

  return (
    <div className={styles.socialLinks}>
      <h2>Social Links</h2>
      <p><a href={github} target="_blank">GitHub</a></p>
      <p><a href={linkedin} target="_blank">LinkedIn</a></p>
    </div>
  );
};

export default SocialLinks;
