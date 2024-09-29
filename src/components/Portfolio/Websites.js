import React from 'react';
import styles from '../../styles/Websites.module.css';
import websiteData from '../../data/WebsiteData';

const Websites = () => {
  return (
    <div className={styles.Websites}>
      {websiteData.map((item, index) => (
        <div className={styles.container}>
          <h2>{item.title}</h2>
          <section className={styles.content}>
            <img src={item.overviewImg} alt={item.overviewAlt}/>
            <article>
              <h3>{item.appName}</h3>
              <p>{item.text}</p>
              <br />
              <a href={item.repoLink} target="_blank" rel="noopener noreferrer">Link to Repo</a>
              <a href={item.siteLink} target="_blank" rel="noopener noreferrer">Link to Site</a>
            </article>
          </section>
        </div>
      ))}
    </div>
  );
};

export default Websites;