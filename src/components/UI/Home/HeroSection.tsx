import Image from "next/image";

import CarouselSlider from "./CarouselSlider";

const HeroSection = async () => {
  const res = await fetch("http://localhost:5000/api/v1/products", {
    next: { revalidate: 2592000 },
  });

  const { data } = await res.json();

  return (
    <div className="bg-base-200">
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content text-center">
          <div className="max-w-2xl">
            <h1 className="text-3xl font-bold">
              Welcome to Sunbeam Kids Garden <br /> - <br /> Discover Fashion
              Wonderland at Sunbeam Kids Garden!!
            </h1>
            <p className="py-6">
              Step into a fashion paradise at Sunbeam Kids Garden, where style
              meets imagination. Our curated collection of trendy apparel and
              accessories for children is designed to inspire confidence and
              creativity. We offer a range of fashion-forward pieces that will
              make your little ones stand out in every crowd. Explore our
              fashion wonderland and dress your kids in the latest trends that
              reflect their unique personality and style.
            </p>
          </div>
        </div>
      </div>

      <>
        <CarouselSlider data={data} />
      </>
    </div>
  );
};

export default HeroSection;
