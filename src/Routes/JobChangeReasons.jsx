import React from "react";

const JobChangeReasons = ({
    handleInputChange,
    userData, 
    handleNext 
}) =>{


return(
<div className='fhead'>
          <h1 className='fhead_2'>Hi {userData.name}, Let's understand your need</h1>
          <h2>May I know the major reason for your job change in your current/previous company?</h2>
          <p className='reqU'>So, we can better understand your requirements.</p>

          <div className="container">
            <label >
              <input
                type="radio"
                name="reasonForChange"
                value="Looking salary hike"
                checked={userData.reasonForChange === 'Looking salary hike'}
                onChange={handleInputChange}
              />
              Looking salary hike
            </label>
          </div>

          <div className="container">
            <label>
              <input
                type="radio"
                name="reasonForChange"
                value="Looking on roll job"
                checked={userData.reasonForChange === 'Looking on roll job'}
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
              Transferring to New Skill / Location
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
              Not Working
            </label>
          </div>

          <div className="container">
            <label>
              <input
                type="radio"
                name="reasonForChange"
                value="I'm not working. So looking job"
                checked={userData.reasonForChange === "I'm not working. So looking job"}
                onChange={handleInputChange}
              />
              Other Reasons (text box for details)
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

          <button
            className="btn"
            onClick={handleNext}
              disabled={!userData.reasonForChange} // Disable next until reason is selected
          >
            Next
          </button>
        </div>




)
}
export default JobChangeReasons;