import HeroSection from '../components/HeroSection';
import AboutUs from '../components/AboutUs';
import Services from '../components/Services';
import Portfolio from '../components/Portfolio';
import Blog from '../components/Blog';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <AboutUs />
      <Services />
      <Portfolio />
      <Blog />
    </div>
  );
}
