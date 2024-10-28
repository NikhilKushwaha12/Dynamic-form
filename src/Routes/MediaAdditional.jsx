// UploadResume.jsx
import React, { useState } from 'react';

const MediaAdditional = ({ userData, setUserData, handleNext }) => {
  const [resume, setResume] = useState(null);
  const [interviewAvailability, setInterviewAvailability] = useState('');

  const handleResumeChange = (e) => {
    const selectedFile = e.target.files[0];
    setResume(selectedFile);
    setUserData({ ...userData, resume: selectedFile });
  };

  const handleInterviewChange = (e) => {
    const value = e.target.value;
    setInterviewAvailability(value);
    setUserData({ ...userData, interviewDate: value });
  };

  // Enable "Next" only if both resume and interview availability are set
  const isNextEnabled = resume && interviewAvailability;

  return (
    <div className="fhead">
      <h2>Upload Your Resume</h2>

      {/* Resume Upload */}
      <label>
        Please upload your resume here.
        <input
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleResumeChange}
        />
      </label>

      {/* Interview Availability */}
      <label>How soon can you attend a virtual interview?</label>
      <select
        value={interviewAvailability}
        onChange={handleInterviewChange}
      >
        <option value="">Select availability</option>
        <option value="Next 2 days">Next 2 days</option>
        <option value="Next 3–5 days">Next 3–5 days</option>
        <option value="Next 6–10 days">Next 6–10 days</option>
        <option value="After 10 days">After 10 days</option>
      </select>

      {/* Next Button */}
      <div>   
         <button className="btn" onClick={handleNext} disabled={!isNextEnabled}>
        Next
      </button></div>
  
    </div>
  );
};

export default MediaAdditional;
