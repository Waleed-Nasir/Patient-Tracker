import Action from '../Action/Action'


const INITIAL_STATE = {
    user: false,
    name:''
  };
  
  function Doctordata(state = INITIAL_STATE, action) {
    switch(action.type) {
      case Action.SIGNOUT : 
      return Object.assign({},...state,{...action.payload}) 
       case Action.GETDATA : 
      return Object.assign({},...state,{...action.payload}) 
    case  Action.PAITENT : 
    return Object.assign({},...state,{...action.payload}) 
      default : return state;
    }
  }
  
  export default Doctordata;