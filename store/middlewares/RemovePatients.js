import axios from 'axios';
import PatientsAction from "./../actions/PatientsAction";
export default class RemovePatients {
  
      static remove(key) {
        return (dispatch) => {
console.log("In remove patient middleware");

// console.log(userObj, "userobj")
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
//   var patients = JSON.stringify(userObj );
    //   
    
    var patient_id = {
   id :key
    };
    
  fetch('https://patient-tracking.herokuapp.com/api/patients', {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      
    },
    
    // body: JSON.stringify({
    //   userObj
    //   // firstParam: 'yourValue',
    //   // secondParam: 'yourOtherValue',
    // })
    body:JSON.stringify(patient_id )
  })




fetch('https://patient-tracking.herokuapp.com/api/patients')
  .then((response) => response.json())
  .then((responseJson) => {
    console.log(responseJson);
    dispatch(PatientsAction.setPatients(responseJson));
    // return responseJson.patients;
  })
  .catch((error) => {
    console.error(error);
  });



  // axios.get('https://patient-tracking.herokuapp.com/api/patients')
  // . then((response) => response.json())
  // .then((responseJson) => {
  //   // return responseJson.data;
  //   console.log(responseJson);
  // })
  // .catch(function (error) {
  //   console.log(error);
  // });
        }
}
}
