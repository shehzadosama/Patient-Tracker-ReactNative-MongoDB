import axios from 'axios';
export default class AddPatients {
  
      static add(userObj) {
        return (dispatch) => {
console.log("In Add patient middleware");

console.log(userObj, "userobj")
// return axios.post('https://patient-tracking.herokuapp.com/api/patients', userObj)
//   .then((patients) => console.log(patients))
//   .catch((err) => console.log(err))

  // return fetch('https://patient-tracking.herokuapp.com/api/patients')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     return responseJson.patients;
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  var patients = JSON.stringify(userObj );
    //   

  fetch('https://patient-tracking.herokuapp.com/api/patients', {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    // body: JSON.stringify({
    //   userObj
    //   // firstParam: 'yourValue',
    //   // secondParam: 'yourOtherValue',
    // })
    body:patients
  })

        }
}
}
