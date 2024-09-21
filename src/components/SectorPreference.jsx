// SectorPreference.js
import React from 'react';

const SectorPreference = ({ userData, handleInputChange, handleNext }) => {
  return (
    <div className="reason-options">
      <h2 className='headM_4'>In which sector are you preferring? So, we can search for the best job for you according to your requirement.</h2>
      {["FMCG / Beverage", "Pharma", "Telecom / ISP", "Banking", "Financial Services", "Automobiles", "Consumer Durables", "Insurance", "Other (Please specify)"].map((sector, index) => (
        <label key={index}>
          <input 
            type="radio" 
            name="preferredSector" 
            value={sector} 
            onChange={handleInputChange} 
          />
          {sector}
        </label>
      ))}

      {/* Show Next button only if a sector is selected */}
      {userData.preferredSector && (
        <button className="btn" onClick={handleNext}>
          Next
        </button>
      )}
    </div>
  );
};

export default SectorPreference;
