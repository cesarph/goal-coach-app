import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyDiK8zOFvQ31i1F9kWIvCZEBqMmrHBpop4",
    authDomain: "goalcoach-8144b.firebaseapp.com",
    databaseURL: "https://goalcoach-8144b.firebaseio.com",
    projectId: "goalcoach-8144b",
    storageBucket: "",
    messagingSenderId: "521432994760"
  };

export const firebaseApp = firebase.initializeApp(config);
export const goalRef = firebase.database().ref('goals');
export const completeGoalRef = firebase.database().ref('completeGoals');
