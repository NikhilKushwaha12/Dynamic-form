// StepOne.jsx
import React from 'react';

const FirstPage = ({ userData, handleInputChange, goToNextStep, logoo, logooo }) => {

  
  return (
    <div className='fhead'>
      <div>
        <img src={logoo} alt="logo" className="form-logoo" />
      </div>
      <h2 className='headM'> Are you looking for a job change?</h2>
      <div>
        <label>
          <input
            type="radio"
            name="jobChange"
            value="yes"
            onChange={handleInputChange}
            checked={userData.jobChange === 'yes'}
          />
          Yes
        </label>
      </div>
      <form>
        <label>
          <input
            type="radio"
            name="jobChange"
            value="no"
            onChange={handleInputChange}
            checked={userData.jobChange === 'no'}
          />
          No
        </label>
      </form>

      {/* Show Name Input if user selects 'Yes' */}
      {userData.jobChange === 'yes' && (
        <div className='fhead'>
          <form className="container">
            <h3 className='Ename '>Please enter your name</h3>
            <input
              className="input-field"
              name="name"
              value={userData.name}
              onChange={handleInputChange}
              placeholder="Your name"
            />
          </form>

          <button
            className="btn"
            onClick={goToNextStep}
             disabled={!userData.name.trim()}
          >
            Next
          </button>
        </div>
      )}

      {userData.jobChange === 'no' && (
        <div className='headM_m'>
          <div>
            
          </div>
          <p className='headM_m'>Thank you for visiting!</p>
        </div>
      )}
    </div>
  );
};

export default FirstPage;
