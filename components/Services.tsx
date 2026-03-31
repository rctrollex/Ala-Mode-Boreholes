import Link from 'next/link';
import message from './message';
import { 
  FaHammer, 
  FaMapMarkedAlt, 
  FaCogs, 
  FaFlask, 
  FaWater, 
  FaTachometerAlt, 
  FaWrench, 
  FaLayerGroup, 
  FaArrowRight 
} from 'react-icons/fa';

export default function Services() {

  const TEAL = "#005A5A";
  const BEIGE = "#F2EDE3";
  const GOLD = "#CFA45A";

  const services = [
    {
      icon: <FaHammer />,
      title: "Borehole Drilling",
      description: "Premium drilling using advanced machinery to reliably access underground water."
    },
    {
      icon: <FaMapMarkedAlt />,
      title: "Site Survey & Assessment",
      description: "Accurate geological assessment to determine high-yield drilling spots."
    },
    {
      icon: <FaCogs />,
      title: "Pump Installation",
      description: "High-performance pump systems installed for long-term water supply."
    },
    {
      icon: <FaFlask />,
      title: "Water Quality Testing",
      description: "Certified laboratory testing to ensure safe, clean, drinkable water."
    },
    {
      icon: <FaWater />,
      title: "Borehole Flushing",
      description: "Deep cleaning and sediment removal to restore optimal water flow."
    },
    {
      icon: <FaTachometerAlt />,
      title: "Capacity Testing",
      description: "Precise yield testing to measure sustainable pumping rate."
    },
    {
      icon: <FaWrench />,
      title: "Maintenance & Repairs",
      description: "Routine servicing and emergency repairs for efficient operation."
    },
    {
      icon: <FaLayerGroup />,
      title: "Casing Installation",
      description: "Durable casing solutions ensuring borehole stability and longevity."
    }
  ];

  return (
    <section className="w-full py-24 bg-white" id='services'>
      <div className="max-w-7xl mx-auto px-6">

        {/* Header */}
        <div className="text-center mb-20">
          <span className="inline-block bg-[#005A5A]/10 px-6 py-2 rounded-full text-sm font-semibold text-[#005A5A] tracking-wide">
            Our Expertise
          </span>

          <h2 className="text-4xl md:text-5xl font-extrabold text-[#005A5A] mt-6">
            Premium Water Solutions
          </h2>

          <p className="text-gray-600 max-w-2xl mx-auto text-lg mt-4">
            From drilling to installation and maintenance, we deliver complete and reliable
            water solutions for homes, farms, and businesses.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-20">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="bg-[#F2EDE3]/40 rounded-2xl p-10 border border-[#005A5A]/10 
                         hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
            >
              <div className="bg-[#005A5A] w-16 h-16 rounded-xl flex items-center justify-center 
                              text-white text-2xl shadow-md mb-6">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-[#005A5A] mb-3">
                {service.title}
              </h3>

              <p className="text-gray-700 text-sm leading-relaxed mb-6">
                {service.description}
              </p>


              {/* <a 
                href="#" 
                className="inline-flex items-center text-sm font-semibold text-[#005A5A] hover:text-[#003F3F] transition-colors"
              >
                Learn More
                <FaArrowRight className="ml-2 text-xs" />
              </a> */}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link href={`https://wa.me/263772644663?text=${message}`} className="inline-flex items-center px-10 py-4 bg-[#005A5A] text-white font-semibold 
                             rounded-xl hover:bg-[#003F3F] transition-all duration-300 shadow-lg">
            Request a Quote
            <FaArrowRight className="ml-2" />
          </Link>
        </div>

      </div>
    </section>
  );
}
