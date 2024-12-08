import FeatureSection from "@/components/FeatureSection";
import HeroSection from "@/components/HeroSection";
import ListingSection from "@/components/ListingSection";
import ListingSectionTwo from "@/components/ListingSectionTwo";
import NewsletterSection from "@/components/NewsletterSection";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <FeatureSection />
        <ListingSection />
        <ListingSectionTwo />
        <NewsletterSection />
      </main>
      <Footer />
    </div>
  );
}
