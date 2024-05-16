import AddressCard from "./AddressCard"
import ContactCard from "./ContactCard"

const Contact = () => {
  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl space-y-16 divide-y divide-gray-100 lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight">Get in touch</h2>
              <p className="mt-4 leading-7 text-xl text-gray-400">
              Let's connect and experience the flavors of Ahmedabad together! Here are the ways you can reach us
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <ContactCard title='Collaborate' email='collaborate@example.com' number='+91 12345 67890' />
              <ContactCard title='Press' email='press@example.com' number='+91 12345 67890' />
              <ContactCard title='Join our team' email='careers@example.com' number='+91 12345 67890' />
              <ContactCard title='Say hello' email='hello@example.com' number='+91 12345 67890' />
            </div >
          </div >
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-16 lg:grid-cols-3">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-gray-300">Locations</h2>
              <p className="mt-4 leading-7 text-xl text-gray-400">
              In the Heart of Ahmedabad
              </p>
            </div>
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-2 lg:gap-8">
              <AddressCard street='1-5, Ground, Sahjanand Palace, 100 Feet Anand Nagar Rd, Anand Nagar, Jodhpur Village' city='Ahmedabad, Gujarat 380015 ' />
              <AddressCard street='Avadhesh Huse, Ground Floor, Off, Ashram Rd, Pritam Nagar, Ellisbridge' city='Ahmedabad, Gujarat 380006' />
            </div>
          </div>
        </div >
      </div >
    </div >
  )
}

export default Contact