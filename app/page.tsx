import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Story from "../components/Story";
import Evening from "../components/Evening";
import Menu from "../components/Menu";
import Gallery from "../components/Gallery";
import Voices from "../components/Voices";
import Reserve from "../components/Reserve";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Story />
      <Evening />
      <Menu />
      <Gallery />
      <Voices />
      <Reserve />
      <Newsletter />
      <Footer />
    </main>
  );
}
