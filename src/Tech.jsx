import React, { useState } from 'react';

const Tech = ({ setStep }) => {
  const [selectedSector, setSelectedSector] = useState(""); // Sector selection
  const [selectedSkills, setSelectedSkills] = useState([]);  // Selected tech skills
  const [ratings, setRatings] = useState({});  // Skill ratings

  const techSkills = [
    "AWS", "Devops", "EC2", "S3", "Lambda", "Relational Database Service", 
    "VPC", "CloudFormation", "DynamoDB", "IAM", "CloudFront", "Elastic Beanstalk", 
    "AWS Glue", "Redshift", "SNS", "SQS", "Azure", "Azure Virtual Machines (VMs)", 
    "Azure Blob Storage", "Azure App Service", "Azure Functions", "Azure SQL Database", 
    "Azure DevOps", "Azure Active Directory (AD)", "Azure Kubernetes Service (AKS)", 
    "Azure Virtual Network (VNet)", "Azure Data Factory", "Azure Cosmos DB", 
    "Azure Synapse Analytics", "Azure Logic Apps", "Azure API Management", "GCP", 
    "Compute Engine", "Cloud Storage", "Cloud Functions", "BigQuery", "Cloud SQL", 
    "Google Kubernetes Engine (GKE)", "Cloud Pub/Sub", "Cloud Spanner", "Cloud Run", 
    "Cloud Dataflow", "Firebase", "Cloud Firestore", "Programming Languages", "Java", 
    "Python", "C#", "JavaScript", "C++", "Ruby", "PHP", "Go", "Database Management", 
    "SQL", "MySQL", "PostgreSQL", "MongoDB", "Oracle Database", "Microsoft SQL Server", 
    "DevOps", "Docker", "Kubernetes", "Jenkins", "Ansible", "Terraform", "Puppet", 
    "Chef", "Linux/Unix", "Windows Server", "VMware", "Hyper-V", "Citrix", 
    "Cybersecurity", "Network Security", "Information Security (Infosec)", 
    "Penetration Testing", "Ethical Hacking", "Firewalls and VPNs", "MDM", 
    "Enterprise Mobility Management (EMM)", "Intune", "AirWatch", "HTML/CSS", 
    "React.js", "Angular.js", "Vue.js", "Node.js", "Cisco Networking (CCNA, CCNP)", 
    "TCP/IP", "DNS/DHCP", "Load Balancing", "Firewalls", "Apache Hadoop", "Apache Spark", 
    "Tableau", "Power BI", "SAS", "R programming", "Talend", "Ab Initio", "Adobe Analytics", 
    "Shell Scripting (Bash, PowerShell)", "Python Automation", "Perl", "Automation Anywhere", 
    "Docker", "Kubernetes", "OpenShift", "TensorFlow", "PyTorch", "Keras", "Scikit-learn", 
    "Generative AI", "NLP", "Salesforce", "SAP", "Oracle ERP", "Microsoft Dynamics", 
    ".NET Framework", "Spring Boot (Java)", "Django (Python)", "Flask (Python)", 
    "Laravel (PHP)", "Git", "SVN (Subversion)", "GitHub", "GitLab", "Tableau", "Power BI", 
    "QlikView", "MicroStrategy", "RESTful APIs", "SOAP", "GraphQL", "Ethereum", 
    "Hyperledger", "Smart Contract", "Jenkins", "Travis CI", "CircleCI", "Talend", 
    "Ab Initio", "Informatica", "Apache Nifi", "Oracle Data Integrator (ODI)", 
    "Data Modeling", "Star Schema", "Snowflake Schema", "Dimensional Modeling", 
    "Erwin Data Modeler"
  ];
  
  const isNextEnabled = 
  selectedSkills.length >= 1 && 
  selectedSkills.every(skill => ratings[skill] >= 1 && ratings[skill] <= 5);
  
  const handleDeleteSkill = (skillToDelete) => {
    setSelectedSkills(selectedSkills.filter(skill => skill !== skillToDelete));
    setRatings(prevRatings => {
      const updatedRatings = { ...prevRatings };
      delete updatedRatings[skillToDelete]; // Remove rating of the deleted skill
      return updatedRatings;
    });
  };

  const handleTechSkillSelect = (skill) => {
    if (selectedSkills.length < 5 && !selectedSkills.includes(skill)) {
      setSelectedSkills([...selectedSkills, skill]);
    }
  };

  const handleTechSkillChange = (skill, rating) => {
    setRatings((prevRatings) => ({
      ...prevRatings,
      [skill]: Number(rating)
    }));
  };

  return (
    <div>
      {selectedSector === "Tech" && (
        <div className='fhead'>
          <h1>Tech Skills</h1>
          <p className='top_5'>Please choose the top 5 tech skills you rate yourself on a scale of 1 to 5 (1 being lowest, 5 being highest).</p>

          <div className="select-container">
            <select onChange={(e) => handleTechSkillSelect(e.target.value)}>
              <option value="">Select a skill</option>
              {techSkills.filter(skill => !selectedSkills.includes(skill)).map((skill, index) => (
                <option key={index} value={skill}>{skill}</option>
              ))}
            </select>

            {selectedSkills.map((skill, index) => (
              <div key={index} className="skill-rating">
                <label>{skill}</label>
                <input
                  type="number"
                  min="1"
                  max="5"
                  value={ratings[skill] || 0}
                  onChange={(e) => handleTechSkillChange(skill, e.target.value)}
                />
                <button className="delete-btn" onClick={() => handleDeleteSkill(skill)}>
                  Delete
                </button>
              </div>
            ))}
          </div>

          {selectedSkills.length >= 5 && <p className='max_skill'>You have selected the maximum number of skills.</p>}
          <div>
            <button disabled={!isNextEnabled} className="btn" onClick={() => setStep(7)}>
              Next
            </button>
          </div>
        </div>
      )}

      <div>
        <button onClick={() => setSelectedSector("Tech")}>Select Tech Skills</button>
      </div>
    </div>
  );
};

export default Tech;
