import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAR65ojxVt7NZL1w7Wa4tDNVFBoKkoJtZk",
    authDomain: "expensify-c53c2.firebaseapp.com",
    databaseURL: "https://expensify-c53c2.firebaseio.com",
    projectId: "expensify-c53c2",
    storageBucket: "expensify-c53c2.appspot.com",
    messagingSenderId: "785497129413",
    appId: "1:785497129413:web:483ecb57c15ada2a140bac",
    measurementId: "G-C5WJVMLPV3"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}.`);
});