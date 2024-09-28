// pages/offerings.tsx
import Navbar from '../components/Navbar';

const OurOfferings = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center my-8">Our Offerings</h1>

        {/* Services Section */}
        <section id="services" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Services</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl ">
            We offer a wide range of services designed to help businesses grow and succeed. Our services include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>Consulting Services</li>
            <li>Software Development</li>
            <li>System Integration</li>
            <li>Cloud Solutions</li>
            <li>Technical Support and Maintenance</li>
          </ul>
        </section>

        {/* Products Section */}
        <section id="products" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Product Card */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Product 1</h3>
              <p className="text-gray-600 mb-4">
                Our flagship product designed to revolutionize your workflow.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Learn More →</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Product 2</h3>
              <p className="text-gray-600 mb-4">
                A powerful tool for enhancing your business operations.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Learn More →</a>
            </div>

            {/* Add more products as needed */}
          </div>
        </section>

        {/* Certifications Section */}
        <section id="certifications" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Certifications</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl ">
            Our company holds a variety of industry-recognized certifications that demonstrate our commitment to quality and security. These include:
          </p>
          <ul className="list-disc list-inside mt-4 space-y-2">
            <li>ISO 9001: Quality Management System</li>
            <li>ISO 27001: Information Security Management</li>
            <li>CMMI Level 5: Process Improvement</li>
            <li>Microsoft Gold Partner Certification</li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default OurOfferings;
