export const FETCH_USERS = 'FETCH_USERS'
// export const ADD_USER = 'ADD_USER'
var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");

export const getAllUsers = (val,val2) => {
    return async(dispatch) => {
      var body = JSON.stringify({ userid:val,password:val2 });
    console.log("val", val);
    console.log("val", val2);
     let response = await fetch(`http://localhost:8000/api/login`,{
             method: "POST",
             headers: myHeaders,
             body: body
         }).catch((error) => console.log("error", error));
     let users = await response.json()
     console.log("result", users.response);
 
     dispatch({
       type: FETCH_USERS,
       payload: users.response
     })
   }
 }

// export const getAllUsers = () => {
//     return (dispatch) => {
//       fetch(`https://jsonplaceholder.typicode.com/users`)
//         .then(res => res.json())
//         .then(users => {
//           dispatch({
//             type: FETCH_USERS,
//             payload: users
//           })
//         })
//     }
//   }