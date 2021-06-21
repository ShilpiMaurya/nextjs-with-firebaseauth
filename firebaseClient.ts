import firebase from "firebase";

const firebaseClient = ({ FIREBASE_CONFIG }: any) => {
  if (!firebase.apps.length) {
    firebase.initializeApp(FIREBASE_CONFIG);
  } else {
    firebase.app();
  }
};

export async function getStaticProps() {
  const FIREBASE_CONFIG = await {
    apiKey: process.env.API_KEY,
    authDomain: process.env.AUTH_DOMAIN,
    projectId: process.env.PROJECT_ID,
    storageBucket: process.env.STORAGE_BUCKET,
    messagingSenderId: process.env.MESSAGING_SENDER_ID,
    appId: process.env.APP_ID
  };
  return {
    props: { FIREBASE_CONFIG }
  };
}

export default firebaseClient;
