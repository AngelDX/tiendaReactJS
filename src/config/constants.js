import firebase from 'firebase'

const config = {
  apiKey: "AIzaSyAcSxEaQXmty0GXg_pe8eJFdq0XEWkvfEo",
  authDomain: "crud-58fe9.firebaseapp.com",
  databaseURL: "https://crud-58fe9.firebaseio.com",
}

firebase.initializeApp(config)

export const ref = firebase.database().ref()
export const firebaseAuth = firebase.auth