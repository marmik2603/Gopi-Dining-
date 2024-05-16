import Review from './Review'

function Testimonial() {
  return (
    <section className="px-6 py-24 sm:py-32 lg:px-8 sm:flex">
      <Review review="Gopi's is a true gem in the heart of Ahmedabad! The atmosphere is warm and inviting, and the aroma of spices instantly transports you. But the real star of the show is the food. Every dish I tasted was an explosion of flavor, showcasing fresh ingredients and traditional cooking techniques. I especially loved the melt-in-your-mouth Paneer Tikka Masala and the fluffy Garlic Naan. Gopi's is a must-visit for anyone seeking authentic and delicious Indian cuisine."
      title="A Feast for the Senses"
      name="Sarah L."
      />
      <Review review="Gopi's has become our go-to restaurant for family dinners. The staff is incredibly friendly and accommodating, always happy to suggest dishes based on our preferences. We particularly appreciate the variety of vegetarian options, which are perfect for our daughter. The portions are generous, and the prices are reasonable. We always leave Gopi's feeling satisfied and happy. It's the perfect place for a casual and enjoyable dining experience."
      title="A Family Favorite"
      name="The Patel Family"
      />
    </section>
  )
}

export default Testimonial