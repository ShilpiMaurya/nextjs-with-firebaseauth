import firebase from "firebase";

const firebaseClient = () => {
  const FIREBASE_CONFIG = {
    apiKey: `${process.env.API_KEY}`,
    authDomain: `${process.env.AUTH_DOMAIN}`,
    projectId: `${process.env.PROJECT_ID}`,
    storageBucket: `${process.env.STORAGE_BUCKET}`,
    messagingSenderId: `${process.env.MESSAGING_SENDER_ID}`,
    appId: `${process.env.APP_ID}`
  };
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  } else {
    firebase.app();
  }
};

export default firebaseClient;
