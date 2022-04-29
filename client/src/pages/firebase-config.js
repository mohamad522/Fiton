import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBsVmguvw_dG-jQRYOk0q7M1ZXJDKfOjBQ",
    authDomain: "athentication-fiton.firebaseapp.com",
    projectId: "athentication-fiton",
    storageBucket: "athentication-fiton.appspot.com",
    messagingSenderId: "157425943286",
    appId: "1:157425943286:web:3ca720eabf6ca4e34be2d7"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app)