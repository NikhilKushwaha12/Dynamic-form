import React from 'react';
import Tech from './Tech'; // Ensure Tech component is correctly imported

const CurrentJob = ({
  userData,
  setSelectedSector,
  setShowReasonOptions,
  setStep,
  handleInputChange,
  handleNext,
  selectedSector,
  showReasonOptions,
  
}) => {



  return (
    <div className='fhead'>
      <h1 className='fhead_2'>Current Profession</h1>
      <p className='dynamic'>Hi {userData.name}, what are you currently working as?</p>

      <p className='descP'>
        <div className='headD'></div>
      </p>

      <div>
        <div>
          <label>
            <input
              type="radio"
              name="preferredSector"
              value="Banking"
              onChange={() => {
                setSelectedSector("Banking");
                setShowReasonOptions(true); // Show BFSI options
              }}
            />
            BFSI
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="preferredSector"
              value="Tech"
              onChange={() => {
                setSelectedSector("Tech");
                setShowReasonOptions(false); 
              }}
            />
            Tech
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="preferredSector"
              value="Media"
              onChange={() => {
                setSelectedSector("Media");
                setShowReasonOptions(true); 
              }}
            />
            Media
          </label>
        </div>

        <div>
          <label>
            <input
              type="radio"
              name="preferredSector"
              value="Fresher"
              onChange={() => {
                setSelectedSector("Fresher");
                handleNext(); // Handle Fresher flow
              }}
            />
            Fresher
          </label>
        </div>
      </div>

      {selectedSector === "Banking" && showReasonOptions && (
        <div className="reason-options">
          <h2 className='headM_4'>Which jobs you would like to apply for?</h2>
          {["Home Loan", "CASA", "Personal Loan (PL)", "Credit Card", "Stock Market", "Life Insurance", "Wealth Management"].map((reason, index) => (
            <label key={index}>
              <input
                type="radio"
                name="Bank"
                value={reason}
                onChange={handleInputChange}
              />
              {reason}
            </label>
          ))}
          {userData.Bank && (
            <button className="btn" onClick={() => setStep(7)}>
              Next
            </button>
          )}
        </div>
      )}

      {selectedSector === "Tech" && (
        <div className='fhead'>
          <div>
            <Tech setStep={setStep} />
          </div>
        </div>
      )}

      {selectedSector === "Media" &&  (
        <div className='fhead'>
          <h1>Select Your Roles</h1>
          <p>Please choose which 3 roles you have maximum experience in.</p>
          {["Chief Editor", "Journalist/Reporter", "Copywriter", "Content Writer/Editor", "Social Media Manager", "Graphic Designer", "Motion Graphics Designer", "Producer", "Video Editor", "Sound Engineer", "Broadcast Engineer", "Publisher", "Sales Executive/Manager", "Marketing Manager", "Public Relations Manager", "Programming Director", "Audience Research Analyst", "Content Strategist"].map((role, index) => (
            <label key={index}>
              <input
                type="checkbox"
                name='media'
                value={role}
                onChange={handleInputChange}
              />
              {role}
            </label>
          ))}
           {userData.media && (
            <button className='techbtn' onClick={() => setStep(7)} >
              Next
            </button>
           )}
        </div>
      )}
    </div>
  );
};

export default CurrentJob;
