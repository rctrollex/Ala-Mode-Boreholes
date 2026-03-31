import Link from 'next/link';
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
    <section className="py-20 md:py-28 bg-[#F2EDE3]" id='contact'>
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
              <h3 className="text-2xl font-bold text-[#005A5A] mb-8">
                Contact Information
              </h3>

              <div className="space-y-4">

                {/* Phone */}
                <Link 
                  href="tel:+263772644663" 
                  className="flex items-center space-x-5 group p-3 -mx-3 rounded-xl hover:bg-[#F2EDE3]/50 transition-all duration-300"
                >
                  <div className="bg-[#005A5A] text-white p-4 rounded-xl shadow-md transform group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
                    <FaPhoneAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition-colors duration-300">
                      Phone
                    </p>
                    <p className="text-[#4a5f5f] group-hover:text-[#005A5A] transition-colors duration-300">+263 77 264 4663</p>
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/263772644663?text=Hello%20Water%20King%20Team%2C%20I%20would%20like%20to%20inquire%20about%20your%20services."
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 group p-3 -mx-3 rounded-xl hover:bg-[#F2EDE3]/50 transition-all duration-300"
                >
                  <div className="bg-[#0baa4a] text-white p-4 rounded-xl shadow-md transform group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
                    <FaWhatsapp className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#0baa4a] transition-colors duration-300">
                      WhatsApp
                    </p>
                    <p className="text-[#4a5f5f] group-hover:text-[#005A5A] transition-colors duration-300">Chat instantly with support</p>
                  </div>
                </Link>

                {/* Email */}
                <Link 
                  href="mailto:waterking2108@gmail.com" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-5 group p-3 -mx-3 rounded-xl hover:bg-[#F2EDE3]/50 transition-all duration-300" 
                >
                  <div className="bg-[#CFA45A] text-white p-4 rounded-xl shadow-md transform group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
                    <FaEnvelope className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition-colors duration-300">
                      Email
                    </p>
                    <p className="text-[#4a5f5f] font-medium group-hover:text-[#005A5A] transition-colors duration-300">
                      waterking2108@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Address */}
                <Link 
                  href="https://maps.app.goo.gl/nM1UsyN5nj6JRR2a6?g_st=awb" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="flex items-start space-x-5 group p-3 -mx-3 rounded-xl hover:bg-[#F2EDE3]/50 transition-all duration-300"
                >
                  <div className="bg-[#005A5A] text-white p-4 rounded-xl shadow-md mt-1 transform group-hover:-translate-y-1 group-hover:shadow-lg transition-all duration-300">
                    <FaMapMarkerAlt className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-[#005A5A] group-hover:text-[#CFA45A] transition-colors duration-300">
                      Address
                    </p>
                    <p className="text-[#4a5f5f] leading-relaxed group-hover:text-[#005A5A] transition-colors duration-300">
                       17 Fife Avenue, Harare, Zimbabwe
                    </p>
                  </div>
                </Link>

              </div>
            </div>

            {/* Operating Hours */}
            <div className="bg-[#005A5A] p-10 rounded-2xl shadow-xl text-white hover:shadow-2xl transition-shadow duration-300">
              <div className="flex items-center mb-6">
                <FaClock className="w-6 h-6 mr-3 text-[#CFA45A]" />
                <h3 className="text-2xl font-bold">Operating Hours</h3>
              </div>

              <div className="space-y-3">
                {hours.map((item, i) => (
                  <div
                    key={i}
                    className="flex justify-between py-2 border-b border-white/20 hover:border-white/50 transition-colors last:border-b-0"
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
            <div className="bg-[#005A5A] p-5 rounded-full text-white shadow-lg mb-6 hover:scale-110 hover:bg-[#CFA45A] transition-all duration-300">
              <FaMap className="w-7 h-7" />
            </div>

            <h3 className="text-2xl font-bold text-[#005A5A] mb-2">
              Locate Our Offices
            </h3>
            <p className="text-[#4a5f5f] text-center max-w-xs mb-6">
              Navigate easily to our offices using Google Maps.
            </p>

            {/* Directions Button */}
            <Link
              href="https://maps.app.goo.gl/nM1UsyN5nj6JRR2a6?g_st=awb"
              target="_blank"
              className="flex items-center bg-[#005A5A] text-white py-3 px-7 rounded-xl shadow-md hover:bg-[#004746] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <FaDirections className="mr-2" />
              Get Directions
            </Link>

            {/* Google Map */}
            <div className="w-full h-64 mt-8 rounded-xl overflow-hidden shadow-inner bg-[#F2EDE3]">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3798.336088879149!2d31.040117000000002!3d-17.822872999999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1931a5ea94ef28cb%3A0x108f4607c7911e3e!2sAla%20Mode%20Boreholes!5e0!3m2!1sen!2szw!4v1774947698366!5m2!1sen!2szw" 
                className="w-full h-full"
                style={{ border: 0 }} 
                allowFullScreen={true}
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}