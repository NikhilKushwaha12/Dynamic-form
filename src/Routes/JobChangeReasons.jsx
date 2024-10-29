import React, { useState } from "react";

const JobChangeReasons = ({
    handleInputChange,
    userData, 
    handleNext 
}) => {
  const [otherReasonText, setOtherReasonText] = useState("");

  // Handler for the other reason input
  const handleOtherReasonChange = (e) => {
    setOtherReasonText(e.target.value);
  };

  // Check if "Other reason" is selected and has input in text area
  const isNextDisabled = 
    !userData.reasonForChange || 
    (userData.reasonForChange === 'Other reason' && otherReasonText.trim() === "");

  return (
    <div className='fhead'>
      <h1 className='fhead_2'>Hi {userData.name}, Let's understand your need</h1>
      <h2>May I know the major reason for your job change in your current/previous company?</h2>
      <p className='reqU'>So, we can better understand your requirements.</p>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="Looking salary hike"
            checked={userData.reasonForChange === 'Looking salary hike'}
            onChange={handleInputChange}
          />
          Looking for a salary hike
        </label>
      </div>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="Work Environment / Culture / Work Process"
            checked={userData.reasonForChange === 'Work Environment / Culture / Work Process'}
            onChange={handleInputChange}
          />
          Work Environment / Culture / Work Process
        </label>
      </div>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="Having issues in working environment/culture/work process"
            checked={userData.reasonForChange === 'Having issues in working environment/culture/work process'}
            onChange={handleInputChange}
          />
          Having issues in working environment/culture/work process
        </label>
      </div>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="I'm working as off roll"
            checked={userData.reasonForChange === "I'm working as off roll"}
            onChange={handleInputChange}
          />
          I'm working as off roll
        </label>
      </div>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="Transferring me to another location"
            checked={userData.reasonForChange === 'Transferring me to another location'}
            onChange={handleInputChange}
          />
          Transferring me to another location
        </label>
      </div>

      <div className="container">
        <label>
          <input
            type="radio"
            name="reasonForChange"
            value="Other reason"
            checked={userData.reasonForChange === 'Other reason'}
            onChange={handleInputChange}
          />
          Other reason
        </label>
      </div>

      {/* Conditional rendering of textarea for "Other reason" */}
      {userData.reasonForChange === 'Other reason' && (
        <div className="container">
          <textarea
            placeholder="Please specify your reason"
            value={otherReasonText}
            onChange={handleOtherReasonChange}
          />
        </div>
      )}

      <button
        className="btn"
        onClick={handleNext}
        disabled={isNextDisabled} // Disable next until reason is selected or "Other" text is filled
      >
        Next
      </button>
    </div>
  );
};

export default JobChangeReasons;
