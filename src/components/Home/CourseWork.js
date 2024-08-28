import React from 'react';
import PDFEmbed from './PDFEmbed';
import styles from '../../styles/CourseWork.module.css';
import resume from '../../assets/Kevin Kuang - Resume.pdf';

function CourseWork() {
  return(
    <div className={styles.CourseWork}>
      <PDFEmbed pdfPath={resume} />
      <section id="classes-taken">
        <h2>Classes Taken</h2>
        <hr />
        <div className={styles.classList}>
          <section>
            <h3>Computer Science</h3>
            <ul>
              <li>Intro to Programming</li>
              <li>Basic Data Structures & Object-Oriented Design</li>
              <li>Software Tools & Techniques Lab</li>
              <li>Computer Organization & Systems Program</li>
              <li>Advanced Data Structures</li>
              <li>Theory of Computation</li>
              <li>Design and Analysis of Algorithm</li>
              <li>Web Client Languages</li>
              <li>Components & Design Techniques for Digital Systems</li>
              <li>Intro to Computer Architecture</li>
              <li>Software Engineering</li>
            </ul>
          </section>
          <section>
            <h3>Math</h3>
            <ul>
              <li>Calculus: Integral, Differential, Vector</li>
              <li>Linear Algebra</li>
              <li>Mathematical Reasoning</li>
              <li>Dicrete Math & Graph Theory</li>
              <li>Modern Algebra</li>
              <li>Statistical Methods</li>
              <li>Numerical Optimizations & Linear Programming</li>
            </ul>
          </section>
          <section>
            <h3>Non-Major Related</h3>
            <ul>
              <li>Analytical Writing</li>
              <li>Making of the Modern World (History) I-V</li>
              <li>Human Biology</li>
              <li>Geology</li>
              <li>Introduction to Data Science</li>
              <li>Blacktronica: Afrofuturism</li>
              <li>Race and Racisms</li>
              <li>Cantonese for Cantonese Speakers</li>
              <li>Personal Financial Management</li>
              <li>Language, Culture, & Education</li>
              <li>Digital Photos</li>
              <li>Data Science in Practice</li>
            </ul>
          </section>
        </div>
      </section>
    </div>
  );
};

export default CourseWork;