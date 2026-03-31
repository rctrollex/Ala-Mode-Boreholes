import Link from 'next/link';
import { FaSearchLocation, FaTools, FaCog, FaFlask, FaHandshake } from 'react-icons/fa';
import inspectionMessage  from './message';

const steps = [
  {
    id: 1,
    title: 'Site Inspection',
    description: 'Free consultation and geological survey to find the best location',
    icon: <FaSearchLocation />,
  },
  {
    id: 2,
    title: 'Drilling',
    description: 'Professional drilling using modern equipment to reach groundwater',
    icon: <FaTools />,
  },
  {
    id: 3,
    title: 'Installation',
    description: 'Complete pump and piping system installation for optimal water delivery',
    icon: <FaCog />,
  },
  {
    id: 4,
    title: 'Testing',
    description: 'Comprehensive water quality and system performance testing',
    icon: <FaFlask />,
  },
  {
    id: 5,
    title: 'Handover',
    description: 'Complete documentation, training, and ongoing support guarantee',
    icon: <FaHandshake />,
  },
];

export default function Process() {
  return (
    <section className="py-16 md:py-24 bg-[#f8f5f0] font-sans">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[#085a53] mb-4">Our Simple Process</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            From consultation to completion, we make borehole drilling straightforward
          </p>
        </div>

        {/* Timeline Steps */}
        <div className="relative">
          {/* Connecting Line (Hidden on mobile, visible on md and up) */}
          <div className="hidden md:block absolute top-[40px] left-0 w-full h-0.5 bg-gray-300 -z-10"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 md:gap-4">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center relative bg-[#f8f5f0] md:bg-transparent p-4 md:p-0 rounded-lg">
                {/* Icon Circle with Number Badge */}
                <div className="relative mb-6">
                  <div className="w-20 h-20 bg-white border-4 border-[#085a53] rounded-full flex items-center justify-center text-[#085a53] text-3xl shadow-sm z-10 relative">
                    {step.icon}
                  </div>
                  <div className="absolute -top-2 -right-2 bg-[#d1a365] text-white w-7 h-7 rounded-full flex items-center justify-center font-bold text-sm z-20 shadow-sm">
                    {step.id}
                  </div>
                </div>

                {/* Text Content */}
                <h3 className="text-xl font-bold text-[#085a53] mb-2">{step.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action Footer */}
        <div className="text-center mt-16">
          <p className="text-gray-700 mb-6 text-lg">Ready to get started with clean, reliable water?</p>
          <Link href={`https://wa.me/263772644663?text=${inspectionMessage}`} className="bg-[#085a53] hover:bg-[#064a44] text-white font-semibold py-3 px-8 rounded shadow transition-colors duration-300">
            Book Your Inspection With Us
          </Link>
        </div>
      </div>
    </section>
  );
}