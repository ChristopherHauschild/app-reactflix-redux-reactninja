'use strict'

import firebase from 'firebase'

// Initialize Firebase
firebase.initializeApp({
  apiKey: 'AIzaSyAPJxvca35xq59vyyBGCgyoT4eij2VWspY',
  authDomain: 'reactflix-f1f2d.firebaseapp.com',
  databaseURL: 'https://reactflix-f1f2d.firebaseio.com',
  projectId: 'reactflix-f1f2d',
  storageBucket: 'reactflix-f1f2d.appspot.com',
  messagingSenderId: '138507795513',
  appId: '1:138507795513:web:eb98d5941f78432e05e1e8',
  measurementId: 'G-PNF7WQJF0L'
})

firebase.analytics()

const db = firebase.database()

export { db }
