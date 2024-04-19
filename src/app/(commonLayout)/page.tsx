import dynamic from "next/dynamic";
const Categories = dynamic(() => import("@/components/UI/Home/Categories"), {
  ssr: false,
});
const FlashSale = dynamic(() => import("@/components/UI/Home/FlashSale"), {
  ssr: false,
});
const HeroSection = dynamic(() => import("@/components/UI/Home/HeroSection"), {
  ssr: false,
});
const Sponsors = dynamic(() => import("@/components/UI/Home/Sponsors"), {
  ssr: false,
});
const Trending = dynamic(() => import("@/components/UI/Home/Trending"), {
  ssr: false,
});

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
