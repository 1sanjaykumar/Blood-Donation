
let img = document.querySelector("img");
img.addEventListener("click", function() {
});
let scroll =document.querySelector(".scroll");
let circle = document.querySelector(".circle");
let h = document.querySelector(".h");
let h1 = document.querySelector(".h1");
let h2 = document.querySelector(".h2");
let main=document.querySelector("main");
let b=document.querySelector(".b");
// let circle2 = document.querySelector(".circle2");
let jo= document.querySelector(".jo");
let table= document.querySelector(".table");
let bu=document.querySelector(".bu");
circle.addEventListener("mouseover", function() {
     scroll.style.backgroundColor="red";
     scroll.style.color="black";
    h.style.color = "red";
    h1.style.color = "red";
    h2.style.color = "red";
    circle.style.backgroundColor = "white";
    jo.style.backgroundColor="red";
    jo.style.color="white";
    main.style.backgroundColor="red";
    b.style.color="white";
    table.style.backgroundColor="red";
 
});

circle.addEventListener("mouseout", function() {
    scroll.style.backgroundColor="white";
     scroll.style.color="rgb(154, 148, 148)";
    h.style.color = "white";
    h1.style.color = "white";
    h2.style.color = "white";
    circle.style.backgroundColor = "red";
    jo.style.backgroundColor="white";
    jo.style.color="red";
    main.style.backgroundColor="white";
    b.style.color="red";
    table.style.backgroundColor="rgba(255, 0, 0,0.8)";
});

