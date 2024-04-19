import Categories from "@/components/UI/Home/Categories";
import FlashSale from "@/components/UI/Home/FlashSale";
import HeroSection from "@/components/UI/Home/HeroSection";
import Sponsors from "@/components/UI/Home/Sponsors";
import Trending from "@/components/UI/Home/Trending";

const HomePage = () => {
  return (
    <div className="max-w-7xl w-full mx-auto">
      <HeroSection />
      <FlashSale />
      <Categories />
      <Trending />
      <Sponsors />
    </div>
  );
};

export default HomePage;
