import axios from 'axios';
import PatientsAction from "./../actions/PatientsAction";
export default class AddPatients {
  
      static get() {
        return (dispatch) => {
console.log("In middleware");
return fetch('https://patient-tracking.herokuapp.com/api/patients')
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
//   console.log(responseJson.data);
// })
// .catch(function (error) {
//   console.log(error);
// });
        }
}
}
