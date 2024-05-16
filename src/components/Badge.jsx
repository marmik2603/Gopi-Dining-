import PropTypes from 'prop-types';

const Badge = ({ available }) => {
  if (available) {
    return (
      <span className='inline-flex items-center gap-x-1.5 rounded-full bg-green-100 px-1.5 py-0.5 text-xs font-medium text-green-700'>
        <svg className='h-1.5 w-1.5 fill-green-500' viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
        Available
      </span>
    )
  } else {
    return (
      <span className='inline-flex items-center gap-x-1.5 rounded-full bg-red-100 px-1.5 py-0.5 text-xs font-medium text-red-700'>
        <svg className='h-1.5 w-1.5 fill-red-500' viewBox="0 0 6 6" aria-hidden="true">
          <circle cx={3} cy={3} r={3} />
        </svg>
        Occupied
      </span >
    )
  }
}

export default Badge;

Badge.propTypes = {
  available: PropTypes.bool.isRequired
};