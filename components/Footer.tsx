import Link from "next/link";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiClock2 } from "react-icons/ci";
import Image from "next/image";
import { FaMapMarkerAlt, FaEnvelope, FaPhoneAlt } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import message from "./message";

export default function Footer() {
  return (
    <footer className="bg-[#005A5A] text-white pt-20 pb-10 font-sans relative">
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

        {/* Logo & Description */}
        <div>
          <Link href="/" className="flex items-center mb-4">
            <Image src="/logo1.png" alt="Logo" width={110} height={90} className="object-contain" />
          </Link>
          <p className="text-white/80 leading-relaxed text-sm">
            Premium borehole drilling and water solutions. We deliver expert drilling with modern equipment and honest pricing.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Quick Links</h3>
          <ul className="space-y-3 text-sm">
            {[
              { name: "Home", href: "/" },
              { name: "About Us", href: "#about" },
              { name: "Services", href: "#services" },
              { name: "Contact Us", href: "#contact" },
            ].map((link, idx) => (
              <li key={idx}>
                <Link
                  href={link.href}
                  className="text-white/80 hover:text-[#CFA45A] transition duration-200"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Get In Touch</h3>

          <div className="space-y-4 text-sm">
            <Link href="https://maps.app.goo.gl/nM1UsyN5nj6JRR2a6?g_st=awb" className="flex items-start gap-3 text-white/80 hover:text-[#CFA45A] transition">
              <FaMapMarkerAlt className="text-[#CFA45A] text-xl flex-shrink-0 mt-1" />
               17 fife avenue, Harare
            </Link>

            <p className="flex items-start gap-3">
              <CiClock2 className="text-[#CFA45A] text-xl flex-shrink-0 mt-1" />
              Mon–Fri: 9am – 6pm <br />
              Sat: 10am – 2pm
            </p>

            <Link
              href="mailto:waterking2108@gmail.com"
              className="flex items-center gap-3 text-white/80 hover:text-[#CFA45A] transition"
            >
              <FaEnvelope className="text-[#CFA45A] text-xl flex-shrink-0" />
              waterking2108@gmail.com 
            </Link>

            <Link
              href="tel:+263772644663"
              className="flex items-center gap-3 text-white/80 hover:text-[#CFA45A] transition"
            >
              <FaPhoneAlt className="text-[#CFA45A] text-xl flex-shrink-0" />
              +263 772 644 663
            </Link>
          </div>
        </div>

        {/* Social Media */}
        <div>
          <h3 className="text-white font-bold text-lg mb-6 tracking-wide">Connect</h3>
          <div className="flex items-center gap-3">
            {[
              { icon: FaFacebookF, url: "https://www.facebook.com/" },
              { icon: FaInstagram, url: "https://www.instagram.com/" },
              { icon: FaWhatsapp, url: `https://wa.me/263772644663?text=${message}` },
            ].map((social, idx) => (
              <Link
                key={idx}
                href={social.url}
                target="_blank"
                className="
                  w-10 h-10 rounded-full
                  flex items-center justify-center
                  bg-white/10 text-white
                  hover:bg-[#CFA45A] hover:text-[#005A5A]
                  transition duration-200
                "
              >
                <social.icon size={18} />
              </Link>
            ))}
          </div>
        </div>

      </div>

      {/* Bottom */}
      <div className="max-w-7xl mx-auto px-6 mt-16 border-t border-white/20 pt-6 flex flex-col md:flex-row justify-between text-sm text-white/80">
        <p className="order-2 md:order-1 mt-4 md:mt-0">
          © {new Date().getFullYear()} Ala Mode Boreholes. All rights reserved.
        </p>
        {/* <div className="flex gap-6 order-1 md:order-2">
          <Link href="/privacy" className="hover:text-[#CFA45A] transition">Privacy Policy</Link>
          <Link href="/terms" className="hover:text-[#CFA45A] transition">Terms of Service</Link>
        </div> */}
      </div>

    </footer>
  );
}
