import Image from "next/image";
import Link from "next/link";

const Categories = async () => {
  const res = await fetch(
    "https://sunbeam-kids-garden-server.vercel.app/api/v1/categories",
    {
      next: { revalidate: 30 },
    }
  );

  const { data: categories } = await res.json();

  return (
    <div className="mt-24 mb-10 max-w-[1000px] mx-auto text-center p-2">
      <div className="text-center max-w-[800px] mx-auto ">
        <h2 className="mb-3">Explore Trendy Choices for Your Little Ones</h2>
        <p className="text-justify">
          Discover a world of fashion tailored for children at our Kids Fashion
          Store. From adorable toddler outfits to stylish options for older
          kids, we offer a diverse range of categories to suit every taste and
          occasion. Whether you are looking for comfortable everyday wear or
          special occasion attire, our store has something for everyone. With
          high-quality materials and attention to detail, our clothing ensures
          both style and comfort for your little fashionistas. Experience the
          joy of dressing up your kids with our curated collection today.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 justify-center items-center max-w-7xl mx-auto mt-10 mb-10 p-2">
        <Link href={`/${categories[0].category}`}>
          <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
            <figure>
              <Image
                src={categories[0].categoryImage}
                alt="categoryImage"
                width={600}
                height={600}
                className="max-w-[700px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{categories[0].category}</h2>
            </div>
          </div>
        </Link>
        <div className="">
          <div className="flex flex-col gap-4">
            <Link href={`/${categories[1].category}`}>
              <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={categories[1].categoryImage}
                    alt="categoryImage"
                    width={600}
                    height={600}
                    className="max-w-[700px] w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{categories[1].category}</h2>
                </div>
              </div>
            </Link>
            <Link href={`/${categories[2].category}`}>
              <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
                <figure>
                  <Image
                    src={categories[2].categoryImage}
                    alt="categoryImage"
                    width={600}
                    height={600}
                    className="max-w-[700px] w-full"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">{categories[2].category}</h2>
                </div>
              </div>
            </Link>
          </div>
        </div>
        <Link href={`/${categories[3].category}`}>
          <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
            <figure>
              <Image
                src={categories[3].categoryImage}
                alt="categoryImage"
                width={600}
                height={600}
                className="max-w-[700px] w-full"
              />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{categories[3].category}</h2>
            </div>
          </div>
        </Link>
        <div className="flex flex-col gap-5">
          {" "}
          <Link href={`/${categories[4].category}`}>
            <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={categories[4].categoryImage}
                  alt="categoryImage"
                  width={600}
                  height={600}
                  className="max-w-[700px] w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{categories[4].category}</h2>
              </div>
            </div>
          </Link>
          <Link href={`/${categories[5].category}`}>
            <div className="card card-compact w-full max-w-[800px] bg-base-100 shadow-xl">
              <figure>
                <Image
                  src={categories[5].categoryImage}
                  alt="categoryImage"
                  width={600}
                  height={600}
                  className="max-w-[700px] w-full"
                />
              </figure>
              <div className="card-body">
                <h2 className="card-title">{categories[5].category}</h2>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <Link href="/all-products" className="text-center">
        <button className="btn btn-secondary text-center w-28">View All</button>
      </Link>
    </div>
  );
};

export default Categories;
