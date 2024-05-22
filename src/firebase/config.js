import firebase  from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

import 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyBZ0qYEeM_theQD3pM9E6h7gm8kxwK6pMc",
  authDomain: "resumeebuilder-aec64.firebaseapp.com",
  projectId: "resumeebuilder-aec64",
  storageBucket: "resumeebuilder-aec64.appspot.com",
  messagingSenderId: "929612653205",
  appId: "1:929612653205:web:d38d08f51edbd821c1f19c",
  measurementId: "G-G6LN30ZYXC"
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
// Step 2 : Init the firestore service 
// If we want to do any communication with the firestore db (eg. add documents) 
// we can use projectFirestore variable 
const projectFirestore = firebase.firestore() 
//Step 3 : Export projectFirestore 
// This will enable the use the firebase in different components 

export {projectFirestore} 

