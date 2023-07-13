import firebase from "firebase";


const firebaseConfig = {
    apiKey: "AIzaSyCMyuB5-5mQ5yQ1VHLVCJWf-fns9e3d2jk",
    authDomain: "netflix-clone-9bfd0.firebaseapp.com",
    projectId: "netflix-clone-9bfd0",
    storageBucket: "netflix-clone-9bfd0.appspot.com",
    messagingSenderId: "170319353047",
    appId: "1:170319353047:web:67441210d027724742cc92"
  };

  const firebaseApp= firebase.initializeApp(firebaseConfig);
  const db= firebaseApp.firestore()
  const auth= firebase.auth()

  export {auth}

  export default db;