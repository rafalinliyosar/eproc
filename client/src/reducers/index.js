// import todos from './todos.reducers'
import users from './login.reducer'
import { reducer as formReducer } from 'redux-form'
import { combineReducers } from 'redux'

const rootReducer = combineReducers({
  // todos,
  users,
  form: formReducer
})

export default rootReducer