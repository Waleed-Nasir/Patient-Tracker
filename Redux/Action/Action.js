
// import {

//     SIGNIN,ERROR,SIGNUP
// } from './Const'

export default class Action {
    static SIGNIN = "SIGNIN"
    static SIGNUP = 'SIGNUP'
    static ERROR = 'ERROR'
    static GETDATA = 'GETDATA'
    static PAITENT = 'PAITENT'
    static SIGNOUT = 'SIGNOUT'
    
    

    static signIn(data) {
        return {
            type: Action.SIGNIN,
            payload: {
                user: true
            }
        }
    }
    static err(error) {
        return {
            type: Action.ERROR,
            payload: {
                user: false,
                error,

            }
        }
    }
    static signUp(data) {
        return {
            type: Action.SIGNUP,
            payload: {
                user: true,

            }
        }
    }
    static GetData(userdata) {
        return {
            type: Action.GETDATA,
            payload: {
                user: true,
                userdata
            }
        }
    }
    static adddata(dataadd,userdata) {
        return {
            type: Action.PAITENT,
            payload: {
                user: true,
                dataadd,
                userdata
            }
        }
    }
    static SignOut(dataadd) {
        return {
            type: Action.SIGNOUT,
            payload: {
                user: false,
                
            }
        }
    }
}
