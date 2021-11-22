import { initializeApp } from "firebase/app"
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, updateProfile } from "firebase/auth"
import { getDatabase, ref, push, onValue, set, child } from "firebase/database"
import { setGroupList } from "./Views/Chat/Groups/redux/groupActions"
import { fetchAllUsers, fetchAllChats } from "./Features/Users/redux/usersActions"
import md5 from "md5"
import { stringify } from "@firebase/util"
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
const refThreadsCollection = ref(firebaseDatabase, "threads")

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

export const fetchAllPeople = (dispatch) => {
  onValue(refPeopleCollection, (snapshot) => {
    const data = snapshot.val()
    dispatch(fetchAllUsers(data))
  })
}
export const fetchAllChat = (chatID, dispatch) => {
  const refParticularPeople = ref(firebaseDatabase, "threads/" + chatID)

  return onValue(
    refParticularPeople,
    (snapshot) => {
      if (snapshot && snapshot.val()) {
        const snapshotToArray = Object.keys(snapshot.val()).map((key) => snapshot.val()[key])
        if (snapshotToArray && snapshotToArray.length > 0) {
          dispatch(fetchAllChats(snapshotToArray))
        }
      }
      // const snapshotToArray = Object.keys(snapshot.val()).map((key) => snapshot.val()[key])
      // if (snapshotToArray && snapshotToArray.length > 0) {

      // }
      // console.log("snapshotToArray: ", snapshotToArray)
    },
    {
      onlyOnce: true,
    }
  )
}
export const hasParticularPerson = (id) => {
  const refParticularPeople = ref(firebaseDatabase, "groups/" + id)
  onValue(refParticularPeople, (snapshot) => {
    const data = snapshot.val()
    console.log("paa dataParticularChild: ", snapshot.val(), snapshot.exists())
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
        id: firebaseAuth.currentUser.uid,
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

export const handleSendMessage = (threadID, messageDescription) => {
  const refParticularPeople = ref(firebaseDatabase, "threads/" + threadID)

  return onValue(
    refParticularPeople,
    (snapshot) => {
      if (snapshot.exists()) {
        push(refParticularPeople, {
          name: firebaseAuth.currentUser.displayName,
          id: firebaseAuth.currentUser.uid,
          profilePic: firebaseAuth.currentUser.photoURL,
          email: firebaseAuth.currentUser.email,
          message: messageDescription,
        })
          .then((res) => console.log("EXIST", res))
          .catch((err) => console.log(err))
      } else {
        set(child(refThreadsCollection, `${threadID}`), null)
          .then(() =>
            push(refParticularPeople, {
              name: firebaseAuth.currentUser.displayName,
              id: firebaseAuth.currentUser.uid,
              profilePic: firebaseAuth.currentUser.photoURL,
              email: firebaseAuth.currentUser.email,
              message: messageDescription,
            })
          )
          .catch((err) => console.log(err))
      }
    },
    {
      onlyOnce: true,
    }
  )
}

//---utility function----//

// const snapshotToArray = Object.entries(snapshot.val()).map((e) => Object.assign(e[1], { key: e[0] }))
// const snapshotToArray = Object.keys(snapshot.val()).map((key) => snapshot.val()[key])
