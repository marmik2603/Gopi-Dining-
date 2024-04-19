import PropTypes from 'prop-types';

const ContactCard = ({ title, email, number }) => {
  return (
    <div className="rounded-2xl bg-gray-800 p-10">
      <h3 className="text-base font-semibold leading-7 text-gray-300">{title}</h3>
      <dl className="mt-3 space-y-1 text-sm leading-6 text-gray-600">
        <div>
          <dt className="sr-only">Email</dt>
          <dd>
            <a className="font-semibold text-yellow-500">
              {email}
            </a>
          </dd>
        </div>
        <div className="mt-1">
          <dt className="sr-only">Phone number</dt>
          <dd className="text-gray-300">{number}</dd>
        </div>
      </dl>
    </div>
  )
}

ContactCard.propTypes = {
  title: PropTypes.string.isRequired,
  email: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
};

export default ContactCard