import React from "react";


const PersonalDetails = ({  
    userData,
    handleInputChange,
    handleNext,

}) =>{
return(



    <div className='fhead'>
    <h1>Personal Details</h1>

    <label>Date of Birth:</label>
    <input
      className="input-field"
      type="date"
      name="dob"
      value={userData.dob}
      onChange={handleInputChange}
    />

    {userData.dob && (
      <div className='fhead'>
        <label>How long have you been residing in {userData.location || "your location"}?</label>
        <input
          className="input-field"
          name="residingTime"
          value={userData.residingTime}
          onChange={handleInputChange}
          placeholder="e.g., 5 years"
        />
      </div>
    )}
    {userData.dob && (
      <div className='fhead'>
        <label>What is your total work experience?</label>
        <input
  type="number"
  className="input-field"
  name="experience"
  value={userData.experience || ''}
  onChange={handleInputChange}
  placeholder="Enter total years of experience"
  min="0"
  step="0.1"  // Allows decimals like 2.5
/>
      </div>
    )}

    {userData.residingTime && (
      <div>
        <label>What is your highest qualification?</label>
        <select
          className="input-field"
          name="education"
          value={userData.education}
          onChange={handleInputChange}
        >
          <option value="">Select Qualification</option>
          <option value="undergraduate">Undergraduate</option>
          <option value="graduate">Graduate</option>
          <option value="postgraduate">Postgraduate</option>
          <option value="diploma">Diploma</option>
          <option value="mba">MBA/PGDBM</option>
        </select>
      </div>
    )}

    {userData.education && (
      <div className='fhead'>
        <label>Enter your's Relevant Qualification</label>
        <div>
          <label>
          <textarea
  className="input-field"
  name="relevantQualification"
  value={userData.relevantQualification || ''}
  onChange={handleInputChange}
  placeholder="Enter your relevant qualification"
  rows="4"  // Adjust the number of rows as needed
/>
          </label>
        </div>
       
      </div>
      
    )}

<button
          className="btn"
          onClick={handleNext}
          disabled={
            !userData.dob ||
            !userData.residingTime ||
            !userData.education ||
            !userData.relevantQualification
          }
        >
          Next
        </button>

   
  </div>



)

}
export default PersonalDetails;