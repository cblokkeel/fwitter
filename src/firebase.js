import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGUtmDGX58NSFtP2pfcAaztz_-LmcWEak",
    authDomain: "fwitter-59760.firebaseapp.com",
    projectId: "fwitter-59760",
    storageBucket: "fwitter-59760.appspot.com",
    messagingSenderId: "1043989136194",
    appId: "1:1043989136194:web:648a5e766c3a204639bedb"
  }

const fire = firebase.initializeApp(firebaseConfig)

export default fire