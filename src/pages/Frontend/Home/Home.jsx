import About from "./About";
import ActionSection from "./ActionSection";
import ArticlesSection from "./ArticlesSection";
import ContactUs from "./ContactUs";
import FAQSection from "./FAQSection";
import Features from "./Features";
import LandingPage from "./Hero";
import PricingSection from "./PricingSection";
import SubscribeSection from "./SubscribeSection";
import TestimonialSection from "./TestimonialSection";
import WorkSection from "./WorkSection";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
    <div className="flex flex-col min-h-screen bg-white text-gray-800">
      <LandingPage/>      
      <Features />
      <WorkSection />
      <PricingSection />
      <About />
      <TestimonialSection />
      <ArticlesSection />
      {/* <ActionSection /> */}
      <SubscribeSection />
      <FAQSection/>
      <ContactUs/>
    </div>
    </div>
  )
}
