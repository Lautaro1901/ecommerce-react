import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCqNNv-_qLHz609OEUVF-Q9gF7RWD3tvs8",
  authDomain: "app-ecommerce-coder.firebaseapp.com",
  projectId: "app-ecommerce-coder",
  storageBucket: "app-ecommerce-coder.appspot.com",
  messagingSenderId: "237782507594",
  appId: "1:237782507594:web:834ed2b83d29e32d3a06b3"
};
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




