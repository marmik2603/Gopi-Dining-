const AboutComponent = () => {
  const values = [
    {
      name: 'Our Story',
      description:
        "Gopi's was born from a love of sharing Ahmedabad's vibrant cuisine. We use generations-old recipes and locally sourced ingredients to create authentic dishes that bring people together for a taste of the city's rich culinary heritage.",
    },
    {
      name: 'Our Philosophy',
      description:
        "At Gopi's, we believe in celebrating the soul of Ahmedabad through food. We craft authentic dishes using fresh, local ingredients and generations-old recipes, fostering a warm and welcoming atmosphere for every guest to connect over a delicious journey of flavors.",
    },
    ,
    {
      name: 'Our Commitment',
      description:
        "At Gopi's, we're dedicated to providing an exceptional dining experience that goes beyond just delicious food.",
    },
    {
      name: 'Community Engagement',
      description:
        "At Gopi's, we believe food is more than sustenance; it's a thread that weaves communities together.  That's why we're passionate about engaging with Ahmedabad and its vibrant people",
    },
    {
      name: 'Visit Us',
      description:
        "Ready to embark on a delicious adventure through the heart of Ahmedabad? We invite you to visit Gopi's, a haven of authentic flavors and warm hospitality. Savor the rich culinary heritage of the city with every bite, prepared using fresh, seasonal ingredients and generations-old recipes."        
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