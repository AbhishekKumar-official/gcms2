import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import { getDatabase, ref, push, onValue } from "firebase/database"
import { setGroupList } from "./Views/Chat/Groups/redux/groupActions"
import md5 from "md5"
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
const firebaseDatabase = getDatabase()
const refPeopleCollection = ref(firebaseDatabase, "people")
const refGroupsCollection = ref(firebaseDatabase, "groups")

export const hanndleCreateUserWithEmailAndPassword = async (email, password, firstname) => {
  createUserWithEmailAndPassword(firebaseAuth, email, password)
    .then((userCredential) => {
      const user = userCredential.user
      handleUpdateUserProfile(firstname)
      console.log("Registeruser: ", user)
    })
    .catch((error) => {
      const errorCode = error.code
      console.log("errorCode: ", errorCode)
      const errorMessage = error.message
      console.log("errorMessage: ", errorMessage)
    })
}

export const HandleAddGroup = (channelName, Descripttion) => {
  push(refGroupsCollection, {
    channelName: channelName,
    descripttion: Descripttion,
    createdBy: {
      name: firebaseAuth.currentUser.displayName,
      id: firebaseAuth.currentUser.uid,
      profilePic: firebaseAuth.currentUser.photoURL,
      email: firebaseAuth.currentUser.email,
    },
  })
    .then((res) => console.log("created channel", res))
    .catch((err) => console.log(err))
}

export const fetchAllGroups = (dispatch) => {
  onValue(refGroupsCollection, (snapshot) => {
    const data = snapshot.val()
    dispatch(setGroupList(data))
  })
}
const handleUpdateUserProfile = (firstname) => {
  updateProfile(firebaseAuth.currentUser, {
    displayName: firstname,
    photoURL: `http://gravatar.com/avatar/${md5(firebaseAuth.currentUser.email)}?d=identicon`,
  })
    .then(() => {
      //saving in realtime DB
      push(refPeopleCollection, {
        username: firstname,
        email: firebaseAuth.currentUser.email,
        profile_picture: firebaseAuth.currentUser.photoURL,
      })
    })
    .catch((err) => console.log(err))
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
export const hanndleUserSignOut = async (navigator) => {
  return signOut(firebaseAuth)
    .then(() => {
      sessionStorage.clear()
      navigator("/")
    })
    .catch((error) => {
      console.log("error: ", error)
    })
}
