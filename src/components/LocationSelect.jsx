// LocationSelect.js
// import React from 'react';

// const LocationSelect = ({ value, handleInputChange }) => {
//   return (
//     <div className='fhead'>
//       <label>What is your residing location?</label>
//       <select
//         className="input-field"
//         name="location"
//         value={value}
//         onChange={handleInputChange}
//       >
//         <option value="">Select your state</option>
//         <option value="Andhra Pradesh">Andhra Pradesh</option>
//         <option value="Arunachal Pradesh">Arunachal Pradesh</option>
//         <option value="Assam">Assam</option>
//         <option value="Bihar">Bihar</option>
//         <option value="Chhattisgarh">Chhattisgarh</option>
//         <option value="Goa">Goa</option>
//         <option value="Gujarat">Gujarat</option>
//         <option value="Haryana">Haryana</option>
//         <option value="Himachal Pradesh">Himachal Pradesh</option>
//         <option value="Jammu and Kashmir">Jammu and Kashmir</option>
//         <option value="Jharkhand">Jharkhand</option>
//         <option value="Karnataka">Karnataka</option>
//         <option value="Kerala">Kerala</option>
//         <option value="Madhya Pradesh">Madhya Pradesh</option>
//         <option value="Maharashtra">Maharashtra</option>
//         <option value="Manipur">Manipur</option>
//         <option value="Meghalaya">Meghalaya</option>
//         <option value="Mizoram">Mizoram</option>
//         <option value="Nagaland">Nagaland</option>
//         <option value="Odisha">Odisha</option>
//         <option value="Punjab">Punjab</option>
//         <option value="Rajasthan">Rajasthan</option>
//         <option value="Sikkim">Sikkim</option>
//         <option value="Tamil Nadu">Tamil Nadu</option>
//         <option value="Telangana">Telangana</option>
//         <option value="Tripura">Tripura</option>
//         <option value="Uttar Pradesh">Uttar Pradesh</option>
//         <option value="Uttarakhand">Uttarakhand</option>
//         <option value="West Bengal">West Bengal</option>
//       </select>
//     </div>
//   );
// };

// export default LocationSelect;
import React from 'react';
const LocationSelect = ({ value, handleInputChange, stateCities, selectedState }) => {
  return (
    <div className='fhead'>
      <label>What is your residing location?</label>
      <select
        className="input-field"
        name="location"
        value={value}
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
        <option value="Andaman and Nicobar Islands">Andaman and Nicobar Islands</option>
        <option value="Chandigarh">Chandigarh
        </option>
        <option value="Dadra and Nagar Haveli and Daman & Diu">Dadra and Nagar Haveli and Daman & Diu
        </option>
        <option value="Delhi">Delhi</option>
        <option value="Jammu & Kashmir">Jammu & Kashmir
        </option>
        <option value="Ladakh">Ladakh</option>
        <option value="Lakshadweep">Lakshadweep</option>
        <option value="Puducherry">Puducherry</option>
      </select>


      {/* Show city dropdown only when state is selected */}
      {selectedState && (
        <div className='fhead'>
          <label>Select your city</label>
          <select className="input-field" name="city" onChange={handleInputChange}>
            <option value="">Select your city</option>
            {stateCities[selectedState].map((city, index) => (
              <option key={index} value={city}>{city}</option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
};

export default LocationSelect;
