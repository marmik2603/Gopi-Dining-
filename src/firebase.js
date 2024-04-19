import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAfyuEnk1d2LUmhjfblzgxOnkpVo9HkQx0",
  authDomain: "qr-dining-serverside.firebaseapp.com",
  databaseURL: "https://qr-dining-serverside-default-rtdb.firebaseio.com",
  projectId: "qr-dining-serverside",
  storageBucket: "qr-dining-serverside.appspot.com",
  messagingSenderId: "498289420577",
  appId: "1:498289420577:web:639a069367bb6095273660",
  measurementId: "G-F6ERS038LX"
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