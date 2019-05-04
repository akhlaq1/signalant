import firebase from "firebase";

// Initialize Firebase
const config = {
  apiKey: "AIzaSyD3L0ZzgmxbuMU3XcfQm9p1ohsfSqjUA1Y",
  authDomain: "signalant-100.firebaseapp.com",
  databaseURL: "https://signalant-100.firebaseio.com",
  projectId: "signalant-100",
  storageBucket: "signalant-100.appspot.com",
  messagingSenderId: "881670568963"
};

firebase.initializeApp(config);
const auth = firebase.auth();

const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();
const twitterAuthProvider = new firebase.auth.TwitterAuthProvider();

export {
  auth,
  googleAuthProvider,
  githubAuthProvider,
  facebookAuthProvider,
  twitterAuthProvider
};
