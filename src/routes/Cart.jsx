import { useDispatch, useSelector } from "react-redux"
import Loading from "../components/Loading"
import { removeFromUserOrder, submitOrder, updateUserOrderQuantity } from "../feature/user/userSlice";
import Table from "../components/Table";

function Cart() {
  const loading = useSelector(state => state.menu.loading)
  const menu = useSelector(state => state.menu.menu)
  const cart = useSelector(state => state.user.userOrder)

  const lists = cart.map(cartItem => {
    return menu.flatMap(category =>
      category.items.filter(item => item.id === cartItem.id).map(filteredItem => ({
        ...filteredItem,
        quantity: cartItem.quantity
      }))
    );
  }).flat();

  const totalAmount = lists.reduce((total, item) => total + (item.price * item.quantity), 0).toFixed(2);
  const dispatch = useDispatch();

  const removeFromCart = (id, quantity = 1) => {
    dispatch(removeFromUserOrder({ id, quantity }))
  }

  const updateQuantity = (id, quantity) => {
    dispatch(updateUserOrderQuantity({ id, quantity }));
  }

  const handleCheckout = () => {
    dispatch(submitOrder());
  };

  if (loading) return <Loading text="Processing..." />

  return (
    <main className="container mx-auto px-4 h-screen">
      <div className="flex flex-col justify-between h-full py-10">
        <Table lists={lists} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />
        <div className="flex justify-between items-center mx-2">
          <span className="font-bold">Total: ₹{totalAmount}</span>
          <button
            className="bg-green-600 text-gray-900 font-bold px-5 py-2 rounded hover:bg-green-500"
            onClick={handleCheckout}
          >
            Checkout
          </button>
        </div>
      </div>
    </main>
  )
}

export default Cart