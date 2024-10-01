import React, { useEffect, useRef } from 'react';
import styles from '../../styles/PDFEmbed.module.css';

const PDFEmbed = ({ pdfPath }) => {
  const iframeRef = useRef(null);
  // Fix Resume on ios Safari
  useEffect(() => {
    const handleLoad = () => {
      const iframeDocument = iframeRef.current.contentDocument || iframeRef.current.contentWindow.document;
      const img = iframeDocument.getElementsByTagName("img")[0];
      if (img) {
        img.style.width = "100%";
      }
    };

    const iframe = iframeRef.current;
    if (iframe) {
      iframe.onload = handleLoad;
    }

    return () => {
      if (iframe) {
        iframe.onload = null; // Clean up the event listener
      }
    };
  }, [pdfPath]);

  return (
    <div className={styles.PDFEmbed}>
      <iframe
        ref={iframeRef}
        src={pdfPath}
        className="pdf-embed"
        title="Embedded PDF"
        style={{ height: '100vh', width: '100%' }}
        onError={() => window.open(pdfPath, '_blank')}
      ></iframe>
      <a href={pdfPath} target="_blank" rel="noopener noreferrer">
        Open PDF
      </a>
    </div>
  );
};

export default PDFEmbed;