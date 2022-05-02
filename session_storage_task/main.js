let myForm = document.getElementById('myForm');

// Check sessionStorage for data
window.onload = function () {
    
    try {
  if (sessionStorage !== null) {
    console.log('I have data')
    let formData = sessionStorage['person'];
    let data = JSON.parse(formData);

    updateDom(data);
  }
  else {console.log('I dont have data');}
    }
  catch (error) {console.log('Add real data to your form!!!');

  }
};

// Listen for events
myForm.addEventListener('submit', (evnt) => {
  evnt.preventDefault();

  let data = getFormData(); //function invocation

  storeSessionData(data);
});

// Store data in sessionStorage
const storeSessionData = (data) => {
  if (data) {
    sessionStorage['person'] = JSON.stringify(data);
    console.log(data);
  }
};

// Get form data
const getFormData = () => {
  let input = document.querySelectorAll('input[type="text"]');

  // Initialise an empty object
  let formData = {};

  // Loop over form data
  input.forEach(function (key) {
    // Populate the formData object
    formData[key.name] = key.value;
  });

  return formData;
};

const updateDom = (data) => {
    let input1 = document.querySelectorAll('input[name]');
    console.log(input1)
    input1[0].value = data.firstName
    input1[1].value = data.lastName
    input1[2].value = data.email
    console.log(input1[0].value);
};