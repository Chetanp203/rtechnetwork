// pages/company.tsx
import Navbar from '../components/Navbar';

const OurCompany = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center my-8">Our Company</h1>

        {/* About Us Section */}
        <section id="about-us" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">About Us</h2>
          <p className="text-lg leading-relaxed text-gray-700  ">
            Our company is committed to providing high-quality services that push the boundaries of innovation and excellence. We take pride in delivering customer-centric solutions that cater to the dynamic needs of the industry, all while maintaining a strong focus on sustainability and integrity.
          </p>
        </section>

        {/* Our Experts Section */}
        <section id="our-experts" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Our Experts</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Expert Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <img
                src="/sampleperson.jpeg"
                alt="Expert 1"
                className="w-32 h-32 mx-auto rounded-full mb-4"
              />
              <h3 className="text-xl font-bold">Sam Clark</h3>
              <p className="text-gray-600">Chief Technology Officer</p>
              <p className="text-sm text-gray-500">John is a visionary leader in technology innovation, specializing in system architecture and product development.</p>
            </div>
          </div>
        </section>

        {/* Blogs Section */}
        <section id="blogs" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Blogs</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Blog Card Example */}
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4">The Future of AI in Business</h3>
              <p className="text-gray-600">Discover how artificial intelligence is transforming industries across the
                globe and creating new opportunities for innovation.</p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Read More →</a>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Frequently Asked Questions</h2>
          <div className="space-y-4">
            <div className="bg-gray-50 p-4 rounded-lg shadow-md">
              <h3 className="font-semibold">What services does your company offer?</h3>
              <p className="text-gray-600 mt-2">
                We offer a wide range of services including web development, system integration, consulting, and more, tailored to meet the needs of our clients.
              </p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default OurCompany;
