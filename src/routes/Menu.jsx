import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux"
import { getMenu } from "../feature/menu/menuSlice";
import MenuCategory from "../components/MenuCategory";
import MenuList from "../components/MenuList";
import { addToUserOrder } from "../feature/user/userSlice";
import { ShoppingCartIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";
import Loading from "../components/Loading";
import Heading from "../components/Heading";

function Menu() {
  const [category, setCategory] = useState(1)
  const loading = useSelector(state => state.menu.loading)
  const menu = useSelector(state => state.menu.menu)
  const cart = useSelector(state => state.user.userOrder)

  const lists = menu && menu.find(element => element.id === category)

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMenu())
  }, [dispatch])

  const addToCart = (dish, quantity = 1) => {
    const dishWithQuantity = { ...dish, quantity };
    dispatch(addToUserOrder(dishWithQuantity))
  }

  if (loading) return <Loading text="Processing..." />

  return (
    <main>
      <div className="container mx-auto py-5">
        <Heading size="lg" content="Category" />
        <MenuCategory setCategory={setCategory} />

        <Heading size="lg" content="Menu" />
        {lists && <MenuList lists={lists.items} handleCart={addToCart} button='Add to cart' />}

        <Link to='/cart'>
          <button className="fixed right-10 bottom-20 p-5 bg-yellow-500 rounded-full">
            <div className="text-sm bg-red-600 size-5 absolute top-1 right-6 rounded-full"> {cart.reduce((total, item) => total + item.quantity, 0)}</div>
            <ShoppingCartIcon className="h-7 w-7 text-gray-900" aria-hidden="true" />
          </button>
        </Link>
      </div>
    </main>
  )
}

export default Menu