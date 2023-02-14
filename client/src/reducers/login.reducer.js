import { FETCH_USERS } from '../actions/login.action';

let initialState = []

 const users = (state = initialState, action) => {
  switch(action.type) {
    case FETCH_USERS:
      return [...state, ...action.payload]
    default:
      return state
  }
}

export default users

 