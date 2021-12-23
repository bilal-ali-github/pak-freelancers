import { initializeApp } from "firebase/app";
import {getFirestore} from "@firebase/firestore"

const firebaseConfig = {
    apiKey: "AIzaSyCiJR2m8H0S5IOlcXuTAhLSO4N2Qw8qK8c",
    authDomain: "pak-freelancers.firebaseapp.com",
    projectId: "pak-freelancers",
    storageBucket: "pak-freelancers.appspot.com",
    messagingSenderId: "816387675554",
    appId: "1:816387675554:web:d1aaffbf2610b2cf260efb"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);