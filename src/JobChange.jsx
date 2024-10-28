// JobChanges.jsx
import React from 'react';

const JobChanges = ({ userData, handleInputChange, handleNext }) => {
  return (
    <div className="fhead">
      <h2 className="changR">How many job changes within your 3 years of experience?</h2>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="None"
            checked={userData.jobChanges === "None"}
            onChange={handleInputChange}
          />
          None
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="1 Job"
            checked={userData.jobChanges === "1 Job"}
            onChange={handleInputChange}
          />
          1 Job
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="2 Job"
            checked={userData.jobChanges === "2 Job"}
            onChange={handleInputChange}
          />
          2 Job
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="3 Job"
            checked={userData.jobChanges === "3 Job"}
            onChange={handleInputChange}
          />
          3 Job
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="4 Job"
            checked={userData.jobChanges === "4 Job"}
            onChange={handleInputChange}
          />
          4 Job
        </label>
      </div>

      <div>
        <label>
          <input
            type="radio"
            name="jobChanges"
            value="5+ Job"
            checked={userData.jobChanges === "5+ Job"}
            onChange={handleInputChange}
          />
          5+ Job
        </label>
      </div>

      <button className="btn" onClick={handleNext} disabled={!userData.jobChanges}>
        Next
      </button>
    </div>
  );
};

export default JobChanges;









