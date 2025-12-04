import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function FeaturedProjects() {
  const projects = [
    {
      category: "RESIDENTIAL",
      title: "Suburban Home Installation",
      description:
        "Complete borehole drilling and pump system installation for a family home in Harare North.",
      image: "/image2.jpg",
    },
    {
      category: "AGRICULTURAL",
      title: "Farm Irrigation System",
      description:
        "High-capacity water supply for large-scale agricultural irrigation needs.",
      image: "/image2.jpg",
    },
    {
      category: "COMMERCIAL",
      title: "Business Complex Water Supply",
      description:
        "Industrial pumping station for a new building development.",
      image: "/commercial.jpeg",
    },
    {
      category: "MAINTENANCE",
      title: "Pump System Upgrade",
      description:
        "Upgrading existing infrastructure for better water pressure and efficiency.",
      image: "/image2.jpg",
    },
    {
      category: "TESTING",
      title: "Water Quality Assessment",
      description:
        "Comprehensive chemical and biological testing for safe drinking water.",
      image: "/testing.jpeg",
    },
    {
      category: "SERVICE",
      title: "Emergency Repair Service",
      description:
        "Fast response repair for a broken main supply line ensuring minimal downtime.",
      image: "/service.jpeg",
    },
  ];

  return (
    <section className="w-full py-20 bg-[#F2EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005A5A] mb-4">
            Our Featured Projects
          </h2>
          <p className="text-[#4a5f5f] max-w-2xl mx-auto text-base md:text-lg">
            Explore a selection of our completed borehole installations and water system solutions.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 mb-14">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
            >
              {/* Background Image */}
              <div
                className="absolute inset-0 bg-cover bg-center transition-all duration-700 group-hover:scale-110"
                style={{ backgroundImage: `url(${project.image})` }}
              />

              {/* Deep teal-to-black premium gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#002f2f]/95 via-[#003f3f]/50 to-transparent" />

              {/* Content */}
              <div className="absolute bottom-0 left-0 p-7 w-full text-white transition-all duration-300">

                {/* Category */}
                <span className="inline-block px-3 py-1 mb-3 text-xs font-bold uppercase tracking-wide bg-[#CFA45A] text-black rounded-md shadow">
                  {project.category}
                </span>

                <h3 className="text-xl font-bold mb-2 leading-tight tracking-wide">
                  {project.title}
                </h3>

                {/* Description Reveal */}
                <p className="text-sm text-gray-200 max-h-0 overflow-hidden group-hover:max-h-24 transition-all duration-500 ease-linear">
                  {project.description}
                </p>

                {/* Link */}
                <div className="flex items-center mt-3 text-sm font-semibold text-[#CFA45A] group-hover:text-white transition-colors">
                  View Details <FaArrowRight className="ml-2 text-xs" />
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Button */}
        <div className="text-center">
          <button className="inline-flex items-center px-8 py-3 bg-[#005A5A] text-white font-semibold rounded-xl hover:bg-[#004747] transition-colors duration-300 shadow-lg">
            View All Projects <FaArrowRight className="ml-2" />
          </button>
        </div>
      </div>
    </section>
  );
}
