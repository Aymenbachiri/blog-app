import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1QxeFuGMmoUgPoW8af29b-0J--FRbsBQ",
  authDomain: "blog-app-ec2e3.firebaseapp.com",
  projectId: "blog-app-ec2e3",
  storageBucket: "blog-app-ec2e3.appspot.com",
  messagingSenderId: "491459938707",
  appId: "1:491459938707:web:849b29baf788147b2dc066",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
