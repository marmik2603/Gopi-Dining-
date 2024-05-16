import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

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

export const sendOrder = async (userOrder) => {
  const db = getDatabase();
  const orderId = uuidv4();
  const ordersRef = ref(db, `/api/admin/orders/${orderId}`);

  await set(ordersRef, userOrder);
};

export const updateOrderStatus = async (orderId, orderStatus) => {
  const db = getDatabase();
  const orderStatusRef = ref(db, `/api/admin/orders/${orderId}/orderStatus`);

  await set(orderStatusRef, orderStatus);
  if (orderStatus === "Complete") {
    const orderRef = ref(db, `/api/admin/orders/${orderId}`);
    const orderSnapshot = await get(orderRef);
    const orderData = orderSnapshot.val();
    const archiveRef = ref(db, `/api/admin/archive/${orderId}`);
    await set(archiveRef, orderData);
    await set(orderRef, null);
  }
};

export const subscribeToOrders = (callback) => {
  const db = getDatabase();
  const ordersRef = ref(db, '/api/admin/orders');
  onValue(ordersRef, (snapshot) => {
    callback(snapshot.val());
  });
};

export const updateTableStatus = async (tableNumber, status) => {
  const tableRef = ref(db, `/api/tables/${tableNumber}/available`);
  await set(tableRef, status);
};