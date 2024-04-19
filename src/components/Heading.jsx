import PropTypes from 'prop-types';

const Heading = ({ size, content }) => {
  return (
    <div className={`flex justify-center py-5 text-${size} font-bold`}>
      <h1>{content}</h1>
    </div>
  )
}

Heading.propTypes = {
  size: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Heading