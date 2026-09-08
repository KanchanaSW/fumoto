import { Footer } from "./components/Footer";
import { Grain } from "./components/Grain";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { Offerings } from "./components/Offerings";
import { Philosophy } from "./components/Philosophy";
import { Quote } from "./components/Quote";
import { Showcase } from "./components/Showcase";

export default function App() {
  return (
    <>
      <Grain />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <Header />
      <main id="main">
        <Hero />
        <Philosophy />
        <Offerings />
        <Showcase />
        <Quote />
      </main>
      <Footer />
    </>
  );
}
