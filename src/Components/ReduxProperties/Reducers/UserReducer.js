var initialState = {
  email: '',
  password: '',
  employeeData: null
}

const UserReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_EMAIL':
      state = {
        ...state,
        email: action.payLoad
      }
      break;
    case 'SET_PASSWORD':
      state = {
        ...state,
        password: action.payLoad
      }
      break;
    case 'GET_EMP_DETAIL':
      state = {
        ...state,
        employeeData: action.payLoad
      }
      break;
    default:
      break;
  }
  return state;
}

export default UserReducer;