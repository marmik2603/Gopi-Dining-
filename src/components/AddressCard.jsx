import PropTypes from 'prop-types';

const AddressCard = ({ street, city }) => {
  return (
    <div className="rounded-2xl bg-gray-800 p-10">
      <h3 className="text-base font-semibold leading-7 text-gray-300">{city.split(',')[0]}</h3>
      <address className="mt-3 space-y-1 text-sm not-italic leading-6 text-gray-300">
        <p>{street}</p>
        <p>{city}</p>
      </address>
    </div>
  )
}

AddressCard.propTypes = {
  street: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
};

export default AddressCard