const features = [
  {
    name: 'A Glimpse of Ahmedabad',
    description: "Immerse yourself in the true spirit of Ahmedabad with our selection of local favorites. Savor the aromatic curries simmered to perfection, the fluffy rotis cooked on a tawa, and the delightful street food specialties. Every bite is a journey through the city's rich culinary heritage.", 
    imageSrc: 'image1.avif',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Gujarati Gems',
    description:
      "Experience the essence of Gujarati cuisine with our authentic dishes. We use traditional recipes passed down through generations, featuring a beautiful balance of sweet, savory, and sour flavors. From the creamy kadhi to the tangy dhokla, our Gujarati selection is a celebration of local flavors.",
    imageSrc: 'image4.avif',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Kathiawadi Delicacies',
    description:
      "Embark on a culinary adventure to the Kathiawar region with our selection of robust and flavorful dishes. Our chefs use bold spices and unique cooking techniques to create dishes like the fiery mutton curry and the comforting sev tamatar sabzi. Each bite is an explosion of taste that will leave you wanting more.",
    imageSrc: 'image3.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

const Featured = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Featured</p>
          <p className="mt-4 text-xl text-gray-400">
          Indulge in our culinary creations that showcase the best of Ahmedabad's vibrant food scene. We use only the freshest seasonal ingredients, and our chefs weave their magic to present innovative dishes that tantalize your taste buds.
          </p>
        </div>

        <div className="mt-10 flex flex-col items-center space-y-5 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16">
          {features.map((feature) => (
            <div key={feature.name} className="flex flex-col md:flex-row w-9/12 gap-x-48">
              <div className="mt-6">
                <h3 className="text-2xl font-bold">{feature.name}</h3>
                <p className="mt-2 text-lg text-gray-500">{feature.description}</p>
              </div>
              <img src={feature.imageSrc} alt={feature.imageAlt} className="size-80 object-cover object-center" />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Featured