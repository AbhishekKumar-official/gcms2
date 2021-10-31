import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyCDCdokzvjQ46QGMzrE0XLS9g7QRhmcWG0",
  authDomain: "slack-412f3.firebaseapp.com",
  databaseURL: "https://slack-412f3-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "slack-412f3",
  storageBucket: "slack-412f3.appspot.com",
  messagingSenderId: "594466397031",
  appId: "1:594466397031:web:e919042b9d4bea58a82dc2",
}

export const firebaseApp = initializeApp(firebaseConfig)

//register with email and password
const firebaseAuth = getAuth()
export const hanndleCreateUserWithEmailAndPassword = async (email, password) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      console.log("Registeruser: ", user)
    })
    .catch((error) => {
      const errorCode = error.code
      console.log("errorCode: ", errorCode)
      const errorMessage = error.message
      console.log("errorMessage: ", errorMessage)
    })
}
export const hanndleSignInWithEmailAndPassword = async (email, password) => {
  return signInWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const SignedInUser = userCredential.user

      if (SignedInUser) {
        return SignedInUser
      }
    })
    .catch((error) => {
      const errorCode = error.code
      console.log("errorCode: ", errorCode)
      const errorMessage = error.message
      console.log("errorMessage: ", errorMessage)
    })
}
export const hanndleOnAuthStateChange = () => {
  return onAuthStateChanged(firebaseAuth, (user) => {
    if (user) {
      console.log("user:::: ", user)
      return user
    } else {
      return {}
    }
  })
}
export const hanndleUserSignOut = async (history) => {
  return signOut(firebaseAuth)
    .then(() => {
      sessionStorage.clear()
      history.push("/")
    })
    .catch((error) => {
      console.log("error: ", error)
    })
}
