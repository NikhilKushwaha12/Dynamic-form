import React from 'react';
import LocationSelect from '../components/LocationSelect';
import CitySelect from '../components/Cities';

const SmallDetails = ({ userData, errors, handleInputChange, setStep , step }) => {
  return (
    <div className="fhead">
      <h1>Hi {userData.name}</h1>
      <p className="reqU_2">Let's complete your profile</p>
      
      <label>Please enter your mobile number</label>
      <input
        className="input-field"
        name="phoneNumber"
        value={userData.phoneNumber}
        onChange={handleInputChange}
        placeholder="10-digit phone number"
      />
      {errors.phoneNumber && <p style={{ color: 'red' }}>{errors.phoneNumber}</p>}

      {/* Email Input */}
      {userData.phoneNumber && (
        <div className="fhead">
          <label>Please enter your email address</label>
          <input
            className="input-field"
            name="email"
            value={userData.email}
            onChange={handleInputChange}
            placeholder="Email address"
          />
          {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        </div>
      )}

      {/* Location and City Selection */}
      {userData.email && (
        <div>
          <LocationSelect
            value={userData.location}
            handleInputChange={handleInputChange}
          />

          {/* Show city dropdown when state is selected */}
          {userData.location && (
            <CitySelect
              selectedState={userData.location}
              selectedCity={userData.city}
              handleInputChange={handleInputChange}
            />
          )}
 {/* Button to proceed */}
 
         
        </div>
        
      )}

<button
            className="btn"
            onClick={() => setStep(3)}
             disabled={!userData.location || !userData.city} // Disable next button until both state and city are selected
          >
            Next
          </button>
    </div>
    
  );
};

export default SmallDetails;
