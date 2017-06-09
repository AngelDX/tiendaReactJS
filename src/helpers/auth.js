import { ref, firebaseAuth } from '../config/constants'

export function auth (email, pw) {
  return firebaseAuth().createUserWithEmailAndPassword(email, pw)
    .then(saveUser)
}

export function logout () {
  return firebaseAuth().signOut()
}

export function login (email, pw) {
  return firebaseAuth().signInWithEmailAndPassword(email, pw)
}

export function resetPassword (email) {
  return firebaseAuth().sendPasswordResetEmail(email)
}

export function saveUser (user) {
  return ref.child(`users/${user.uid}/info`)
    .set({
      email: user.email,
      uid: user.uid
    })
    .then(() => user)
}
/*
export function getProductos(){
  let d:Object[]=[]
  ref.once("value", function(data) {
    data.forEach(function(data) {
      d=data.val()
    })
  }, function (error) {
     console.log("Error: " + error.code) ;
  });
 
}
*/
export function getProductos(){
  //let d:Object[]=[]
  return ref.once("value", function(data) {
    data.val()
  }, function (error) {
     console.log("Error: " + error.code) ;
  });
 
}
