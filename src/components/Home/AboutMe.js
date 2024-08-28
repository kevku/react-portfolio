import React from 'react';
import styles from '../../styles/AboutMe.module.css';
import portrait from '../../assets/Kevin.webp';

function AboutMe() {
  // Add image
  return (
    <div className={styles.AboutMe}>
      <picture>
        <img src={portrait} className={styles.myImage} alt="Kevin Kuang" />
      </picture>
      <section id="about-me">
        <h2>About Me</h2>
        <p>
          Hi, I'm Kevin. Ever since I was a kid, I've been fascinated by technology, 
          which is why I pursued a major in Math-CS. Whether it’s tinkering with computers 
          or developing software, I’m driven by a desire to create user-friendly applications 
          that make a difference in people’s lives. Studying at the University of California, 
          San Diego (UCSD) has been an incredible experience. It’s not just the rigorous coursework 
          that’s been transformative, but also the hands-on projects and learning from some truly 
          inspiring professors. UCSD has challenged me in the best ways possible and helped me grow 
          both personally and professionally. 
          This journey at UCSD has laid a strong foundation for my future, and 
          I’m excited about the path ahead as I blend my love for mathematics and computer science.
        </p>
      </section>
      <section id="future-aspirations">
        <h2>Future Aspirations</h2>
        <p>
          I’m passionate about website development and backend management, and I’m excited about pushing 
          the boundaries of what software can do. My goal is to innovate with new methodologies that have 
          real-world impact, optimize existing systems, and dive into advanced research in AI-driven software. 
          I’m dedicated to shaping the future of web apps and ensuring that AI development is done responsibly, 
          with a strong emphasis on safety, privacy, and ethics. 
          Ultimately, I want to make a meaningful impact on society, inspire future computer scientists, and work 
          on collaborative projects that blend mathematics with cutting-edge technologies. I’m eager to contribute 
          to an exciting future where technology and innovation go hand in hand.
        </p>
      </section>
    </div>
  );
};

export default AboutMe;