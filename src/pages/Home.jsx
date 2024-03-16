import Footer from "../components/footer/Footer";
import Hero from "../components/hero/Hero";
import Services from "../components/services/Services";
import Templates from "../components/templates/Templates";
import Testimonial from "../components/testimonial/Testimonial";

function Home() {
  return (
    <div className="home">
      <Hero />
      <Testimonial />
      <Services />
      <Templates />
      <Footer />
    </div>
  );
}
export default Home;
