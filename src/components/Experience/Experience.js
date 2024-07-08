// // components/Experience/Experience.js
// 'use client'
// import { useState } from 'react';
// import styles from './Experience.module.css';

// const Experience = () => {
//   const [experiences, setExperiences] = useState([
//     { company: 'Company A', designation: 'Developer', duration: 'Jan 2020 - Present' },
//     { company: 'Company B', designation: 'Intern', duration: 'Jan 2019 - Dec 2019' },
//   ]);

//   return (
//     <div className={styles.experience}>
//       <h2>Experience</h2>
//       <ul>
//         {experiences.map((exp, index) => (
//           <li key={index}>
//             <h3>{exp.company}</h3>
//             <p>{exp.designation}</p>
//             <p>{exp.duration}</p>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default Experience;





// components/Experience/Experience.js
'use client'
import { useState, useEffect } from 'react';
import styles from './Experience.module.css';

const Experience = () => {
  const [experiences, setExperiences] = useState(
    JSON.parse(localStorage.getItem('experiences')) || [
      { company: 'Company A', designation: 'Developer', duration: 'Jan 2020 - Present' },
      { company: 'Company B', designation: 'Intern', duration: 'Jan 2019 - Dec 2019' }
    ]
  );
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [newExperience, setNewExperience] = useState({
    company: '',
    designation: '',
    duration: ''
  });

  useEffect(() => {
    localStorage.setItem('experiences', JSON.stringify(experiences));
  }, [experiences]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewExperience({ ...newExperience, [name]: value });
  };

  const handleAddExperience = (e) => {
    e.preventDefault();
    setExperiences([...experiences, newExperience]);
    closeModal();
  };

  const handleEditClick = (index) => {
    setEditIndex(index);
    setNewExperience(experiences[index]);
    setIsEditing(true);
    setIsModalOpen(true);
  };

  const handleUpdateExperience = (e) => {
    e.preventDefault();
    const updatedExperiences = experiences.map((exp, index) =>
      index === editIndex ? newExperience : exp
    );
    setExperiences(updatedExperiences);
    closeModal();
  };

  const handleDeleteExperience = (index) => {
    setExperiences(experiences.filter((_, i) => i !== index));
  };

  const openModal = () => {
    setIsEditing(false);
    setNewExperience({ company: '', designation: '', duration: '' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={styles.experience}>
      <h2>Experience</h2>
      <button onClick={openModal} className={styles.addButton}>
        Add Experience
      </button>
      <ul>
        {experiences.map((exp, index) => (
          <li key={index} className={styles.experienceItem}>
            <h3>{exp.company}</h3>
            <p>{exp.designation}</p>
            <p>{exp.duration}</p>
            <button onClick={() => handleEditClick(index)} className={styles.editButton}>
              Edit
            </button>
            <button onClick={() => handleDeleteExperience(index)} className={styles.deleteButton}>
              Delete
            </button>
          </li>
        ))}
      </ul>
      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}></div>
      )}
      {isModalOpen && (
        <div className={styles.modal}>
          <form onSubmit={isEditing ? handleUpdateExperience : handleAddExperience} className={styles.form}>
            <div className={styles.formGroup}>
              <label>Company:</label>
              <input
                type="text"
                name="company"
                value={newExperience.company}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Designation:</label>
              <input
                type="text"
                name="designation"
                value={newExperience.designation}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.formGroup}>
              <label>Duration:</label>
              <input
                type="text"
                name="duration"
                value={newExperience.duration}
                onChange={handleChange}
                required
              />
            </div>
            <button type="submit" className={styles.submitButton}>
              {isEditing ? 'Update Experience' : 'Add Experience'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Experience;
