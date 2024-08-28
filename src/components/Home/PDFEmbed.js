import React from 'react';

const PDFEmbed = ({ pdfPath }) => {
  return (
    <div>
      <embed
        src={pdfPath}
        type="application/pdf"
        width="600"
        height="800"
        title="Embedded PDF"
      />
    </div>
  );
};

export default PDFEmbed;