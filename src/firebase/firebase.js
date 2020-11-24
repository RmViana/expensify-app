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

export { firebase, database as default};

// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });
// database.ref('expenses').push({
//     description: 'Rent',
//     note: '',
//     amount: 109500,
//     createdAt: 38947874293875
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });
// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         });
//     });
//     console.log(expenses);
// });