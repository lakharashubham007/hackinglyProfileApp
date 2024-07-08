// components/Ranking/Ranking.js
'use client'
import { useState } from 'react';
import styles from './Ranking.module.css';

const Ranking = () => {
  const [points, setPoints] = useState(150);

  return (
    <div className={styles.ranking}>
      <h2>Ranking</h2>
      <p>Points: {points}</p>
    </div>
  );
};

export default Ranking;
