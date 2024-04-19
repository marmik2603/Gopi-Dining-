import Contact from "../components/Contact";
import Featured from "../components/Featured";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Nav from "../components/Nav";
import Testimonial from "../components/Testimonial";

function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Featured />
      <Testimonial />
      <Contact />
      <Footer />
    </>
  );
}

export default Home;