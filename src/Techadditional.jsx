import React, { useState } from 'react';

const TechAdditionalQuestions = ({ userData, setUserData, setStep }) => {
  const [appliedTechMahindra, setAppliedTechMahindra] = useState('');
  const [sharedPAN, setSharedPAN] = useState('');
  const [resume, setResume] = useState(null);
  const [panNumber, setPanNumber] = useState('');
  const [interviewAvailability, setInterviewAvailability] = useState('');

  const handleResumeChange = (e) => {
    setResume(e.target.files[0]);
    setUserData({ ...userData, resume: e.target.files[0].name }); // Store resume name in userData
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form Submitted', { appliedTechMahindra, sharedPAN, resume, panNumber, interviewAvailability });

    // Only set step if everything is valid
    if (appliedTechMahindra && sharedPAN && resume && panNumber && interviewAvailability) {
      setUserData({
        ...userData,
        appliedTechMahindra,
        sharedPAN,
        panNumber,
        interviewAvailability,
      });
      setStep(9);  // Change to the next step only if all validations are met
    }
  };

  const isNextEnabled = appliedTechMahindra && sharedPAN && resume && panNumber && interviewAvailability;

  return (
    <div className='fhead'>
      <h1>Additional Questions for Tech</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Have you ever applied with Tech Mahindra or LTI in the last 6 months?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={appliedTechMahindra === 'Yes'}
                onChange={() => {
                  setAppliedTechMahindra('Yes');
                  setUserData({ ...userData, appliedTechMahindra: 'Yes' });
                }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={appliedTechMahindra === 'No'}
                onChange={() => {
                  setAppliedTechMahindra('No');
                  setUserData({ ...userData, appliedTechMahindra: 'No' });
                }}
              />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Have you shared your PAN number with any recruiter for LTI or Tech Mahindra in the last 6 months?</label>
          <div>
            <label>
              <input
                type="radio"
                value="Yes"
                checked={sharedPAN === 'Yes'}
                onChange={() => {
                  setSharedPAN('Yes');
                  setUserData({ ...userData, sharedPAN: 'Yes' });
                }}
              />
              Yes
            </label>
            <label>
              <input
                type="radio"
                value="No"
                checked={sharedPAN === 'No'}
                onChange={() => {
                  setSharedPAN('No');
                  setUserData({ ...userData, sharedPAN: 'No' });
                }}
              />
              No
            </label>
          </div>
        </div>

        <div>
          <label>Please upload your resume here:</label>
          <input
            type="file"
            accept=".pdf,.doc,.docx"
            onChange={handleResumeChange}
            style={{
              color: 'black',
              fontWeight: '500',
              backgroundColor: 'white',
              padding: '5px',
            }}
          />
        </div>

        <div>
          <label>Please mention your PAN card number:</label>
          <input
            type="text"
            value={panNumber}
            onChange={(e) => {
              setPanNumber(e.target.value);
              setUserData({ ...userData, panNumber: e.target.value });
            }}
          />
        </div>

        <div>
          <label>How soon can you attend a virtual interview?</label>
          <div>
            <select
              value={interviewAvailability}
              onChange={(e) => {
                setInterviewAvailability(e.target.value);
                setUserData({ ...userData, interviewAvailability: e.target.value });
              }}
            >
              <option value="">Select</option>
              <option value="Next 2 days">Next 2 days</option>
              <option value="Next 3-5 days">Next 3-5 days</option>
              <option value="Next 6-10 days">Next 6-10 days</option>
              <option value="After 10 days">After 10 days</option>
            </select>
          </div>
        </div>

        <button type="submit" className="btn" onClick={() =>  setStep(9)} disabled={!isNextEnabled}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default TechAdditionalQuestions;

