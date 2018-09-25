import Action from '../Action/Action'
import firebase from 'firebase';
export default class Middilework {



    static signIn(SigninData) {
        return (dispatch) => {
            let { Email, Password } = SigninData
            firebase.auth().signInWithEmailAndPassword(Email, Password)
                .then((user) => {
                    console.log(SigninData)
                    return dispatch(Action.signIn(SigninData))
                }) 
                .catch(error =>{

                    return dispatch(Action.err(error.message))
                
                })
    }
    }
    static signUp(signUpdata) {
        return (dispatch) => {
            let { Email, Password, Username } = signUpdata
            firebase.auth().createUserWithEmailAndPassword(Email, Password)
                .then((user) => {

                    firebase.database().ref('users/').child(user.uid).set({
                        Username,
                        Email,
                        Password
                    })
                     console.log(signUpdata)
                    return dispatch(Action.signUp(signUpdata))
                })
                .catch(error =>{
                    console.log('error', error.message)
                    // this.setState({error});
                    return dispatch(Action.err(error.message))
                
                })
            }     
        } 
        static GetData(){
            return(dispatch)=>{
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
// console.log(DonateData)
                        firebase.database().ref(`users/${user.uid}`).on('value', (usern) => {
                            let DoctorData = usern.val()
                          
                        return dispatch(Action.GetData(DoctorData))

                        })
                    }
                
                })
            }
        }
        // adddata: (dataadd) => dispatch(Middilework.adddata(dataadd)),
        static adddata(dataadd){
            return(dispatch)=>{
                let {Name,Age,Number,Diseases,Tarcking,AppDate,ConDate}=dataadd
                firebase.auth().onAuthStateChanged(user => {
                    if (user) {
                        console.log('push')

                        firebase.database().ref(`users/${user.uid}/`).child('Paitents/').push({
                            Name,
                            Age,
                            Number,
                            Tarcking,
                            Diseases,
                            AppDate,
                            ConDate
                        }
 )
 console.log(dataadd)

  firebase.database().ref(`users/${user.uid}`).on('value', (usern) => {
    let DoctorData = usern.val()})
 return dispatch(Action.adddata(dataadd,DoctorData))
                        
                    }
                
                })
            }
        }
        static SignOut() {
            return (dispatch) => {
    
                firebase.auth().signOut().then(() => {
                    console.log('out')
                    return dispatch(Action.SignOut())
                })
    
            }
        }
    //////////////endding tag//////////////
}