
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import './App.css'; // Assuming external styling
import logo from './assets/WhatsApp Image 2024-09-21 at 12.47.30 PM.jpeg';
import logoo from './assets/image.jpeg'// Adjust the path if different
import logooo from './assets/image2.jpeg'
import Footer from "./components/Footer"
import TechDetails from './TechDetails';
import TechAdditionalQuestions from './Techadditional';
import ThankYou from './components/ThanksTech';
import JobChanges from './JobChange';
import CurrentJob from './CurrentJob';
import PersonalDetails from './Routes/PersonalDetails';
import JobChangeReasons from './Routes/JobChangeReasons';
import SmallDetails from './Routes/SmallDetails';
import BsfiSalesExperienceDetails from './Routes/Bfsi';
import BsfiAdditionalDetails from './Routes/BsfiAdditional';
import FirstPage from './Routes/FirstPage';
import MediaDetails from './Routes/Media';
import MediaAdditional from './Routes/MediaAdditional';
import FreshersDetails from './Routes/Freshers';

function App() {
  const [step, setStep] = useState(1); // Main step tracking
  const [showThankYouMessage, setShowThankYouMessage] = useState(false);
  const [showReasonOptions, setShowReasonOptions] = useState(false);
  const [selectedSector, setSelectedSector] = useState("");
  const [selectedState, setSelectedState] = useState('');

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const [userData, setUserData] = useState({
    jobChange: '',
    name: '',
    mobile: '',
    email: '',
    location: '',
    city: '',
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
    roles: '',
    relevantQualification: '',
    individualContributor: '',
    teamManagement: '',
    currentSalary: '',
    expectedSalary: '',
    noticePeriod: '',
    relocate: '',
    maritalStatus: '',
    spouseProfession: '',
    parentsCity: '',
    currentCTC: '',
    expectedCTC: '',
    hasOffers: '',
    offerAmount: '',
    lastWorkingDay: '',
    graduationYear: '',
    collegeName: '',
    graduationField: '',

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
    if (name === 'location') {
      setSelectedState(value);
      setUserData({ ...userData, location: value, city: '' }); // Reset city when state changes
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
      // alert("Please fill the form correctly before proceeding.");
      setStep(step + 1)
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


      {/* Step 1: Are you looking for a job change? */}
      {step === 1 && (
        <FirstPage
          userData={userData}
          handleInputChange={handleInputChange}
          goToNextStep={goToNextStep}
          logoo={logoo}
          logooo={logooo}
        />
      )}


      {/* Step 2: Enter phone number and email */}
      {step === 2 && (
        <SmallDetails
          userData={userData}
          errors={errors}
          handleInputChange={handleInputChange}
          setStep={setStep}
        />
      )}




      {/* Step 3: Ask reason for job change */}
      {step === 3 && (
        <JobChangeReasons
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
      )}




      {/* current PersonalDetails  */}
      {step === 4 && (
        < PersonalDetails
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
      )}


      {step === 5 && (
        <JobChanges
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          setStep={setStep}
        />
      )}


      {step === 6 && (
        <CurrentJob
          userData={userData}
          setSelectedSector={setSelectedSector}
          setShowReasonOptions={setShowReasonOptions}
          setStep={setStep}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
          selectedSector={selectedSector}
          showReasonOptions={showReasonOptions}
        />
      )}


      {step === 7 && selectedSector === "Tech" && (
        <TechDetails setStep={setStep} />
      )}


      {step === 8 && selectedSector === "Tech" && (
        <TechAdditionalQuestions setStep={setStep} />
      )}




      {step === 7 && selectedSector === "Banking" && (
        <BsfiSalesExperienceDetails setStep={setStep} />
      )}


      {step === 8 && selectedSector === "Banking" && (
        <BsfiAdditionalDetails setStep={setStep} />
      )}

      {step === 7 && selectedSector === "Media" && (
        <MediaDetails
          setStep={setStep}
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}
        />
      )}


      {step === 8 && selectedSector === "Media" && (
        <MediaAdditional setStep={setStep}
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}


        />
      )}

      {step === 7 && selectedSector === "Fresher" && (
        <FreshersDetails setStep={setStep}
          userData={userData}
          handleInputChange={handleInputChange}
          handleNext={handleNext}


        />
      )}
      {step === 9 && (
        <ThankYou />
      )}

   {/* Back Button */}
   <div>
   {step > 1 && <button onClick={handleBack}>Back</button>}
   </div>
    
      <div>
        <Footer />
      </div>
      
    </div>
  );
}

export default App;

