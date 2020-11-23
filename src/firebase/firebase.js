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

database.ref().set({
    name: 'Romildo Alves',
    age: 24,
    stressLevel: 6,
    job: {
        title: 'Software Engineer',
        company: 'Google'
    },
    location: {
        city: 'São Paulo',
        country: 'Brazil'
    }
}).then(() => {
    console.log('Data is saved!');
}).catch((e) => {
    console.log('This failed.', e);
});

database.ref().update({
    stressLevel: 7,
    'job/company': 'Amazon',
    'location/city': 'Seattle'
});