import PropTypes from 'prop-types';

const MenuItem = ({ dish, IMAGE, handleCart, button }) => {
  const buttonStyle = button === 'Add to cart' ? 'bg-yellow-500 hover:bg-yellow-400' : 'bg-red-600 hover:bg-red-500';

  return (
    <div className="rounded-lg border border-gray-200 w-5/6 md:w-1/4">
      <img src={IMAGE} alt={dish.name} className="object-cover w-full rounded-t-md" />
      <div className="p-2 h-full flex flex-col">
        <p className="text-lg font-medium">
          {dish.name}
          <span className="m-2 rounded-md px-2 py-1 text-xs text-green-700 ring-2 ring-inset ring-green-600/20">
            {dish.category}
          </span>
        </p>
        <p className="text-sm italic text-gray-500">{dish.description}</p>
        <p className="text-lg">₹{dish.price}</p>
        <button
          type="button"
          onClick={() => handleCart(dish.id)}
          className={`text-sm rounded-md w-full py-2 px-4 text-sm font-semibold text-gray-900 ${buttonStyle}`}>
          {button}
        </button>
      </div>
    </div>
  )
}

MenuItem.propTypes = {
  dish: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
  }).isRequired,
  IMAGE: PropTypes.string.isRequired,
  handleCart: PropTypes.func.isRequired,
  button: PropTypes.string.isRequired
};

export default MenuItem