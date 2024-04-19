const features = [
  {
    name: 'Adventure-ready',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates quas laudantium dicta suscipit consequatur eius dolor sint vel labore possimus saepe minus, obcaecati consequuntur nulla veritatis consectetur sequi harum?",
    imageSrc: 'image1.avif',
    imageAlt: 'Printed photo of bag being tossed into the sky on top of grass.',
  },
  {
    name: 'Minimal and clean',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates quas laudantium dicta suscipit consequatur eius dolor sint vel labore possimus saepe minus, obcaecati consequuntur nulla veritatis consectetur sequi harum?",
    imageSrc: 'image4.avif',
    imageAlt: 'Double stitched black canvas hook loop.',
  },
  {
    name: 'Organized',
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque voluptates quas laudantium dicta suscipit consequatur eius dolor sint vel labore possimus saepe minus, obcaecati consequuntur nulla veritatis consectetur sequi harum?",
    imageSrc: 'image3.jpg',
    imageAlt: 'Black canvas body with chrome zipper and key ring.',
  },
]

const Featured = () => {
  return (
    <div className="mx-auto max-w-7xl sm:px-2 lg:px-4">
      <div className="mx-auto max-w-2xl px-4 lg:max-w-none">
        <div className="max-w-3xl">
          <p className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Lorem Ipusem</p>
          <p className="mt-4 text-xl text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed repudiandae consequuntur eum quidem nemo distinctio non, repellendus natus, quod assumenda architecto, deserunt fugiat aliquam animi quam similique quo? Harum, possimus.
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