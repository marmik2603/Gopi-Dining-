import PropTypes from 'prop-types';

export const AdminMenuList = ({ dish }) => {
  return (
    <div className="flex flex-col gap-5 items-center mb-3">
      <div className="flex rounded-lg border border-gray-200 w-5/6 md:w-1/4">
        <div className='flex rounded-l-md h-40 w-40 overflow-hidden'>
          <img src={dish.image} alt={dish.name} className="object-cover w-full" />
        </div>
        <div className="p-2">
          <p className="text-xl font-semibold my-3">{dish.name}</p>
          <p className='text-lg'>Quantity: {dish.quantity}</p>
          <p className='text-lg'>Price: {dish.price}</p>
        </div>
      </div>
    </div>
  )
}

AdminMenuList.propTypes = {
  dish: PropTypes.object.isRequired
}