import React from "react";
import { FaUserFriends, FaTools, FaHandHoldingUsd, FaClock, FaCheckCircle } from "react-icons/fa";
import Image from "next/image";

export default function WhyUs() {
  const PRIMARY = "#005A5A";
  const GOLD = "#CFA45A";

  const info = [
    {
      header: "Licensed & Certified",
      desc: "Registered contractors with full compliance and certifications."
    },
    {
      header: "Quality Guaranteed",
      desc: "Every project meets strict quality and safety standards."
    },
    {
      header: "Expert Team",
      desc: "Specialists in Zimbabwe’s geology and water systems."
    }
  ];

  const features = [
    {
      icon: <FaUserFriends className="text-3xl text-[#005A5A]" />,
      title: "Professional Drilling Experts",
      description: "Certified specialists with deep experience in water solutions."
    },
    {
      icon: <FaTools className="text-3xl text-[#005A5A]" />,
      title: "Modern Equipment",
      description: "Advanced drilling machinery ensuring clean, fast, reliable work."
    },
    {
      icon: <FaHandHoldingUsd className="text-3xl text-[#005A5A]" />,
      title: "Transparent Pricing",
      description: "Clear quotes with no hidden fees — full cost clarity."
    },
    {
      icon: <FaClock className="text-3xl text-[#005A5A]" />,
      title: "Fast & Reliable Service",
      description: "Efficient drilling with minimal disruption."
    }
  ];

  return (
    <section className="w-full py-24 bg-[#F2EDE3] text-[#0D1B2A]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block bg-white px-6 py-2 rounded-full border border-[#E5D5BC] text-sm tracking-wide text-[#005A5A]">
            Why Choose Ala Mode Boreholes
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold mt-6 mb-4 text-[#005A5A]">
            Reliable Water Solutions. Trusted Experts.
          </h2>
          <p className="text-[#3A4A4A] max-w-2xl mx-auto text-lg leading-relaxed">
            Experience unmatched service backed by technology, certification, and quality assurance.
          </p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-8 text-center shadow-md hover:shadow-xl transition-all duration-300 border border-[#E5D5BC]"
            >
              <div className="w-20 h-20 rounded-full bg-[#F2EDE3] border border-[#E5D5BC] flex items-center justify-center mx-auto mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-[#005A5A] mb-3">{feature.title}</h3>
              <p className="text-[#4B4B4B] leading-relaxed text-sm">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* Side Image + Info */}
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <Image
            src="/pic1.jpg"
            alt="Drilling Picture"
            width={620}
            height={380}
            className="rounded-2xl shadow-xl object-cover"
          />

          <div className="space-y-6 max-w-xl">
            <h2 className="text-3xl font-bold text-[#005A5A]">
              Premium Quality, Fair Pricing
            </h2>
            <p className="text-[#4B4B4B] leading-relaxed">
              At Ala Mode Boreholes, we combine cutting-edge drilling technology with expert geological knowledge to deliver reliable, long-lasting water solutions.
            </p>

            <div className="space-y-5">
              {info.map((item, i) => (
                <div key={i} className="flex items-start gap-4">
                  <FaCheckCircle className="text-[#CFA45A] text-xl mt-1" />
                  <div>
                    <p className="text-lg font-semibold text-[#005A5A]">{item.header}</p>
                    <p className="text-[#4B4B4B]">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#005A5A] font-semibold text-lg cursor-pointer hover:underline">
              Learn More About Us →
            </p>
          </div>
        </div>

      </div>
    </section>
  );
}
