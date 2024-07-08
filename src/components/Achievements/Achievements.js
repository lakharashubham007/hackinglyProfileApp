



// components/Achievements/Achievements.js
'use client'
import { useState, useEffect } from 'react';
import styles from './Achievements.module.css';

const Achievements = () => {
  const [hackathons, setHackathons] = useState(
    JSON.parse(localStorage.getItem('hackathons')) || [
      { name: 'Hackathon A', year: '2022', achievements: 'Winner' }
    ]
  );
  const [certifications, setCertifications] = useState(
    JSON.parse(localStorage.getItem('certifications')) || [
      { name: 'Certification A', authority: 'Authority A' }
    ]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newEntry, setNewEntry] = useState({
    type: '', // 'hackathon' or 'certification'
    name: '',
    year: '',
    achievements: '',
    authority: ''
  });

  useEffect(() => {
    localStorage.setItem('hackathons', JSON.stringify(hackathons));
    localStorage.setItem('certifications', JSON.stringify(certifications));
  }, [hackathons, certifications]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEntry({ ...newEntry, [name]: value });
  };

  const handleAddEntry = (e) => {
    e.preventDefault();
    if (newEntry.type === 'hackathon') {
      setHackathons([...hackathons, { name: newEntry.name, year: newEntry.year, achievements: newEntry.achievements }]);
    } else if (newEntry.type === 'certification') {
      setCertifications([...certifications, { name: newEntry.name, authority: newEntry.authority }]);
    }
    closeModal();
  };

  const handleEditClick = (index, type) => {
    setEditIndex(index);
    setNewEntry({ ...type === 'hackathon' ? hackathons[index] : certifications[index], type });
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleUpdateEntry = (e) => {
    e.preventDefault();
    if (newEntry.type === 'hackathon') {
      const updatedHackathons = hackathons.map((entry, index) =>
        index === editIndex ? newEntry : entry
      );
      setHackathons(updatedHackathons);
    } else if (newEntry.type === 'certification') {
      const updatedCertifications = certifications.map((entry, index) =>
        index === editIndex ? newEntry : entry
      );
      setCertifications(updatedCertifications);
    }
    closeModal();
  };

  const handleDeleteEntry = (index, type) => {
    if (type === 'hackathon') {
      setHackathons(hackathons.filter((_, i) => i !== index));
    } else if (type === 'certification') {
      setCertifications(certifications.filter((_, i) => i !== index));
    }
  };

  const openModal = () => {
    setIsEditing(false);
    setNewEntry({ type: '', name: '', year: '', achievements: '', authority: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.achievements}>
      <h2>Achievements</h2>
      <button onClick={openModal} className={styles.addButton}>
        Add Achievement
      </button>

      <div className={styles.hackathons}>
        <h3>Hackathons</h3>
        <ul>
          {hackathons.map((hackathon, index) => (
            <li key={index} className={styles.item}>
              <p>{hackathon.name} ({hackathon.year}) - {hackathon.achievements}</p>
              <button onClick={() => handleEditClick(index, 'hackathon')} className={styles.editButton}>
                Edit
              </button>
              <button onClick={() => handleDeleteEntry(index, 'hackathon')} className={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      <div className={styles.certifications}>
        <h3>Certifications</h3>
        <ul>
          {certifications.map((cert, index) => (
            <li key={index} className={styles.item}>
              <p>{cert.name} - {cert.authority}</p>
              <button onClick={() => handleEditClick(index, 'certification')} className={styles.editButton}>
                Edit
              </button>
              <button onClick={() => handleDeleteEntry(index, 'certification')} className={styles.deleteButton}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}></div>
      )}
      {isModalOpen && (
        <div className={styles.modal}>
          <form onSubmit={isEditing ? handleUpdateEntry : handleAddEntry} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Type:</label>
              <select
                name="type"
                value={newEntry.type}
                onChange={handleChange}
                required
              >
                <option value="">Select Type</option>
                <option value="hackathon">Hackathon</option>
                <option value="certification">Certification</option>
              </select>
            </div>
            <div className={styles.formGroup}>
              <label>Name:</label>
              <input
                type="text"
                name="name"
                value={newEntry.name}
                onChange={handleChange}
                required
              />
            </div>
            {newEntry.type === 'hackathon' && (
              <>
                <div className={styles.formGroup}>
                  <label>Year:</label>
                  <input
                    type="text"
                    name="year"
                    value={newEntry.year}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Achievements:</label>
                  <input
                    type="text"
                    name="achievements"
                    value={newEntry.achievements}
                    onChange={handleChange}
                    required
                  />
                </div>
              </>
            )}
            {newEntry.type === 'certification' && (
              <div className={styles.formGroup}>
                <label>Authority:</label>
                <input
                  type="text"
                  name="authority"
                  value={newEntry.authority}
                  onChange={handleChange}
                  required
                />
              </div>
            )}
            <button type="submit" className={styles.submitButton}>
              {isEditing ? 'Update Achievement' : 'Add Achievement'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Achievements;
