import React from 'react';
import GetInTouch from './GetInTouch';
import styles from '../../styles/Contact.module.css';

function Contact() {
  return(
    <div className={styles.Contact} >
      <GetInTouch />
      <div>
        <h2>Contact Info</h2>
        <ul>
          <li>Personal Email: <a href="mailto:kekuang5@gmail.com">kekuang5@gmail.com</a></li>
          <li>School Email: <a href="mailto:kkuang@ucsd.edu">kkuang@ucsd.edu</a></li>
          <li>Phone Number: <a href="tel:415-528-1984">(415)-528-1984</a></li>
          <li>LinkedIn: <a href="https://www.linkedin.com/in/kekuang/">linkedin.com/in/kekuang/</a></li>
          <li>GitHub: <a href="https://github.com/kevku">github.com/kevku</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Contact;