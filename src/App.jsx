
import React, { useState } from 'react';
import './App.css'; // Assuming external styling
import logo from './assets/WhatsApp Image 2024-09-21 at 12.47.30 PM.jpeg';
import logoo from './assets/image.jpeg'// Adjust the path if different
import IndustrySelect from './components/IndustrySelect';
import logooo from './assets/image2.jpeg'
import LocationSelect from './components/LocationSelect';
import Footer from "./components/Footer"
import SectorPreference from './components/SectorPreference'
import BankingRoles from './components/Banking';


function App() {
  const [step, setStep] = useState(1); // Main step tracking

  const [showThankYouMessage, setShowThankYouMessage] = useState(false);

  const [showReasonOptions, setShowReasonOptions] = useState(false);

  const [selectedSector, setSelectedSector] = useState("");




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
    interviewDate: '',
    phoneNumber: "",
   notInterestedReason: '',
   preferredSector: '',
   roles:'',

  });
  const [errors, setErrors] = useState({
    email: "",
    phoneNumber: "",
  });

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const validatePhoneNumber = (phoneNumber) => {
    const phoneRegex = /^[0-9]{10}$/;
    return phoneRegex.test(phoneNumber);
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });

    // Validate email and phone number
    if (name === "email") {
      if (!validateEmail(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          email: "Please enter a valid email address.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, email: "" }));
      }
    }
    if (name === "phoneNumber") {
      if (!validatePhoneNumber(value)) {
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: "Please enter a valid 10-digit phone number.",
        }));
      } else {
        setErrors((prevErrors) => ({ ...prevErrors, phoneNumber: "" }));
      }
    }
  };

  const handleNext = () => {
    // First check if it's step 4 and Tech or Fresher is selected
    console.log("Current Step:", step, "Selected Sector:", selectedSector);
    if (step === 6 && (selectedSector === 'Tech' || selectedSector === 'Fresher')) {
      setStep(8); // Skip step 7, go directly to step 8
      console.log("Current Step:", step, "Selected Sector:", selectedSector);
    } 
    
    // Then handle the regular step logic
    else if (!errors.email && !errors.phoneNumber && userData.email && userData.phoneNumber) {
      setStep(step + 1);
    } else {
      alert("Please fill the form correctly before proceeding.");
    }
  
    // Special case for step 13 (if applicable)
    if (step === 13) {
      setStep(9);
    }
  };
  

  const goToNextStep = () => {
    if (step === 1 && userData.jobChange) {
      setStep(2);
    } else if (
      step === 2 &&
      userData.phoneNumber &&
      !errors.phoneNumber &&
      userData.email &&
      !errors.email
    ) {
      setStep(3);
    } else if (step === 2 && !userData.phoneNumber && !userData.email) {
      alert("Please enter both phone number and email before proceeding.");
    }
  };
  return (



      <div className="form-container">
 <div className="logo-container">
        <img src={logo} alt="Logo" className="form-logo" />
        <div style={{ borderBottom: "2px solid black", width: "100%", margin: "10px auto" }}></div>
   </div>
<span className="border tl"></span>
<span className="border tr"></span>
<span className="border bl"></span>
<span className="border br"></span>

      {/* Step 1: Are you looking for a job change? */}
      {step === 1 && (
        <div className='fhead' >
          <div>
            <img src={logoo} alt="logo" className="form-logoo" />
          </div>
          <h2 className='headM'> Are you looking for a job change?</h2>
          <div>
          
            <label >
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
          <form >
          <label >
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
               <label className='Ename '>Please enter your name</label>
              <input
                className="input-field"
                name="name"
                value={userData.name}
                onChange={handleInputChange}
                placeholder="Your name"
              /></form>
           
              <button
                className="btn"
                onClick={goToNextStep}
                disabled={!userData.name} // Disable next button until name is entered
              >
                Next
              </button>
            </div>
          )}



          {userData.jobChange === 'no' && (


<div className='headM_m'>
<div>
  <img src={logooo} alt="logo" className="form-logoo" />
</div>

<p className='headM_m'>Would you like to register your profile? We can send job alerts in the future.</p>

{/* Combine both radio buttons in a single form */}
<form className="container">
  <label className="form-control">
    <input
      type="radio"
      name="profileRegistration"
      value="yes"
      onChange={() => setUserData({ ...userData, profileRegistration: true })}
      checked={userData.profileRegistration === true} // Ensure only one option is checked at a time
    />
    Yes
  </label>
<div></div>
  <label className="form-control">
    <input
      type="radio"
      name="profileRegistration"
      value="no"
      onChange={() => setUserData({ ...userData, profileRegistration: false })}
      checked={userData.profileRegistration === false} // Ensure only one option is checked at a time
    />
    No
  </label>
</form>
</div>
          )}

          {userData.profileRegistration && (
            <div className='fhead'>
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
                onClick={() => {
                  setShowThankYouMessage(true);
                }}
                disabled={!userData.name}
              >
                Next
              </button>
              {showThankYouMessage && (
                <div>
                  <h2>Thank you for visiting! We will contact you soon with future opportunities.</h2>
                </div>
              )}
            </div>

          )}



          {userData.registerProfile && (
            <div className='fhead'>
              <label className='Ename'>May I know your name?</label>
            
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

          {/* New Residing Location Dropdown */}
          {userData.email && (
            <div>

              <LocationSelect
                value={userData.location}
                handleInputChange={handleInputChange}
              />


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
              Looking on roll job
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
                value="I'm not working. So looking job"
                checked={userData.reasonForChange === "I'm not working. So looking job"}
                onChange={handleInputChange}
              />
              I'm not working. So looking job
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


      )}

{/* current professsions options */}
   {step === 4 && (
  <div className='fhead'>
    <h1 className='fhead_2'>Current Profession</h1>
    <p className='dynamic'>Hi {userData.name}, what are you currently working as?</p>

    <p className='descP'>
      <div className='headD'></div>
      {/* Job Description Content */}
    </p>


    <div>
      <div><label>
    <input 
      type="radio" 
      name="preferredSector" 
      value="Banking" 
      onChange={() => {
        setSelectedSector("Banking");
        setShowReasonOptions(true); 
      }} // Executes handleNext when "Banking" is selected
    />
    Banking
  </label></div>
  
<div>
  <label>
    <input 
      type="radio" 
      name="preferredSector" 
      value="Tech" 
      onChange={() => {
        setSelectedSector("Tech");
        handleNext();  // Skip to step 8
      }} // Executes setShowReasonOptions(true) when "Tech" is selected
    />
    Tech
  </label>
  </div>


  <label>
    <input 
      type="radio" 
      name="preferredSector" 
      value="Fresher" 
      onChange={() => {
        setSelectedSector("Fresher");
        handleNext();  // Skip to step 8
      }}// Executes setShowReasonOptions(true) when "Fresher" is selected
    />
    Fresher
  </label>


</div>



    {/* Show reason options if Not Interested is clicked */}
    {showReasonOptions && (
      <div className="reason-options">
        <h2 className='headM_4'>Which jobs you would like to apply for?</h2>
        {/* Reason options */}
        <div></div>
        {["Sales CASA", "Sales Wealth", "Sales NRI", "No job stability & career growth", "Sales LAP", "Sales Home Loan", "Sales Vechile Finance","Sales Equity", "Credit Operation", "Branch Operation"].map((reason, index) => (
          <label key={index}>
            <input 
              type="radio" 
              name="notInterestedReason" 
              value={reason} 
              onChange={handleInputChange} 
            />
            {reason}
          </label>
        ))}

        {/* Show Next Button after selecting a reason */}
        {userData.notInterestedReason && (
          <button className="btn" onClick={() => setStep(5)}>
            Next
          </button>
        )}
      </div>
    )}
  </div>
)}

{/* Step 13: Sector Preference Page (Only if Not Interested is clicked) */}
{/* {step === 13 && (
  <SectorPreference
    userData={userData}
    handleInputChange={handleInputChange}
    handleNext={handleNext}
  />
)} */}


{/* Step 13: Sector Preference Page (Only if Not Interested is clicked) */}
 {/* {step === 13 && (
  <BankingRoles
    userData={userData}
    handleInputChange={handleInputChange}
    handleNext={handleNext}
  />
)}  */}


      {/* Step 3: Sequential details */}
      {step === 5 && (
        <div className='fhead'>
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
            <div className='fhead'>
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
            <div className='fhead'>
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
            <div className='fhead'>
              <label>Do you have experience in sales or marketing?</label>
              <div >
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
            <div className='fhead'>
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

              <IndustrySelect
                industry={userData.industry}
                onChange={handleInputChange}
              />
              <button
                className="btn"
                onClick={handleNext}
                disabled={!userData.email}
              >
                Next
              </button>
            </div>
          )}

          {userData.salesExperience === 'no' && (
            <div className='fhead'>
              <IndustrySelect
                industry={userData.industry}
                onChange={handleInputChange}
              />
              <button
                className="btn"
                onClick={handleNext}
                disabled={!userData.email}
              >
                Next
              </button>
            </div>
          )}

        </div>
      )}


      {step === 6 && (
        <div className='fhead'>
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

          <button className="btn" onClick={handleNext}
            disabled={!userData.jobChanges}
          >Next</button>
        </div>
      )}




      {step === 7 && selectedSector !== "Tech" && selectedSector !== "Fresher" && (
        <div className='fhead'>
          <h1>What is your current/past major responsibility?</h1>
          <select name="responsibilities" className="input-field" onChange={handleInputChange}>
            <option value="">Select Responsibility</option>
            <option value="directSales">Direct Sales / Channel Sales</option>
            <option value="handlingDealer">Handling Dealer / Distribution channel</option>
            <option value="teamHandling">Team Handling of field executives</option>
            <option value="teleSales">Tele Sales / Tele Marketing</option>
          </select>
          <button className="btn" onClick={handleNext}
            disabled={!userData.responsibilities}>Next</button>
        </div>
      )}
      {step === 8 &&(
        <div>
          <h2 className='headM_2'>Do you have experience in team handling?</h2>
          <button
            className="btn"
            onClick={() => {
              setUserData({ ...userData, teamHandling: 'yes' });
              // Don't call handleNext yet; wait for team members input
            }}
          >
            Yes
          </button>
          <button
            className="btn"
            onClick={() => {
              setUserData({ ...userData, teamHandling: 'no' });
              handleNext(); // Proceed to the next step immediately
            }}
          >
            No
          </button>

          {/* Show team members input only if "Yes" is selected */}
          {userData.teamHandling === 'yes' && (
            <div className='fhead'>
              <h2 className='headM_2'>How many team members have you handled?</h2>
              <input
                className="input-field"
                name="teamMembers"
                type="number" // Ensures only numbers can be entered
                onChange={handleInputChange}
                placeholder="Number of team members"
              />
              <button
                className="btn"
                onClick={() => {
                  handleNext(); // Proceed to the next step after entering team members
                }}
                disabled={!userData.teamMembers} // Disable if no number is entered
              >
                Next
              </button>
            </div>
          )}
        </div>
      )}

      {step === 9 && (
        <div className='fhead'>
          <h2 className='headM_2'>What is your current/previous company name?</h2>
          <input className="input-field" name="companyName" onChange={handleInputChange} placeholder="Company Name" />
          <h2 className='headM_2'>Designation</h2>
          <input className="input-field" name="designation" onChange={handleInputChange} placeholder="Designation" />
          <button className="btn" onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 10 && (
        <div className='fhead'>
          <h2 className='headM_3'>Would you like to share your resume?</h2>
          <button className="btn" onClick={() => handleNext()}>Yes</button>
          <button className="btn" onClick={handleNext}>Later</button>
          {userData.resume && (
            <input type="file" name="resume" onChange={handleInputChange} />
          )}
          <input type="file" name="profilePicture" onChange={handleInputChange} placeholder="Profile Picture" />
        </div>
      )}

      {step === 11 && (
        <div className='fhead'>
          <h1>Plan your interview</h1>
          <h2 className='intwe'>Please choose your availability day for the interview.</h2>
          <input className="input-field" type="date" name="interviewDate" onChange={handleInputChange} />
          <button className="btn" onClick={handleNext}>Next</button>
        </div>
      )}

      {step === 12 && (
        <div className='fhead'>
          <h1 className='end'>Thank you!</h1>
          <p className='end'>We have successfully processed your candidature. Our executive will call you shortly to confirm your interview details.</p>
        </div>

      )}
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;

