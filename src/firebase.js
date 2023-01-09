// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: 'AIzaSyDK1EuDnMB4qYG-uXsZwkAMDN6yNdtNjE4',
	authDomain: 'space-store-873ed.firebaseapp.com',
	projectId: 'space-store-873ed',
	storageBucket: 'space-store-873ed.appspot.com',
	messagingSenderId: '290687785209',
	appId: '1:290687785209:web:6ffc3ab2da4774e326ea28',
	measurementId: 'G-ZLX3QTP23Q',
}

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }
