import React from 'react';

const PDFEmbed = ({ pdfPath }) => {
  return (
    <div>
      <embed
        src={pdfPath}
        type="application/pdf"
        width="100%"
        height="100%"
        title="Embedded PDF"
      />
    </div>
  );
};

export default PDFEmbed;