import React, { useState } from 'react';

function CertificateManagement({ user }) {
  const [certificate, setCertificate] = useState(null);

  const handleCertificateUpload = (e) => {
    const file = e.target.files[0];
    setCertificate(file);
  };

  return (
    <div>
      <h2>Certificate Management</h2>
      <label>
        Upload Educational Certificate:
        <input type="file" onChange={handleCertificateUpload} />
      </label>
      <br />
      {certificate && (
        <p>Certificate Uploaded: {certificate.name}</p>
      )}
      <button>Secure Certificate</button>
    </div>
  );
}

export default CertificateManagement;
