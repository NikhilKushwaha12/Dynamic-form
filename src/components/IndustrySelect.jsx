import React from 'react';

const IndustrySelect = ({ industry, onChange }) => {
  return (
    <div>
      <label>What is your current/past industry?</label>
      <select
        className="input-field"
        name="industry"
        value={industry}
        onChange={onChange}
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
    </div>
  );
};

export default IndustrySelect;
