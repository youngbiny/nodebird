export const intialState = {
  isLoggedIn:false,
  user:null,
  signUpData:{},
  loginData:{},
}

export const loginAction = (data) => {
  return{
    type:'LOG_IN',
    data,
  };
}

export const logoutAction = (data) => {
  return{
    type:'LOG_OUT',
    data,
  };
}

const reducer = (state = intialState, action) => {
  switch(action.type){
    case 'LOG_IN' :
      return{
        ...state,
        isLoggedIn:true,
        user:action.data,
      };
    case 'LOG_OUT' :
      return{
        ...state,
        isLoggedIn:false,
        user:null,
      };
      default :
        return  state;
  }
}

export default reducer;