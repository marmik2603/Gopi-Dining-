import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeOrder, setOrders } from "../feature/admin/ordersSlice";
import { AdminMenuList } from "../components/AdminMenuList";
import { subscribeToOrders, updateOrderStatus, updateTableStatus } from "../firebase";

function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders)

  useEffect(() => {
    const unsubscribe = subscribeToOrders((newOrders) => {
      dispatch(setOrders(newOrders));
    });
    return unsubscribe;
  }, [dispatch])

  const handleComplete = (orderId, value) => {
    updateOrderStatus(orderId, value);
    if (value === "Complete") {
      dispatch(removeOrder(orderId));
      updateTableStatus(orders[orderId].tableNumber, true);
    }
  }

  if (orders === null) {
    return <div className="flex justify-center items-center h-screen">
      <h1 className="text-2xl font-semibold">No orders to display</h1>
    </div>
  }

  return (
    <div>
      {orders && Object.entries(orders).map(([orderId, order]) => (
        <div key={orderId}>
          <div className="flex justify-center w-full my-8">
            <div className="flex justify-between w-96">
              <h1 className="font-semibold text-2xl text-center m-2">Table - {order.tableNumber}</h1>
              <select
                onChange={(e) => handleComplete(orderId, e.target.value)}
                className={`mt-3 rounded-md py-1 px-3 text-lg font-semibold text-gray-900 bg-white`}>
                <option value="Pending">Pending</option>
                <option value="Confirmed">Confirmed</option>
                <option value="Complete">Complete</option>
              </select>
            </div>
          </div>
          {order.userOrders.map(element => (
            <AdminMenuList key={element.id} dish={element} orderId={orderId} handleComplete={handleComplete} />
          ))}
          <h2 className="text-xl font-semibold text-center">Total: {order.totalAmount}</h2>
        </div>
      ))
      }
    </div >
  )
}

export default Admin
