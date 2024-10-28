// ThankYou.jsx
import React from 'react';

const ThankYou = () => {
  return (
    <div className="fhead">
      <h1>Thank You for Your Submission</h1>
      <p className='thank_2'>Thank you for sharing your details. Our team will check your profile and will reach out if your profile is found relevant.</p>
      <div style={{ borderBottom: "2px solid black", width: "60%", margin: "5px 20% " }}></div>
      <p className='visit_th'>
        Visit <a href="https://www.changeleaders.in" target="_blank" rel="noopener noreferrer">www.changeleaders.in
        </a> if you wish to apply for any specific job.
      </p>
    </div>
  );
};

export default ThankYou;
