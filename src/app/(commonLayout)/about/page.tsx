const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="">
        <div className="">
          <h2 className="text-3xl font-bold text-gray-900">
            About Sunbeam Kids Garden
          </h2>
          <p className="mt-4 text-lg text-gray-600">
            Welcome to Sunbeam Kids Garden, your one-stop shop for everything
            cool, cute, and fun for kids! We are a team of passionate parents
            and child development experts who believe that every child deserves
            to have access to high-quality, affordable clothing and toys that
            spark imagination and creativity.
          </p>
        </div>
      </div>

    
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Quality</h3>
          <p className="mt-4 text-gray-600">
            We never compromise on quality. Every product we offer is carefully
            selected to meet the highest standards of safety, durability, and
            comfort.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Affordability</h3>
          <p className="mt-4 text-gray-600">
            We believe that every child deserves access to great products,
            regardless of budget. Thats why we offer competitive prices and a
            variety of payment options.
          </p>
        </div>
        <div className="text-center">
          <h3 className="text-2xl font-bold text-gray-900">Community</h3>
          <p className="mt-4 text-gray-600">
            We are passionate about fostering a sense of community among parents
            and kids. We host regular events, offer parenting tips and advice,
            and encourage open communication.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
