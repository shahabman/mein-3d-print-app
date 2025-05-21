// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAz5a6iaF2hjO81RxKgcvCJTGDrstsg1dQ",
  authDomain: "mein-3d-print-app.firebaseapp.com",
  projectId: "mein-3d-print-app",
  storageBucket: "mein-3d-print-app.firebasestorage.app",
  messagingSenderId: "1090457184204",
  appId: "1:1090457184204:web:9a4cfa30fbdbc5ac5d9f69"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
// const auth = getAuth(app); // Optional: Wenn du Authentifizierung nutzt

export { db };
// export { db, auth };