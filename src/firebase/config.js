import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAK-5H3l0KzuW1aFSfTm3kvkYXOzvy9ZzM",
    authDomain: "coder-next-70c23.firebaseapp.com",
    projectId: "coder-next-70c23",
    storageBucket: "coder-next-70c23.appspot.com",
    messagingSenderId: "840728916035",
    appId: "1:840728916035:web:2489ee0f0dc4db989b24f6",
    measurementId: "G-FPRDMBKBCR"
};


const app = initializeApp(firebaseConfig);
export  const db = getFirestore(app)
