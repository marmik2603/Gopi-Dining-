import PropTypes from 'prop-types';

const Table = ({ lists, updateQuantity, removeFromCart }) => {
  return (
    <table className="w-full text-left">
      <thead>
        <tr>
          <th className="p-2">Item</th>
          <th className="p-2">Quantity</th>
          <th className="p-2">Price</th>
          <th className="p-2">Actions</th>
        </tr>
      </thead>
      <tbody>
        {lists.map((item) => (
          <tr key={item.id}>
            <td className="p-2">{item.name}</td>
            <td className="p-2">
              <select
                value={item.quantity}
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
                className="bg-gray-900 p-2 rounded">
                {[1, 2, 3, 4, 5, 6].map((number) => (
                  <option key={number} value={number}>{number}</option>
                ))}
              </select>
            </td>
            <td className="p-2">₹{item.price}</td>
            <td className="p-2">
              <button onClick={() => removeFromCart(item.id)} className="bg-red-500 text-white px-2 py-1 rounded">Remove</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}

Table.propTypes = {
  lists: PropTypes.array.isRequired,
  updateQuantity: PropTypes.func.isRequired,
  removeFromCart: PropTypes.func.isRequired,
};

export default Table