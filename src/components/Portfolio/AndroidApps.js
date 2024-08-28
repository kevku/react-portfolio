import React from 'react';
import styles from '../../styles/AndroidApps.module.css';
import androidData from '../../data/AndroidData';

const AndroidApps = () => {
  return (
    <div className={styles.AndroidApps}>
      {androidData.map((item, index) => (
        <div className={styles.container}>
          <h2>{item.title}</h2>
          <section className={styles.content}>
            <img src={item.overviewImg} alt={item.overviewAlt}/>
            <img src={item.funcImg} alt={item.funcAlt} />
            <article>
              <h3>{item.appName}</h3>
              <p>{item.text}</p>
            </article>
          </section>
        </div>
      ))}
    </div>
  );
};

export default AndroidApps;
