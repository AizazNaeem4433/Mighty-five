import HeroSVG from './components/Hero';
import ServicesSection from './components/ServicesSection';
import AboutPreview from './components/AboutPreview';
import WhyPartnerSection from './components/Partnerpage';

export default function Home() {
  return (
    <main>
      <HeroSVG />
      <ServicesSection />
      <AboutPreview /> 
      
      <WhyPartnerSection/>{/* This shows short content with Read More */}
    </main>
  );
}
