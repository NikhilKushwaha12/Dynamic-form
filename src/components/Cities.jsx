import React from 'react';

// Exporting the state-to-cities mapping
export const stateCities = {
	"Andhra Pradesh": ["Vijayawada", "Visakhapatnam", "Guntur", "Tirupati", "Rajahmundry", "Kakinada", "Nellore", "Eluru", "Kadapa", "Kurnool", "Anantapur", "Ongole", "Machilipatnam", "Chittoor", "Proddatur", "Srikakulam", "Vizianagaram", "Tenali", "Bhavani Island", "Puttur", "Markapur"],
	"Arunachal Pradesh": ["Itanagar", "Jairampur", "Khonsa", "Koloriang", "Changlang", "Miao", "Aalo", "Yingkiong", "Basar", "Dirang", "Hawai", "Anini", "Deomali", "Pasighat", "Tezu", "Tawang", "Ziro", "Bomdila", "Daporijo", "Roing"],
	"Assam": ["Guwahati", "Dibrugarh", "Silchar", "Jorhat", "Tinsukia", "Tezpur", "Nagaon", "Sivasagar", "Bongaigaon", "Barpeta", "Goalpara", "Dhubri", "Karimganj", "North Lakhimpur", "Golaghat", "Kokrajhar", "Morigaon", "Hailakandi", "Diphu", "Udalguri"],
	"Bihar": ["Patna", "Gaya", "Bhagalpur", "Muzaffarpur", "Darbhanga", "Purnia", "Begusarai", "Katihar", "Munger", "Chhapra", "Bihar Sharif", "Arrah", "Saharsa", "Hajipur", "Bettiah", "Motihari", "Siwan", "Samastipur", "Nawada", "Dehri", "Sasaram", "Jamui", "Sitamarhi", "Buxar", "Jehanabad", "Aurangabad"],
	"Chhattisgarh": ["Raipur", "Bilaspur", "Durg", "Bhilai", "Korba", "Rajnandgaon", "Jagdalpur", "Raigarh", "Dhamtari", "Mahasamund", "Ambikapur", "Chirmiri", "Kawardha", "Dalli Rajhara", "Manendragarh", "Sakti", "Sarangarh", "Kanker", "Balod", "Bijapur"],
	"Goa": ["Panaji", "Margao", "Vasco da Gama", "Mapusa", "Ponda", "Bicholim", "Sanguem", "Curchorem", "Canacona", "Valpoi", "Mormugao", "Quepem", "Sanquelim", "Tivim", "Calangute", "Candolim", "Pernem"],
	"Gujarat": ["Ahmedabad", "Surat", "Vadodara", "Rajkot", "Bhavnagar", "Jamnagar", "Junagadh", "Gandhinagar", "Anand", "Nadiad", "Vapi", "Bharuch", "Morbi", "Navsari", "Porbandar", "Surendranagar", "Godhra", "Patan", "Mehsana", "Dahod", "Amreli", "Palanpur", "Valsad", "Botad", "Modasa", "Veraval", "Bhuj", "Gondal", "Jetpur", "Mandvi", "Sidhpur", "Kalol"],
	"Haryana": ["Gurugram", "Faridabad", "Panipat", "Ambala", "Karnal", "Rohtak", "Hisar", "Panchkula", "Yamunanagar", "Sonipat", "Bhiwani", "Sirsa", "Rewari", "Kurukshetra", "Jind", "Bahadurgarh", "Kaithal", "Palwal", "Mahendragarh", "Fatehabad", "Jhajjar", "Charkhi Dadri", "Narnaul", "Hansi"],
	"Himachal Pradesh": ["Shimla", "Dharamshala", "Kullu", "Manali", "Solan", "Mandi", "Bilaspur", "Hamirpur", "Una", "Nahan", "Palampur", "Chamba", "Keylong", "Kinnaur", "Shimla", "Rohru", "Kotkhai", "Jaswan", "Sarkaghat", "Baijnath"],
	"Jharkhand": ["Ranchi", "Jamshedpur", "Dhanbad", "Bokaro Steel City", "Deoghar", "Giridih", "Hazaribagh", "Dumka", "Chaibasa", "Ramgarh", "Palamu", "Koderma", "Saraikela", "East Singhbhum", "West Singhbhum", "Simdega", "Latehar", "Pakur", "Godda", "Chatra"],
	"Karnataka": ["Bengaluru", "Mysuru", "Mangaluru", "Hubballi", "Dharwad", "Belagavi", "Ballari", "Kalaburagi", "Davangere", "Udupi", "Kolar", "Chitradurga", "Raichur", "Shivamogga", "Bagalkot", "Tumakuru", "Hassan", "Mandya", "Chikkamagaluru", "Dakshina Kannada", "Kodagu", "Chikballapur"],
	"Kerala": ["Thiruvananthapuram", "Kochi", "Kozhikode", "Kottayam", "Thrissur", "Malappuram", "Palakkad", "Alappuzha", "Idukki", "Pathanamthitta", "Wayanad", "Ernakulam", "Kannur", "Kollam", "Munnar", "Vypin", "Chalakudy", "Ponnani", "Payyannur", "Kumarakom"],
	"Madhya Pradesh": ["Bhopal", "Indore", "Gwalior", "Jabalpur", "Ujjain", "Sagar", "Satna", "Dewas", "Rewa", "Burhanpur", "Khargone", "Khandwa", "Mandsaur", "Ratlam", "Chhindwara", "Sehore", "Vidisha", "Neemuch", "Shivpuri", "Betul", "Hoshangabad"],
	"Maharashtra": ["Mumbai", "Pune", "Nagpur", "Nashik", "Aurangabad", "Thane", "Solapur", "Kolhapur", "Ahmednagar", "Dhule", "Jalna", "Amravati", "Akola", "Ratnagiri", "Sindhudurg", "Wardha", "Bhandara", "Gadchiroli", "Nanded", "Palghar", "Satara", "Sangli", "Yavatmal", "Raigad", "Mumbai Suburban", "Dharavi", "Kalyan", "Ulhasnagar", "Virar"],
	"Manipur": ["Imphal", "Thoubal", "Kakching", "Churachandpur", "Bishnupur", "Senapati", "Tamenglong", "Ukhrul", "Jiribam", "Chandel", "Khongjom", "Noney", "Moreh", "Lilong", "Mayang Imphal", "Khangabok", "Nambol", "Lamsang", "Sapam", "Phundrei"],
	"Meghalaya": ["Shillong", "Tura", "Nongpoh", "Jowai", "Bishop", "Mawlai", "Williamnagar", "Bholaganj", "Nongstoin", "Mairang", "Rongjeng", "Ampati", "Sohra", "Resubelpara", "Khliehriat", "Pynursla", "Sohiong", "Langkyrding", "Dawki", "Mahendraganj"],
	"Mizoram": ["Aizawl", "Lunglei", "Saiha", "Champhai", "Kolasib", "Serchhip", "Mamit", "Lawngtlai", "Hnahthial", "Saitual", "Lunglei", "Kolasib"],
	"Nagaland": ["Kohima", "Dimapur", "Mokokchung", "Tuensang", "Wokha", "Zunheboto", "Peren", "Mon", "Longleng", "Kiphire", "Phek", "Chümoukedima", "Bokajan", "Peren", "Alichen", "Wokha", "Kiphire", "Phek", "Tizit"],
	"Odisha": ["Bhubaneswar", "Cuttack", "Sambalpur", "Berhampur", "Rourkela", "Puri", "Balasore", "Kendrapara", "Dhenkanal", "Bhadrak", "Angul", "Khurda", "Jagatsinghpur", "Jajpur", "Kandhamal", "Nabarangpur", "Ganjam", "Mayurbhanj", "Boudh", "Kalahandi", "Koraput", "Subarnapur", "Rayagada", "Nayagarh"],
	"Punjab": ["Amritsar", "Ludhiana", "Jalandhar", "Patiala", "Bathinda", "Mohali", "Moga", "Hoshiarpur", "Firozpur", "Rupnagar", "Kapurthala", "Tarn Taran", "Sangrur", "Faridkot", "Barnala", "Pathankot", "Gurdaspur", "Nawanshahr", "SAS Nagar", "Phagwara"],
	"Rajasthan": ["Jaipur", "Udaipur", "Jodhpur", "Ajmer", "Bikaner", "Kota", "Jaisalmer", "Sikar", "Tonk", "Bhilwara", "Churu", "Pali", "Alwar", "Dholpur", "Rajsamand", "Hanumangarh", "Nagaur", "Barmer", "Sawai Madhopur", "Dausa", "Jhunjhunu", "Banswara", "Pali", "Bharatpur", "Jhalawar", "Rajasamand", "Jaisamand", "Sirohi"],
	"Sikkim": ["Gangtok", "Namchi", "Pakyong", "Mangan", "Gyalshing", "Jorethang", "Rabong", "Singtam", "Soreng", "Yuksom"],
	"Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli", "Erode", "Vellore", "Thanjavur", "Dindigul", "Kanchipuram", "Kumarapalayam", "Nagercoil", "Karur", "Pudukkottai", "Villupuram", "Nagapattinam", "Sivagangai", "Tiruvannamalai", "Namakkal"],
	"Telangana": ["Hyderabad", "Warangal", "Nizamabad", "Khammam", "Ranga Reddy", "Mahbubnagar", "Karimnagar", "Nalgonda", "Adilabad", "Medak", "Suryapet", "Siddipet", "Jagitial", "Peddapalli", "Medchal-Malkajgiri", "Vikarabad", "Kamareddy", "Mahabubnagar", "Mancherial", "Nirmal"],
	"Tripura": ["Agartala", "Sepahijala", "Dharmanagar", "Udaipur", "Ambassa", "Kailashahar", "Khowai", "Belonia", "Bishalgarh", "Teliamura", "Sidhai", "Manu", "Sonamura", "Moharchandra", "Badharghat", "Rudrasagar", "Amarpur", "Jirania", "Pratapgarh", "Sabroom"],
	"Uttarakhand": ["Dehradun", "Nainital", "Haridwar", "Rudrapur", "Haldwani", "Roorkee", "Kashipur", "Pithoragarh", "Almora", "Champawat", "Tehri", "Uttarkashi", "Bageshwar", "Nainital", "Mussoorie", "Tanakpur", "Khatima", "Lansdowne", "Joshimath", "Gairsain"],
	"Uttar Pradesh": ["Lucknow", "Kanpur", "Varanasi", "Agra", "Ghaziabad", "Noida", "Meerut", "Allahabad", "Bareilly", "Aligarh", "Moradabad", "Saharanpur", "Jhansi", "Firozabad", "Rampur", "Bijnor", "Sitapur", "Muzaffarnagar", "Shahjahanpur", "Azamgarh", "Gorakhpur", "Deoria", "Baghpat", "Etawah", "Pilibhit", "Sant Ravidas Nagar", "Banda", "Unnao", "Bulandshahr", "Siddharthnagar"],
	"West Bengal": ["Kolkata", "Howrah", "Siliguri", "Durgapur", "Asansol", "Bardhaman", "Malda", "Kalyani", "Birbhum", "Bhatpara", "Barrackpore", "Nadia", "Kharagpur", "Haldia", "Raiganj", "Medinipur", "Bongaon", "Jalpaiguri", "Cooch Behar", "Suri", "Contai", "Bankura", "Bardhaman", "Diamond Harbour", "Purulia"],
	"Andaman and Nicobar Islands": ["Andaman and Nicobar Islands"],
	"Chandigarh": ["Chandigarh"],
	"Dadra and Nagar Haveli and Daman & Diu": ["Dadra and Nagar Haveli and Daman & Diu"],
	"Delhi": ["Delhi"],
	"Jammu & Kashmir": ["Jammu & Kashmir"],
	"Ladakh": ["Ladakh"],
	"Lakshadweep": ["Lakshadweep"],
	"Puducherry": ["Puducherry"]
  };
// CitySelect component that depends on the selected state
const CitySelect = ({ selectedState, selectedCity, handleInputChange }) => {
  return (
    <div className='fhead'>
      <label>Select your city:</label>
      <select
        className="input-field"
        name="city"
        value={selectedCity}
        onChange={handleInputChange}
        disabled={!selectedState}  // Disable dropdown if no state is selected
      >
        <option value="">Select your city</option>
        {selectedState &&
          stateCities[selectedState].map((city, index) => (
            <option key={index} value={city}>
              {city}
            </option>
          ))}
      </select>
    </div>
  );
};

export default CitySelect;





