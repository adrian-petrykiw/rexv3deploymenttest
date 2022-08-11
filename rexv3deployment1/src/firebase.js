import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBwGj4ZBmH2-ESpoSu_FcckpwIoepQDyIY",
    authDomain: "rexv3-f13c6.firebaseapp.com",
    projectId: "rexv3-f13c6",
    storageBucket: "rexv3-f13c6.appspot.com",
    messagingSenderId: "204164342148",
    appId: "1:204164342148:web:bb0c1cfdd761aefa4d7dd1",
    measurementId: "G-3L7BNSRP8Q"
  };

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }