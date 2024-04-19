import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyBzP3DICsN9_WMY3icnjgw-Nil6EUF3sWo",
  authDomain: "gopi-dining-website.firebaseapp.com",
  databaseURL: "https://gopi-dining-website-default-rtdb.firebaseio.com",
  projectId: "gopi-dining-website",
  storageBucket: "gopi-dining-website.appspot.com",
  messagingSenderId: "863606319699",
  appId: "1:863606319699:web:ab53b2469ca162dbab74a6",
  measurementId: "G-3N8TZRMYWP"
};

initializeApp(firebaseConfig);

const db = getDatabase();

export const getFunction = async (endpoint) => {
  const starCountRef = ref(db, `/api${endpoint}`);
  const snapshot = await get(starCountRef);
  return snapshot.val();
}

let orderNumber = 0;

export const sendOrder = async (userOrder) => {
  const db = getDatabase();
  const ordersRef = ref(db, `/api/admin/orders/${orderNumber}`);
  orderNumber++;

  const resp = await set(ordersRef, userOrder);
  return resp;
};