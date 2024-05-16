import { initializeApp } from "firebase/app";
import { getDatabase, ref, get, set, onValue } from "firebase/database";
import { v4 as uuidv4 } from 'uuid';

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