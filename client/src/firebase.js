import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: "AIzaSyDjrhWOpRV7VleIvlbVhujFYpJZ9yuLBwk",
    authDomain: "whatsapp-clone-7c976.firebaseapp.com",
    projectId: "whatsapp-clone-7c976",
    storageBucket: "whatsapp-clone-7c976.appspot.com",
    messagingSenderId: "253616760001",
    appId: "1:253616760001:web:b5185e27e439593cdea040"
  };

  const app = initializeApp(firebaseConfig);

  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  
  export { auth, provider, app };