document.addEventListener('DOMContentLoaded', function () {
    const stateDropdown = document.getElementById('stateDropdown');
    const districtDropdown= document.getElementById('cityDropdown');
    const cityDropdown  = document.getElementById('districtDropdown');
    const localityInput = document.getElementById('localityInput');
    
    // Example data for states, cities, and districts
    const states = {
        'India': [
            'Maharashtra', 'Karnataka', 'Delhi', 'Tamil Nadu', 'Uttar Pradesh', 'West Bengal', 
            'Gujarat', 'Rajasthan', 'Bihar', 'Punjab', 'Haryana', 'Kerala', 'Odisha', 'Assam',
            'Jharkhand', 'Chhattisgarh', 'Uttarakhand', 'Himachal Pradesh', 'Goa', 'Tripura', 
            'Manipur', 'Nagaland', 'Meghalaya', 'Sikkim', 'Arunachal Pradesh', 'Mizoram', 
            'Andaman and Nicobar Islands', 'Dadra and Nagar Haveli and Daman and Diu', 'Lakshadweep'
        ]
    };

    const cities = {
        'Maharashtra': ['Mumbai', 'Pune', 'Nagpur', 'Nashik', 'Thane', 'Aurangabad', 'Solapur', 'Amravati', 'Kolhapur'],
        'Karnataka': ['Bengaluru', 'Mysuru', 'Hubballi-Dharwad', 'Belagavi', 'Mangaluru', 'Davangere', 'Ballari', 'Shivamogga', 'Tumakuru'],
        'Delhi': ['New Delhi', 'North Delhi', 'South Delhi', 'East Delhi', 'West Delhi', 'Central Delhi'],
        'Tamil Nadu': ['Chennai', 'Coimbatore', 'Madurai', 'Tiruchirappalli', 'Salem', 'Tirunelveli', 'Erode', 'Vellore', 'Thoothukudi'],
        'Uttar Pradesh': ['Lucknow', 'Kanpur', 'Agra', 'Varanasi', 'Meerut', 'Allahabad', 'Ghaziabad', 'Bareilly', 'Aligarh'],
        'West Bengal': ['Kolkata', 'Siliguri', 'Asansol', 'Durgapur', 'Howrah', 'Darjeeling', 'Kharagpur', 'Bardhaman', 'Malda'],
        'Gujarat': ['Ahmedabad', 'Surat', 'Vadodara', 'Rajkot', 'Bhavnagar', 'Jamnagar', 'Junagadh', 'Gandhinagar', 'Anand'],
        'Rajasthan': ['Jaipur', 'Udaipur', 'Jodhpur', 'Kota', 'Ajmer', 'Bikaner', 'Alwar', 'Bhilwara', 'Sikar'],
        'Bihar': ['Patna', 'Gaya', 'Bhagalpur', 'Munger', 'Muzaffarpur', 'Purnia', 'Darbhanga', 'Bihar Sharif', 'Ara'],
        'Punjab': ['Chandigarh', 'Amritsar', 'Ludhiana', 'Jalandhar', 'Patiala', 'Bathinda', 'Mohali', 'Hoshiarpur', 'Moga'],
        'Haryana': ['Faridabad', 'Gurugram', 'Ambala', 'Hisar', 'Panipat', 'Karnal', 'Rohtak', 'Yamunanagar', 'Sirsa'],
        'Kerala': ['Thiruvananthapuram', 'Kochi', 'Kozhikode', 'Kannur', 'Thrissur', 'Palakkad', 'Alappuzha', 'Kollam', 'Kottayam'],
        'Odisha': ['Bhubaneswar', 'Cuttack', 'Rourkela', 'Sambalpur', 'Puri', 'Balasore', 'Baripada', 'Bhadrak', 'Jeypore'],
        'Assam': ['Guwahati', 'Silchar', 'Jorhat', 'Dibrugarh', 'Tezpur', 'Nagaon', 'Tinsukia', 'Sivasagar', 'Karimganj'],
        'Jharkhand': ['Ranchi', 'Jamshedpur', 'Dhanbad', 'Hazaribagh', 'Bokaro', 'Deoghar', 'Giridih', 'Ramgarh', 'Medininagar'],
        'Chhattisgarh': ['Raipur', 'Bilaspur', 'Korba', 'Durg', 'Rajnandgaon', 'Jagdalpur', 'Raigarh', 'Ambikapur', 'Dhamtari'],
        'Uttarakhand': ['Dehradun', 'Haridwar', 'Nainital', 'Rishikesh', 'Almora', 'Haldwani', 'Roorkee', 'Kashipur', 'Pithoragarh'],
        'Himachal Pradesh': ['Shimla', 'Manali', 'Dharamshala', 'Kangra', 'Solan', 'Mandi', 'Kullu', 'Hamirpur', 'Una'],
        'Goa': ['Panaji', 'Margao', 'Vasco da Gama', 'Mapusa', 'Ponda', 'Bicholim', 'Canacona', 'Curchorem', 'Quepem'],
        'Tripura': ['Agartala', 'Unakoti', 'Khowai', 'Dhalai', 'Sipahijala', 'Gomati', 'North Tripura', 'South Tripura'],
        'Manipur': ['Imphal', 'Thoubal', 'Churachandpur', 'Bishnupur', 'Ukhrul', 'Senapati', 'Tamenglong', 'Chandel', 'Jiribam'],
        'Nagaland': ['Kohima', 'Dimapur', 'Mokokchung', 'Wokha', 'Tuensang', 'Mon', 'Zunheboto', 'Phek', 'Longleng'],
        'Meghalaya': ['Shillong', 'Tura', 'Jowai', 'Nongpoh', 'Baghmara', 'Williamnagar', 'Mairang', 'Cherrapunji', 'Resubelpara'],
        'Sikkim': ['Gangtok', 'Namchi', 'Gyalshing', 'Mangan', 'Ravangla', 'Jorethang', 'Singtam', 'Soreng', 'Rangpo'],
        'Arunachal Pradesh': ['Itanagar', 'Tawang', 'Pasighat', 'Naharlagun', 'Ziro', 'Tezu', 'Anjaw', 'Bomdila', 'Khonsa'],
        'Mizoram': ['Aizawl', 'Lunglei', 'Champhai', 'Serchhip', 'Kolasib', 'Saiha', 'Lawngtlai', 'Mamit', 'Bairabi'],
        'Andaman and Nicobar Islands': ['Port Blair', 'Havelock Island', 'Neil Island', 'Car Nicobar', 'Nancowry', 'Diglipur', 'Rangat'],
        'Dadra and Nagar Haveli and Daman and Diu': ['Daman', 'Silvassa', 'Diu'],
        'Lakshadweep': ['Kavaratti', 'Minicoy', 'Agatti', 'Amini', 'Andrott', 'Kalpeni', 'Kadmat']
    };

    const districts = {
        'Mumbai': ['South Mumbai', 'Western Suburbs', 'Harbor Suburbs', 'Eastern Suburbs'],
        'Pune': ['Pune City', 'Pimpri-Chinchwad', 'Haveli', 'Baramati', 'Junnar', 'Shirur', 'Indapur', 'Maval', 'Daund'],
        'Bengaluru': ['Bengaluru South', 'Bengaluru North', 'Bengaluru Rural', 'Bengaluru East', 'Bengaluru West'],
        'Mysuru': ['Mysuru City', 'Nanjangud', 'T. Narasipur', 'Hunsur', 'Heggadadevanakote', 'Krishnarajanagara', 'Periyapatna'],
        'New Delhi': ['Central Delhi', 'South Delhi', 'North Delhi', 'West Delhi', 'East Delhi'],
        'Chennai': ['North Chennai', 'South Chennai', 'Central Chennai', 'West Chennai', 'East Chennai'],
        'Coimbatore': ['Coimbatore North', 'Coimbatore South', 'Coimbatore East', 'Coimbatore West', 'Pollachi', 'Mettupalayam'],
        'Jaipur': ['Jaipur City', 'Jaipur Rural', 'Sanganer', 'Amber', 'Shahpura', 'Phagi', 'Chomu', 'Kotputli', 'Bassi'],
        'Udaipur': ['Udaipur City', 'Udaipur Rural', 'Salumber', 'Kherwara', 'Girwa', 'Mavli', 'Gogunda', 'Vallabhnagar'],
        'Guwahati': ['Guwahati City', 'Kamrup', 'Dispur', 'North Guwahati', 'Sonapur', 'Palasbari', 'Mirza', 'Chandrapur'],
        'Ranchi': ['Ranchi City', 'Ranchi Rural', 'Khunti', 'Bundu', 'Tamar', 'Mandar', 'Ormanjhi', 'Sonahatu'],
        'Raipur': ['Raipur City', 'Raipur Rural', 'Dhamtari', 'Baloda Bazar', 'Bhatapara', 'Arang', 'Abhanpur', 'Simga'],
        'Dehradun': ['Dehradun City', 'Dehradun Rural', 'Haridwar', 'Rishikesh', 'Vikasnagar', 'Doiwala', 'Sahaspur'],
        'Shimla': ['Shimla City', 'Shimla Rural', 'Kangra', 'Solan', 'Mandi', 'Kullu', 'Hamirpur', 'Una', 'Bilaspur']
    };

    document.getElementById('countryDropdown').addEventListener('change', function () {
        const selectedCountry = this.value;
        if (states[selectedCountry]) {
            populateDropdown(stateDropdown, states[selectedCountry]);
        } else {
            clearDropdown(stateDropdown);
            clearDropdown(cityDropdown);
            clearDropdown(districtDropdown);
            localityInput.value = '';
        }
    });

    stateDropdown.addEventListener('change', function () {
        const selectedState = this.value;
        if (cities[selectedState]) {
            populateDropdown(cityDropdown, cities[selectedState]);
        } else {
            clearDropdown(cityDropdown);
            clearDropdown(districtDropdown);
            localityInput.value = '';
        }
    });

    cityDropdown.addEventListener('change', function () {
        const selectedCity = this.value;
        if (districts[selectedCity]) {
            populateDropdown(districtDropdown, districts[selectedCity]);
        } else {
            clearDropdown(districtDropdown);
            localityInput.value = '';
        }
    });

    districtDropdown.addEventListener('change', function () {
        const selectedDistrict = this.value;
        if (selectedDistrict) {
            localityInput.value = 'Localities in ' + selectedDistrict; // Placeholder for localities
        } else {
            localityInput.value = '';
        }
    });

    function populateDropdown(dropdown, items) {
        clearDropdown(dropdown);
        dropdown.innerHTML = '<option value="">Select</option>';
        items.forEach(item => {
            const option = document.createElement('option');
            option.value = item;
            option.textContent = item;
            dropdown.appendChild(option);
        });
    }

    function clearDropdown(dropdown) {
        dropdown.innerHTML = '<option value="">Select</option>';
    }
});

// Add this to your existing JavaScript

window.addEventListener('scroll', function() {
    const scrollAnimation = document.getElementById('scrollAnimation');
    if (window.scrollY > 0) {
        scrollAnimation.classList.add('hide');
    } else {
        scrollAnimation.classList.remove('hide');
    }
});

// Existing JavaScript
