import React from 'react';
import { FaWhatsapp, FaShieldAlt, FaHeadset, FaAward } from 'react-icons/fa';

const stats = [
  { number: '500+', label: 'Completed Projects' },
  { number: '98%', label: 'Customer Satisfaction' },
  { number: '15+', label: 'Years Experience' },
  { number: '24/7', label: 'Emergency Service' },
];

export default function CTA() {
  return (
    <section className="py-16 md:py-20 bg-gradient-to-br from-[#0a665e] to-[#04403b] text-white font-sans">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          
          {/* Left Content: Text & Buttons */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div>
              <h2 className="text-4xl md:text-5xl font-bold mb-4 leading-tight">
                Ready to Start Your Borehole Project?
              </h2>
              <p className="text-lg text-gray-100 opacity-90 max-w-xl">
                Get clean, reliable water for your home or business. Our experts are ready to help you find the perfect solution.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-[#d1a365] hover:bg-[#b88d52] text-white font-semibold py-3 px-8 rounded shadow-md transition-colors duration-300 text-center">
                Book Site Inspection
              </button>
              <button className="bg-white hover:bg-gray-100 text-[#085a53] font-semibold py-3 px-8 rounded shadow-md flex items-center justify-center gap-2 transition-colors duration-300">
                <FaWhatsapp className="text-xl" />
                <span>Call / WhatsApp</span>
              </button>
            </div>

            {/* Trust Indicators */}
            <div className="flex flex-wrap gap-6 text-sm font-medium opacity-80 pt-2">
              <div className="flex items-center gap-2">
                <FaShieldAlt className="text-[#d1a365] text-lg" />
                <span>Licensed & Insured</span>
              </div>
              <div className="flex items-center gap-2">
                <FaHeadset className="text-[#d1a365] text-lg" />
                <span>24/7 Support</span>
              </div>
              <div className="flex items-center gap-2">
                <FaAward className="text-[#d1a365] text-lg" />
                <span>Quality Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Right Content: Stats Grid */}
          <div className="w-full lg:w-1/2">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-lg text-center shadow-lg">
                  <h3 className="text-4xl font-bold text-[#d1a365] mb-2">{stat.number}</h3>
                  <p className="text-gray-200 font-medium">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}