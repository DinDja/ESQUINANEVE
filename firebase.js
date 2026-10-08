import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore, collection, doc, onSnapshot, orderBy, query, runTransaction, serverTimestamp, Timestamp, updateDoc } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyBC0hvMk3EgudTQEP3KzdeCyU-bRPC_7Nk",
  authDomain: "projetosfeciba.firebaseapp.com",
  projectId: "projetosfeciba",
  storageBucket: "projetosfeciba.firebasestorage.app",
  messagingSenderId: "538485850362",
  appId: "1:538485850362:web:4ca15a44374933c9148943",
  measurementId: "G-PMJCDQWGYJ"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {
  app,
  collection,
  db,
  doc,
  onSnapshot,
  orderBy,
  query,
  runTransaction,
  serverTimestamp,
  Timestamp,
  updateDoc
};
