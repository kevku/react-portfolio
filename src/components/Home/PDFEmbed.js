import React from 'react';
import styles from '../../styles/PDFEmbed.module.css';

const PDFEmbed = ({ pdfPath }) => {
  return (
    <div className={styles.PDFEmbed}>
      <iframe
        src={pdfPath}
        className="pdf-embed"
        title="Embedded PDF"
        onError={() => window.open(pdfPath, '_blank')}
      ></iframe>
      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open PDF
      </a>
    </div>
  );
};

export default PDFEmbed;