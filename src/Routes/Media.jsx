// MediaDetails.jsx
import React, { useState } from 'react';

const MediaDetails = ({ userData, handleInputChange, handleNext }) => {
  const [isNextEnabled, setIsNextEnabled] = useState(false);

  // Check if all required fields are completed to enable the "Next" button
  const isFormComplete = 
    userData.currentSalary &&
    userData.expectedSalary &&
    userData.noticePeriod &&
    userData.relocate &&
    userData.maritalStatus &&
    ((userData.maritalStatus === 'Married' && userData.spouseProfession) ||
     (userData.maritalStatus === 'Single' && userData.parentsCity));

  const handleFieldChange = (e) => {
    handleInputChange(e);
    setIsNextEnabled(isFormComplete);
  };

  return (
    <div className="fhead">
      <h2>Media Details</h2>

      {/* Current Salary */}
      <label>What is your current salary? (in lakhs)</label>
      <input
        type="text"
        name="currentSalary"
        value={userData.currentSalary || ''}
        onChange={handleFieldChange}
        placeholder="Current salary"
      />

      {/* Show Expected Salary only if Current Salary is filled */}
      {userData.currentSalary && (
        <>
          <label>What is your expected salary? (in lakhs)</label>
          <input
            type="text"
            name="expectedSalary"
            value={userData.expectedSalary || ''}
            onChange={handleFieldChange}
            placeholder="Expected salary"
          />
        </>
      )}

      {/* Notice Period */}
      {userData.expectedSalary && (
        <>
          <label>What is your notice period?</label>
          <select name="noticePeriod" value={userData.noticePeriod || ''} onChange={handleFieldChange}>
            <option value="">Select notice period</option>
            <option value="Immediate">Immediate</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </>
      )}

      {/* Relocation Option */}
      {userData.noticePeriod && (
        <>
          <label>Are you open to relocate to a new city?</label>
          <div>
            <label>
              <input
                type="radio"
                name="relocate"
                value="Yes"
                onChange={handleFieldChange}
                checked={userData.relocate === 'Yes'}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                name="relocate"
                value="No"
                onChange={handleFieldChange}
                checked={userData.relocate === 'No'}
              />
              No
            </label>
          </div>
        </>
      )}

      {/* Marital Status */}
      {userData.relocate && (
        <>
          <label>Marital Status</label>
          <select name="maritalStatus" value={userData.maritalStatus || ''} onChange={handleFieldChange}>
            <option value="">Select marital status</option>
            <option value="Single">Single</option>
            <option value="Married">Married</option>
          </select>
        </>
      )}

      {/* Conditional Input for Marital Status */}
      {userData.maritalStatus === 'Married' && (
        <>
          <label>Spouse's Profession</label>
          <input
            type="text"
            name="spouseProfession"
            value={userData.spouseProfession || ''}
            onChange={handleFieldChange}
            placeholder="Spouse's profession"
          />
        </>
      )}

      {userData.maritalStatus === 'Single' && (
        <>
          <label>Which city are your parents based?</label>
          <input
            type="text"
            name="parentsCity"
            value={userData.parentsCity || ''}
            onChange={handleFieldChange}
            placeholder="City where parents are based"
          />
        </>
      )}

      {/* Next Button */}
      <div>
        <button className="btn" onClick={handleNext} disabled={!isFormComplete}>
          Next
        </button>
      </div>
    </div>
  );
};

export default MediaDetails;
