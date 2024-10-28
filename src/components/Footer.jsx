// src/components/Footer.jsx
import React from 'react';

const Footer = () => {
  return (
    <div className='foot'>
      <footer style={{ marginTop: '20px', textAlign: 'center', width: '100%', color: "black" }}>
        {/* <small>Disclaimer: - Changeleaders.in never charged a single penny from the candidates. Our services are free of cost for candidates.</small> */}
        <p>&copy; {new Date().getFullYear()} ○	All rights reserved by Changeleaders Consulting Private Limited.</p>
      </footer>
    </div>
  );
};

export default Footer;







var subsets = function(nums) {
  let result = [[]]; // Start with an empty subset

  // Loop through each number in the input array
  for (let i = 0; i < nums.length; i++) {
      let currentNum = nums[i];
      let newSubsets = [];

      // Loop through each existing subset in the result
      for (let j = 0; j < result.length; j++) {
          // Create a new subset by adding the current number to each existing subset
          let newSubset = [...result[j], currentNum];
          newSubsets.push(newSubset);
      }

      // Add all the new subsets to the result array
      result = result.concat(newSubsets);
  }

  return result;
};
 // [1, 2, 3]