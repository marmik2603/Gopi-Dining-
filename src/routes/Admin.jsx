import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../feature/admin/ordersSlice";

function Admin() {
  const dispatch = useDispatch();
  const orders = useSelector(state => state.orders.orders)

  useEffect(() => {
    dispatch(getOrders())
  }, [dispatch])

  const handleOrder = () => {

  }

  return (
    <div>
      {orders &&
        <>
          {console.log(orders)}
        </>
      }
    </div>
  )
}

export default Admin