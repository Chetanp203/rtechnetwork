// pages/careers.tsx
import Navbar from '../components/Navbar';

const Careers = () => {
  return (
    <div>
      <Navbar />
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold text-center my-8">Careers</h1>

        {/* Current Openings Section */}
        <section id="current-openings" className="my-12">
          <h2 className="text-3xl font-semibold mb-6">Current Openings</h2>
          <p className="text-lg leading-relaxed text-gray-700 max-w-2xl  mb-8">
            Join our team and contribute to shaping the future of our company. Check out our current job openings below and apply to the role that suits you.
          </p>

          {/* Job Openings */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Example Job Opening */}
            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Software Engineer</h3>
              <p className="text-gray-600 mb-4">
                We are looking for an experienced Software Engineer to join our team and help build innovative solutions.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Apply Now →</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Product Manager</h3>
              <p className="text-gray-600 mb-4">
                Lead product development and help bring exciting new products to market.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Apply Now →</a>
            </div>

            <div className="bg-gray-100 p-6 rounded-lg shadow-md text-center">
              <h3 className="text-xl font-bold mb-2">Marketing Specialist</h3>
              <p className="text-gray-600 mb-4">
                Help craft marketing strategies and drive our brands growth.
              </p>
              <a href="#" className="text-blue-600 mt-4 inline-block">Apply Now →</a>
            </div>

            {/* Add more job openings as needed */}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Careers;
