import React from 'react';

const FreshersDetails = ({ userData, handleInputChange, setStep }) => {
  const isNextEnabled = 
    userData.graduationYear &&
    userData.collegeName &&
    userData.graduationField &&
    userData.relocate &&
    userData.maritalStatus;

  return (
    <div className="fhead">
      <h2>Freshers Details</h2>

      {/* Graduation Year */}
      <label>In what year you graduated?</label>
      <input
        type="text"
        name="graduationYear"
        value={userData.graduationYear || ''}
        onChange={(e) => handleInputChange(e)}
        placeholder="Graduation Year"
      />

      {/* College Name */}
      <label>Name of your college</label>
      <input
        type="text"
        name="collegeName"
        value={userData.collegeName || ''}
        onChange={(e) => handleInputChange(e)}
        placeholder="College Name"
      />

      {/* Graduation Field */}
      <label>In which field you completed your graduation?</label>
      <select
        name="graduationField"
        value={userData.graduationField || ''}
        onChange={(e) => handleInputChange(e)}
      >
        <option value="">Select a field</option>
        <option value="IT">IT</option>
        <option value="Management">Management</option>
        <option value="Computer Science">Computer Science</option>
      </select>

      {/* Relocation Option */}
      <label>Are you open to relocate to a new city?</label>
      <div>
        <label>
          <input
            type="radio"
            name="relocate"
            value="Yes"
            onChange={(e) => handleInputChange(e)}
            checked={userData.relocate === 'Yes'}
          />
          Yes
        </label>
        <label>
          <input
            type="radio"
            name="relocate"
            value="No"
            onChange={(e) => handleInputChange(e)}
            checked={userData.relocate === 'No'}
          />
          No
        </label>
      </div>

      {/* Marital Status */}
      <label>Marital Status</label>
      <select
        name="maritalStatus"
        value={userData.maritalStatus || ''}
        onChange={(e) => handleInputChange(e)}
      >
        <option value="">Select marital status</option>
        <option value="Single">Single</option>
        <option value="Married">Married</option>
      </select>

      {/* Next Button */}
      <div>

      <button className="btn" onClick={() => isNextEnabled && setStep(9)} disabled={!isNextEnabled}>
        Next
      </button>

      </div>

    </div>
  );
};

export default FreshersDetails;
