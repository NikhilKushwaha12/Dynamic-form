import React, { useState } from 'react';

const BsfiAdditionalDetails = ({ userData, setUserData, setStep }) => {
  const [interviewAvailability, setInterviewAvailability] = useState('');
  const [noticePeriod, setNoticePeriod] = useState('');
  const [currentSalary, setCurrentSalary] = useState('');
  const [expectedSalary, setExpectedSalary] = useState('');
  const [resume, setResume] = useState(null);

  const handleNext = () => {
    // Update userData before moving to the next step
    setUserData((prevData) => ({
      ...prevData,
      interviewAvailability,
      noticePeriod,
      currentSalary,
      expectedSalary,
      resume,
    }));
    setStep((prevStep) => prevStep + 1); // Go to the next step
  };

  // Check if all required fields are filled
  const isNextEnabled = currentSalary && noticePeriod && resume && expectedSalary;

  return (
    <div className="fhead">
      <h1>Interview Availability & Salary Details</h1>

      {/* Interview Availability Dropdown */}
      <label>
        When will you be able to attend an interview?
        <div>
          <select
            value={interviewAvailability}
            onChange={(e) => setInterviewAvailability(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Next 2 days">Next 2 days</option>
            <option value="Next 3–5 days">Next 3–5 days</option>
            <option value="Next 5–10 days">Next 5–10 days</option>
            <option value="After 10 days">After 10 days</option>
          </select>
        </div>
      </label>

      {/* Notice Period Dropdown */}
      <label>
        What is your notice period?
        <div>
          <select
            value={noticePeriod}
            onChange={(e) => setNoticePeriod(e.target.value)}
          >
            <option value="">Select</option>
            <option value="Immediate">Immediate</option>
            <option value="15 days">15 days</option>
            <option value="30 days">30 days</option>
            <option value="60 days">60 days</option>
            <option value="90 days">90 days</option>
          </select>
        </div>
      </label>

      {/* Current Salary Input */}
      <label>
        What is your current salary (in lakhs)?
        <input
          type="text"
          value={currentSalary}
          onChange={(e) => setCurrentSalary(e.target.value)}
          placeholder="Current Salary"
        />
      </label>

      {/* Expected Salary Input */}
      <label>
        What is your expected salary (in lakhs)?
        <input
          type="text"
          value={expectedSalary}
          onChange={(e) => setExpectedSalary(e.target.value)}
          placeholder="Expected Salary"
        />
      </label>

      {/* Resume Upload */}
      <label>
        Upload Resume:
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={(e) => setResume(e.target.files[0])}
        />
      </label>

      {/* Next Button */}
      <button className="btn"
      onClick={() =>  setStep(9)} disabled={!isNextEnabled}
      
      >
        Next
      </button>
    </div>
  );
};

export default BsfiAdditionalDetails;
