import React, { useState } from 'react';

const BsfiSalesExperienceDetails = ({ userData, setUserData, setStep }) => {
    const [yearsOfExperience, setYearsOfExperience] = useState('');
    const [teamManagementExperience, setTeamManagementExperience] = useState('');
    const [individualContributorRole, setIndividualContributorRole] = useState('');

    // Check if the "Next" button should be enabled
    const isNextEnabled = yearsOfExperience && teamManagementExperience && individualContributorRole;

    const handleNext = () => {
        // Update userData with the sales experience details
        setUserData((prevData) => ({
            ...prevData,
            yearsOfExperience,
            teamManagementExperience,
            individualContributorRole,
        }));
        
        // Move to the next step
        setStep((prevStep) => prevStep + 1);
    };

    return (
        <div className="fhead">
            <h1>Sales Experience Details</h1>

            {/* Years of Experience */}
            <label>
                How many years of experience do you have selling the selected products?
                <div>
                    <textarea
                        value={yearsOfExperience}
                        onChange={(e) => setYearsOfExperience(e.target.value)}
                        placeholder="Enter years of experience"
                        rows={4}
                        cols={50}
                    />
                </div>
            </label>

            {/* Team Management Experience */}
            <label>
                Do you have team management experience?
                <div>
                    <label>
                        <input
                            type="radio"
                            name="teamManagement"
                            value="Yes"
                            onChange={(e) => setTeamManagementExperience(e.target.value)}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="teamManagement"
                            value="No"
                            onChange={(e) => setTeamManagementExperience(e.target.value)}
                        />
                        No
                    </label>
                </div>
            </label>

            {/* Individual Contributor Role */}
            <label>
                Are you open to an individual contributor role?
                <div>
                    <label>
                        <input
                            type="radio"
                            name="individualContributor"
                            value="Yes"
                            onChange={(e) => setIndividualContributorRole(e.target.value)}
                        />
                        Yes
                    </label>
                    <label>
                        <input
                            type="radio"
                            name="individualContributor"
                            value="No"
                            onChange={(e) => setIndividualContributorRole(e.target.value)}
                        />
                        No
                    </label>
                </div>
            </label>

            {/* Next Button */}
            <button className="btn" onClick={() =>  setStep(8)} disabled={!isNextEnabled}>
                Next
            </button>
        </div>
    );
};

export default BsfiSalesExperienceDetails;
