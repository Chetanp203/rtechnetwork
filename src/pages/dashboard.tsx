// pages/dashboard.tsx
// import { useEffect, useState } from "react";
// import { useRouter } from "next/router";

// type User = {
//   username?: string;
//   email?: string;
//   role: string;
// };

import {CarouselComponent} from "@/components/Carousel";

const Dashboard = () => {
  // const router = useRouter();
  // const [user, setUser] = useState<User | null>(null);

  // useEffect(() => {
  //   const token = localStorage.getItem("token");
  //
  //   if (!token) {
  //     router.push("/login");
  //   } else {
  //     try {
  //       const decoded: User = JSON.parse(atob(token.split(".")[1])); // Decode the JWT token
  //       console.log(decoded); // Check the structure of the decoded token
  //       setUser(decoded);
  //     } catch (error) {
  //       console.error("Invalid token", error);
  //       router.push("/login");
  //     }
  //   }
  // }, [router]);

  return (
    <div className="container mx-auto px-6 py-12">
      {/* Carousel Component */}
      <CarouselComponent />

      {/* About Us Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">About Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our company has a rich history of providing exceptional services and
          solutions. With a commitment to excellence, we have built a strong
          foundation in our industry, focusing on innovation and customer
          satisfaction.
        </p>
      </section>

      {/* Our Founder Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Founder</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our founder, [Founder`s Name], started this journey with a vision to
          transform the industry. With a deep passion for [industry/field], they
          have dedicated their life to building a company that prioritizes
          [values, e.g., quality, integrity, and customer focus].
        </p>
      </section>

      {/* Our Work & Reach Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Work & Reach</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          We are proud to showcase a diverse portfolio of projects that
          demonstrate our expertise and dedication. Our clients speak for us:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-lg">
          <li>Client A: &quot;Excellent service and amazing results!&quot;</li>
          <li>Client B: &quot;We were very impressed with the professionalism.&quot;</li>
          <li>Client C: &quot;Highly recommended for any large-scale project.&quot;</li>
        </ul>
      </section>

      {/* Why Choose Us Section */}
      <section className="my-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
        <p className="text-gray-700 text-lg leading-relaxed">
          Our unique selling points include:
        </p>
        <ul className="list-disc list-inside text-gray-700 mt-4 space-y-2 text-lg">
          <li>Expert team with extensive experience</li>
          <li>Commitment to quality and excellence</li>
          <li>Customer-centric approach</li>
          <li>Innovative solutions tailored to your needs</li>
        </ul>
      </section>
    </div>
  );
};

export default Dashboard;
