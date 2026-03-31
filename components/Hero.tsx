import React from 'react';
import Link from 'next/link';
import { FaWhatsapp } from 'react-icons/fa';
import { BsCheckCircleFill } from 'react-icons/bs';
import { IoCall } from 'react-icons/io5';
import message from './message';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[650px] bg-[#005A5A] flex items-center overflow-hidden font-sans">

      {/* Deep Luxury Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#005A5A] via-[#044843] to-[#003432] opacity-95" />

      <div className="container mx-auto px-6 lg:px-12 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">

          {/* Left Text Section */}
          <div className="text-white space-y-6">
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold leading-tight">
              Premium Borehole <br />
              Drilling & Water <br />
              Solutions You Can Trust
            </h1>

            <p className="text-white/80 text-lg max-w-lg leading-relaxed">
              Professional drilling, pump installations, testing, and maintenance —
              delivering reliable, clean water with unmatched precision.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
               <Link href={`https://wa.me/263772644663?text=${message}`} className="bg-[#005A5A] text-white hover:bg-[006A5A] font-semibold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
                  <FaWhatsapp className="text-xl" />
                  Request a Quote
              </Link>

              <Link href="tel:263772644663" className="bg-white text-[#005A5A] hover:bg-[#F2EDE3] font-semibold py-3 px-8 rounded-xl shadow-lg flex items-center justify-center gap-2 transition-all">
                <IoCall className="text-xl" />
                 Call Us Now
              </Link>
            </div>

            {/* Trust Badges */}
            <div className="flex flex-wrap items-center gap-4 text-sm text-white/75 pt-2">
              <span className="flex items-center gap-1">
                <BsCheckCircleFill className="text-[#CFA45A]" /> Free Site Inspection
              </span>
              <span>•</span>
              <span>Transparent Pricing</span>
              <span>•</span>
              <span>Professional Service</span>
            </div>
          </div>

          {/* Right Image Section */}
          <div className="relative">
            <div className="rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="/logo_big.jpeg"
                alt="Borehole Drilling Rig"
                className="w-full h-[420px] md:h-[500px] object-cover"
              />
            </div>

            {/* Floating Stats Card */}
            <div className="absolute -bottom-6 left-6 bg-white p-6 rounded-xl shadow-2xl border border-[#F2EDE3]">
              <h3 className="text-4xl font-extrabold text-[#005A5A]">500+</h3>
              <p className="text-gray-600 text-sm">Projects Completed</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
