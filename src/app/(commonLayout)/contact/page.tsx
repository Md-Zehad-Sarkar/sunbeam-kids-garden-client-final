const ContactUsPage = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-gray-900 text-center">
        Contact with us
      </h2>

      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">Our Store Address</h3>
          <p className="mt-4 text-gray-600">
            Sunbeam Kids Garden
            <br />
            Jamuna Future Park, 2nd Floor
            <br />
            Dhaka, 1202
          </p>
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900">
            Contact Information
          </h3>
          <p className="mt-4 text-gray-600">
            <span className="block">Phone:</span> +8801234567890
            <span className="block mt-2">Email:</span> sunbeamkids@gmail.com
          </p>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-3xl font-bold text-gray-900 text-center">
          Send us a message
        </h3>
        <form className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4 max-w-96 mx-auto">
          <div className="col-span-2">
            <label className="block mb-2 text-gray-700">Name</label>
            <input
              type="text"
              className="w-full h-10 px-4 border border-gray-300 focus:outline-blue-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-gray-700">Email</label>
            <input
              type="email"
              className="w-full h-10 px-4 border border-gray-300 focus:outline-blue-500"
            />
          </div>

          <div className="col-span-2">
            <label className="block mb-2 text-gray-700">Message</label>
            <textarea className="w-full h-20 px-4 border border-gray-300 focus:outline-blue-500"></textarea>
          </div>

          <div className="col-span-2 mt-4 ">
            <button type="submit" className="btn btn-primary">
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactUsPage;
