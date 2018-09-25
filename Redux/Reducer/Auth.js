import Action from '../Action/Action'
const INITIAL_STATE = {
    user: false,
    name:'',
    ERROR:''
  };
  
  function Auth(state = INITIAL_STATE, action) {
    switch(action.type) {
    
      case Action.SIGNIN : 
      return Object.assign({},...state,{...action.payload}) 
      case Action.ERROR : 
      return Object.assign({},...state,{...action.payload}) 
      case Action.SIGNOUT : 
      return Object.assign({},...state,{...action.payload}) 
      case Action.SIGNUP : 
      return Object.assign({},...state,{...action.payload}) 
     
      default : return state;
    }
  }
  
  export default Auth;