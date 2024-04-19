const AboutComponent = () => {
  const values = [
    {
      name: 'Our Story',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus necessitatibus magni voluptas quae, delectus non inventore earum tempore eveniet, et ut deleniti illo odit ipsum? Veniam dolore nesciunt iure!',
    },
    {
      name: 'Our Philosophy',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus necessitatibus magni voluptas quae, delectus non inventore earum tempore eveniet, et ut deleniti illo odit ipsum? Veniam dolore nesciunt iure!',
    },
    {
      name: 'Meet Our Chef',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus necessitatibus magni voluptas quae, delectus non inventore earum tempore eveniet, et ut deleniti illo odit ipsum? Veniam dolore nesciunt iure!',
    },
    {
      name: 'Our Commitment',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus necessitatibus magni voluptas quae, delectus non inventore earum tempore eveniet, et ut deleniti illo odit ipsum? Veniam dolore nesciunt iure!',
    },
    {
      name: 'Community Engagement',
      description:
        'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolorum minus necessitatibus magni voluptas quae, delectus non inventore earum tempore eveniet, et ut deleniti illo odit ipsum? Veniam dolore nesciunt iure!',
    },
    {
      name: 'Visit Us',
      description:
        'Ipsa in earum deserunt aut. Quos minus aut animi et soluta. Ipsum dicta ut quia eius. Possimus reprehenderit iste aspernatur ut est velit consequatur distinctio.',
    },
  ]
  return (
    <div className="mx-auto my-24 max-w-7xl px-6 lg:px-8">
      <div className="mx-auto max-w-2xl lg:mx-0">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">About Us</h2>
        {/* <p className="mt-6 text-lg leading-8 text-gray-400">
          Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam voluptatum cupiditate veritatis in
          accusamus quisquam.
        </p> */}
      </div>
      <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 text-base leading-7 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
        {values.map((value) => (
          <div key={value.name}>
            <dt className="font-semibold">{value.name}</dt>
            <dd className="mt-1 text-gray-400">{value.description}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

export default AboutComponent