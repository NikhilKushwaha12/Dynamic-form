import React, { useState } from 'react';
import './App.css';

const TechDetails = ({ setStep }) => {
  const [userData, setUserData] = useState({
    currentCTC: '',
    expectedCTC: '',
    hasOffers: '',
    offerAmount: '',
    lastWorkingDay: '',
  });

  const handleInputChange = (field, value) => {
    setUserData((prevData) => ({
      ...prevData,
      [field]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here, potentially saving userData to a database
    setStep(8); // Move to the next step after submission
  };

  return (
    <form onSubmit={handleSubmit}>
      <h1>Tech Details</h1>

      {/* Current CTC */}
      <div>
        <label>
          What is your current CTC?
          <input
            type="text"
            value={userData.currentCTC}
            onChange={(e) => handleInputChange('currentCTC', e.target.value)}
          />
        </label>
      </div>

      {/* Expected CTC */}
      {userData.currentCTC && (
        <div>
          <label>
            What is your expected CTC?
            <input
              type="text"
              value={userData.expectedCTC}
              onChange={(e) => handleInputChange('expectedCTC', e.target.value)}
            />
          </label>
        </div>
      )}

      {/* Offers in hand */}
      {userData.expectedCTC && (
        <div>
          <label>Do you have any offers in hand?</label>
          <div className="radio-group">
            <div className="radio-options">
              <label>
                <input
                  type="radio"
                  value="Yes"
                  checked={userData.hasOffers === 'Yes'}
                  onChange={() => handleInputChange('hasOffers', 'Yes')}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="No"
                  checked={userData.hasOffers === 'No'}
                  onChange={() => handleInputChange('hasOffers', 'No')}
                />
                No
              </label>
            </div>
          </div>
        </div>
      )}

      {/* Additional Offer Details */}
      {userData.hasOffers === 'Yes' && (
        <div className="offer-details">
          <div>
            <label>
              Offer Amount:
              <input
                type="text"
                value={userData.offerAmount}
                onChange={(e) => handleInputChange('offerAmount', e.target.value)}
              />
            </label>
          </div>
          <div>
            <label>
              Last Working Day:
              <input
                type="date"
                value={userData.lastWorkingDay}
                onChange={(e) => handleInputChange('lastWorkingDay', e.target.value)}
              />
            </label>
          </div>
        </div>
      )}

      {/* Display Submit button only when all necessary fields are filled */}
      {((userData.hasOffers === 'No' && userData.currentCTC && userData.expectedCTC) ||
        (userData.hasOffers === 'Yes' && userData.currentCTC && userData.expectedCTC && userData.offerAmount && userData.lastWorkingDay)) && (
        <div>
          <button className='techbtn' type="submit">Submit</button>
        </div>
      )}
    </form>
  );
};

export default TechDetails;
