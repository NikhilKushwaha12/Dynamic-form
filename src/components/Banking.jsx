import React from 'react';

const BankingRoles = ({ roles, onChange }) => {
  return (
    <div>
      <label>Which jobs you would like to apply for?
      </label>
      <select
        className="input-field"
        name="industry"
        value={roles}
        onChange={onChange}
      >
        <option value="">Select roles</option>
        <option value="FMCG">Sales CASA
        </option>
        <option value="Pharma">Sales Wealth
        </option>
        <option value="Consumer Durables">Sales NRI
        </option>
        <option value="Automobiles">Sales LAP
        </option>
        <option value="Telecom / ISP">Sales Home Loan
        </option>
        <option value="Life Insurance">Sales Vechile Finance 
        </option>
        <option value="General Insurance">Sales Equity
        </option>
        <option value="Health Insurance">Credit Operation
        </option>
        <option value="Banking">Branch Operation</option>
      
      </select>
    </div>
  );
};

export default BankingRoles;
