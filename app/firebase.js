import firebase from 'firebase'

const config = {
  apiKey: 'AIzaSyBsE04w_ZFnE8CbqnlfCud7KiK747is1mA',
  authDomain: 'stt-api-a0888.firebaseapp.com',
  databaseURL: 'https://stt-api-a0888.firebaseio.com',
  projectId: 'stt-api-a0888',
  storageBucket: 'stt-api-a0888.appspot.com',
  messagingSenderId: '565710350789',
}

firebase.initializeApp(config)

export default firebase
