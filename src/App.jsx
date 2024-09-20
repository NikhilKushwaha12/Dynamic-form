
import React, { useState } from 'react';
import './App.css'; // Assuming external styling

function App() {
  const [step, setStep] = useState(1); // Main step tracking
  const [userData, setUserData] = useState({
    jobChange: '',
    name: '',
    mobile: '',
    email: '',
    location: '',
    dob: '',
    residingTime: '',
    education: '',
    experience: '',
    salesExperience: '',
    salesExperienceYears: '', 
    industry: '',
    jobChanges: '',
    responsibilities: '',
    teamHandling: '',
    companyName: '',
    designation: '',
    resume: '',
    profilePicture: '',
    interviewDate: ''
  });

  const handleInputChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const goToNextStep = () => {
    setStep(step + 1);
  };

  return (
    <div className="form-container">
      {/* Step 1: Are you looking for a job change? */}
      {step === 1 && (
        <div >
          <h1>Are you looking for a job change?</h1>
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
          <label >
            <input
            className='jobC'
              type="radio"
              name="jobChange"
              value="no"
              onChange={handleInputChange}
              checked={userData.jobChange === 'no'}
            />
            No
          </label>

          {/* Show Name Input if user selects 'Yes' */}
          {userData.jobChange === 'yes' && (
            <div>
              <label className='Ename'>Please enter your name</label>
              <input
                className="input-field"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              />
              <button
                className="btn"
                onClick={goToNextStep}
                disabled={!userData.name} // Disable next button until name is entered
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {/* Step 2: Enter phone number and email */}
      {step === 2 && (
        <div>
          <h1>Hi {userData.name}</h1>
          <label> Please enter your mobile number</label>
          <input
            className="input-field"
            name="mobile"
            value={userData.mobile}
            onChange={handleInputChange}
            placeholder="Mobile number"
          />
          {/* <button
            className="btn"
            onClick={goToNextStep}
            disabled={!userData.mobile} // Disable next until phone is entered
          >
            Next
          </button> */}

          {userData.mobile && (
            <div>
              <label>Please enter your email address</label>
              <input
                className="input-field"
                name="email"
                value={userData.email}
                onChange={handleInputChange}
                placeholder="Email address"
              />
              
            </div>
          )}

          {/* New Residing Location Dropdown */}
          {userData.email && (
            <div>
              <label>What is your residing location?</label>
              <select
                className="input-field"
                name="location"
                value={userData.location}
                onChange={handleInputChange}
              >
                <option value="">Select your state</option>
                <option value="Andhra Pradesh">Andhra Pradesh</option>
                <option value="Arunachal Pradesh">Arunachal Pradesh</option>
                <option value="Assam">Assam</option>
                <option value="Bihar">Bihar</option>
                <option value="Chhattisgarh">Chhattisgarh</option>
                <option value="Goa">Goa</option>
                <option value="Gujarat">Gujarat</option>
                <option value="Haryana">Haryana</option>
                <option value="Himachal Pradesh">Himachal Pradesh</option>
                <option value="Jammu and Kashmir">Jammu and Kashmir</option>
                <option value="Jharkhand">Jharkhand</option>
                <option value="Karnataka">Karnataka</option>
                <option value="Kerala">Kerala</option>
                <option value="Madhya Pradesh">Madhya Pradesh</option>
                <option value="Maharashtra">Maharashtra</option>
                <option value="Manipur">Manipur</option>
                <option value="Meghalaya">Meghalaya</option>
                <option value="Mizoram">Mizoram</option>
                <option value="Nagaland">Nagaland</option>
                <option value="Odisha">Odisha</option>
                <option value="Punjab">Punjab</option>
                <option value="Rajasthan">Rajasthan</option>
                <option value="Sikkim">Sikkim</option>
                <option value="Tamil Nadu">Tamil Nadu</option>
                <option value="Telangana">Telangana</option>
                <option value="Tripura">Tripura</option>
                <option value="Uttar Pradesh">Uttar Pradesh</option>
                <option value="Uttarakhand">Uttarakhand</option>
                <option value="West Bengal">West Bengal</option>
              </select>
              <button
                className="btn"
                onClick={goToNextStep}
                 // Disable next until location is selected
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}
{/* Step 3: Ask reason for job change */}
{step === 3 && (
  <div>
  <h1>Hi {userData.name}, Let's understand your need</h1>
  <h2>May I know the major reason for your job change in your current/previous company?</h2>
  <p className='reqU'>So, we can better understand your requirements.</p>

  <div>
    <label>
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

  <div>
    <label>
      <input
        type="radio"
        name="reasonForChange"
        value="Looking on roll job"
        checked={userData.reasonForChange === 'Looking on roll job'}
        onChange={handleInputChange}
      />
      Looking on roll job
    </label>
  </div>

  <div>
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

  <div>
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

  <div>
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

  <div>
    <label>
      <input
        type="radio"
        name="reasonForChange"
        value="I'm not working. So looking job"
        checked={userData.reasonForChange === "I'm not working. So looking job"}
        onChange={handleInputChange}
      />
      I'm not working. So looking job
    </label>
  </div>

  <div>
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
    onClick={goToNextStep}
    disabled={!userData.reasonForChange} // Disable next until reason is selected
  >
    Next
  </button>
</div>

        
      )}

{/* Step 6: Job offer from Max Life Insurance */}
       {step === 4 && (
        <div>
          <h1>Job Offer from Max Life Insurance</h1>
          <p className='dynamic'>Hi {userData.name}, are you interested in this job?</p>

<p className='descP'>
<div className='headD'>Job Description:</div>
The Associate Agency Development Manager (Agency / Tied Channel ) :-
will be responsible for (Recruitment, Coach & Sales):

<div className='headD'>(As a Recruiter):-</div>
Your primary role will be to drive quality recruitment of Life Advisors and build up the agency business.
<div className='headD'>(As a Coach):-</div>

As a coach, your role will be to develop Life Advisors to make them self
dependent by setting goals for them, conducting reviews and assisting
them in their career path with Max Life Insurance.
<div className='headD'>(As a Sales Leader):-</div>
As a sales leader, your role will be to drive sales for the company through your team of life advisors, motivate your team and lead them in meeting the goals set forth by the company.




</p>

          <button className="btn" onClick={goToNextStep}>I'm Interested</button>
          <button className="btn" onClick={goToNextStep}>Not Interested</button>
        </div>
      )}


      {/* Step 3: Sequential details */}
      {step === 5 && (
        <div>
          <h1>Personal Details</h1>

          <label>Date of Birth:</label>
          <input
            className="input-field"
            type="date"
            name="dob"
            value={userData.dob}
            onChange={handleInputChange}
          />

          {userData.dob && (
            <div>
              <label>How long have you been residing in {userData.location || "your location"}?</label>
              <input
                className="input-field"
                name="residingTime"
                value={userData.residingTime}
                onChange={handleInputChange}
                placeholder="e.g., 5 years"
              />
            </div>
          )}
{userData.dob && (
                  <div>
                            <label>What is your total work experience?</label>
                            <select name="experience" className="input-field" onChange={handleInputChange}>
                              <option value="">Select Experience</option>
                               <option value="2.5">Less than 2.5 years</option>
                              <option value="2.5">2.5 years or more</option>
                             </select>
                           </div>
          )}
          
          {userData.residingTime && (
  <div>
    <label>What is your highest qualification?</label>
    <select
      className="input-field"
      name="education"
      value={userData.education}
      onChange={handleInputChange}
    >
      <option value="">Select Qualification</option>
      <option value="undergraduate">Undergraduate</option>
      <option value="graduate">Graduate</option>
      <option value="postgraduate">Postgraduate</option>
      <option value="diploma">Diploma</option>
      <option value="mba">MBA/PGDBM</option>
    </select>
  </div>
)}

{userData.education && (
  <div>
    <label>Do you have experience in sales or marketing?</label>
    <div>
      <label>
        <input
          type="radio"
          name="salesExperience"
          value="yes"
          onChange={handleInputChange}
          checked={userData.salesExperience === 'yes'}
        />
        Yes
      </label>
      <label>
        <input
          type="radio"
          name="salesExperience"
          value="no"
          onChange={handleInputChange}
          checked={userData.salesExperience === 'no'}
        />
        No
      </label>
    </div>
  </div>
)}

{userData.salesExperience === 'yes' && (
  <div>
    <label>
      Out of your {userData.experience} years of experience, how many do you have in sales/marketing?
    </label>
    <input
      className="input-field"
      name="salesExperienceYears"
      value={userData.salesExperienceYears || ''}
      onChange={handleInputChange}
      placeholder="Years in sales/marketing"
    />

    <label>What is your current/past industry?</label>
    <select
      className="input-field"
      name="industry"
      value={userData.industry}
      onChange={handleInputChange}
    >
      <option value="">Select Industry</option>
      <option value="FMCG">FMCG</option>
      <option value="Pharma">Pharma</option>
      <option value="Consumer Durables">Consumer Durables</option>
      <option value="Automobiles">Automobiles</option>
      <option value="Telecom / ISP">Telecom / ISP</option>
      <option value="Life Insurance">Life Insurance</option>
      <option value="General Insurance">General Insurance</option>
      <option value="Health Insurance">Health Insurance</option>
      <option value="Banking">Banking</option>
      <option value="Financial Services / NBFC / Loans / Securities / Broking">Financial Services / NBFC / Loans / Securities / Broking</option>
      <option value="Retail">Retail</option>
      <option value="Real Estate">Real Estate</option>
      <option value="Media / Entertainment">Media / Entertainment</option>
      <option value="Internet / Ecommerce">Internet / Ecommerce</option>
      <option value="Advertising / PR">Advertising / PR</option>
      <option value="Agriculture / Dairy">Agriculture / Dairy</option>
      <option value="Electricals / Switchgears">Electricals / Switchgears</option>
      <option value="Cement">Cement</option>
      <option value="Education">Education</option>
      <option value="Ceramics / Sanitary ware">Ceramics / Sanitary ware</option>
      <option value="Fertilizers / Pesticides">Fertilizers / Pesticides</option>
      <option value="Medical / Healthcare / Hospital">Medical / Healthcare / Hospital</option>
      <option value="Tyres">Tyres</option>
      <option value="Others">Others</option>
    </select>
    <button
                className="btn"
                onClick={goToNextStep}
                disabled={!userData.email} // Disable next until email is entered
              >
                Next
              </button>
  </div>
)}
        </div>
      )}


{step === 6 && (
  <div>
    <h2 className='changR'>How many job changes within your 3 years of experience?</h2>

    <div>
      <label>
        <input
          type="radio"
          name="jobChanges" // All radio buttons share the same name
          value="None" // Set the value for this option
          checked={userData.jobChanges === "None"} // Manage checked state
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

    <button className="btn" onClick={goToNextStep}>Next</button>
  </div>
)}




{step === 7 && (
         <div>
          <h1>What is your current/past major responsibility?</h1>
         <select name="responsibilities" className="input-field" onChange={handleInputChange}>
            <option value="">Select Responsibility</option>
             <option value="directSales">Direct Sales / Channel Sales</option>
             <option value="handlingDealer">Handling Dealer / Distribution channel</option>
           <option value="teamHandling">Team Handling of field executives</option>
            <option value="teleSales">Tele Sales / Tele Marketing</option>
          </select>
          <button className="btn" onClick={goToNextStep}>Next</button>
        </div>
      )}

       {step === 8 && (
        <div>
          <h1>Do you have experience in team handling?</h1>
          <button className="btn" onClick={() => {setUserData({...userData, teamHandling: 'yes'}); goToNextStep();}}>Yes</button>
           <button className="btn" onClick={() => {setUserData({...userData, teamHandling: 'no'}); goToNextStep();}}>No</button>
        </div>
     )}

      {step === 9 && userData.teamHandling === 'yes' && (
        <div>
          <h1>How many team members have you handled?</h1>
          <input className="input-field" name="teamMembers" onChange={handleInputChange} placeholder="Number of team members" />
           <button className="btn" onClick={goToNextStep}>Next</button>
         </div>
       )}

      {step === 10 && (
         <div>
           <h1>What is your current/previous company name?</h1>
           <input className="input-field" name="companyName" onChange={handleInputChange} placeholder="Company Name" />
           <h1>Designation</h1>
          <input className="input-field" name="designation" onChange={handleInputChange} placeholder="Designation" />
          <button className="btn" onClick={goToNextStep}>Next</button>
        </div>
      )}

       {step === 11 && (
        <div>
           <h1>Would you like to share your resume?</h1>
          <button className="btn" onClick={() => goToNextStep()}>Yes</button>
          <button className="btn" onClick={goToNextStep}>Later</button>
           {userData.resume && (
             <input type="file" name="resume" onChange={handleInputChange} />
          )}
           <input type="file" name="profilePicture" onChange={handleInputChange} placeholder="Profile Picture" />
         </div>
       )}

      {step === 12 && (
        <div>
           <h1>Plan your interview</h1>
           <h2>Please choose your availability day for the interview.</h2>
          <input className="input-field" type="date" name="interviewDate" onChange={handleInputChange} />
           <button className="btn" onClick={goToNextStep}>Next</button>
         </div>
       )}

{step === 13 && (
         <div>
           <h1 className='end'>Thank you!</h1>
          <p className='end'>We have successfully processed your candidature. Our executive will call you shortly to confirm your interview details.</p>
         </div>
      )}

    </div>
  );
}

export default App;

