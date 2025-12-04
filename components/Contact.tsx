import React from 'react';
import {
  FaPhoneAlt,
  FaWhatsapp,
  FaEnvelope,
  FaMapMarkerAlt,
  FaClock,
  FaDirections,
  FaMap
} from 'react-icons/fa';

export default function Contact() {
  const hours = [
    { day: 'Monday - Friday', time: '8:00 AM - 5:00 PM', status: 'open' },
    { day: 'Saturday', time: '9:00 AM - 2:00 PM', status: 'open' },
    { day: 'Sunday', time: 'Closed', status: 'closed' },
  ];

  return (
    <section className="py-20 md:py-28 bg-[#F2EDE3]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-extrabold text-[#005A5A] mb-4">
            Get in Touch
          </h2>
          <p className="text-[#4a5f5f] max-w-2xl mx-auto text-lg">
            Contact our team for quotes, inquiries or project assistance — we respond within 24 hours.
          </p>
        </div>

        {/* Main Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-6xl mx-auto">

          {/* Left Section */}
          <div className="flex flex-col space-y-10">

            {/* Contact Card */}
            <div className="bg-white p-10 rounded-2xl shadow-lg border border-[#e6e2d8]">
              <h3 className="text-2xl font-bold text-[#005A5A] mb-10">
                Contact Information
              </h3>

              <div className="space-y-8">

                {/* Phone */}
                <a href="tel:+263784693120" className="flex items-center space-x-5 group">
                  <div className="bg-[#005A5A] text-white p-4 rounded-xl shadow-md">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition">
                      Phone
                    </p>
                    <p className="text-[#4a5f5f]">+263 78 469 3120</p>
                  </div>
                </a>

                {/* WhatsApp */}
                <a
                  href="https://wa.me/263784693120"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 group"
                >
                  <div className="bg-[#0baa4a] text-white p-4 rounded-xl shadow-md">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition">
                      WhatsApp
                    </p>
                    <p className="text-[#4a5f5f]">Chat instantly with support</p>
                  </div>
                </a>

                {/* Email */}
                <a href="mailto:info@watersboreholes.co.zw" className="flex items-center space-x-5 group">
                  <div className="bg-[#CFA45A] text-white p-4 rounded-xl shadow-md">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition">
                      Email
                    </p>
                    <p className="text-[#005A5A] font-medium">
                      info@watersboreholes.co.zw
                    </p>
                  </div>
                </a>

                {/* Address */}
                <div className="flex items-start space-x-5 group">
                  <div className="bg-[#005A5A] text-white p-4 rounded-xl shadow-md mt-1">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition">
                      Address
                    </p>
                    <p className="text-[#4a5f5f] leading-relaxed">
                      44 Eastcourt Rd,<br /> Belvedere, Harare, Zimbabwe
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#005A5A] p-10 rounded-2xl shadow-xl text-white">
              <div className="flex items-center mb-6">
                <FaClock className="w-6 h-6 mr-3 text-[#CFA45A]" />
                <h3 className="text-2xl font-bold">Operating Hours</h3>
              </div>

              <div className="space-y-3">
                {hours.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b border-white/20 last:border-b-0"
                  >
                    <span className="font-semibold">{item.day}</span>
                    <span
                      className={
                        item.status === 'closed'
                          ? 'text-red-300 font-bold'
                          : 'text-[#F2EDE3]'
                      }
                    >
                      {item.time}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Right Section */}
          <div className="bg-white p-10 rounded-2xl shadow-xl border border-[#e6e2d8] flex flex-col items-center">

            {/* Icon */}
            <div className="bg-[#005A5A] p-5 rounded-full text-white shadow-lg mb-6">
              <FaMap className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-[#005A5A] mb-2">
              Locate Our Offices
            </h3>
            <p className="text-[#4a5f5f] text-center max-w-xs mb-6">
              Navigate easily to our offices using Google Maps.
            </p>

            {/* Directions Button */}
            <a
              href="https://www.google.com/maps/search/?api=1&query=44+Eastcourt+Rd+Belvedere+Harare"
              target="_blank"
              className="flex items-center bg-[#005A5A] text-white py-3 px-7 rounded-xl shadow-md hover:bg-[#004746] transition"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </a>

            {/* Placeholder Map */}
            <div className="w-full h-64 mt-8 rounded-xl overflow-hidden shadow-inner bg-[#F2EDE3] flex items-center justify-center">
              <p className="text-[#005A5A] font-semibold">Map Placeholder</p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
