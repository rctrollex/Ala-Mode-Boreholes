import Image from "next/image";
import Link from "next/link";
import MobileNav from "./MobileNav";
import message from "./message";

export default function Navbar() {
  const navLinks = [
    { href: "/", label: "Home" },
    { href: "#about", label: "About Us" },
    { href: "#services", label: "Services" },
    { href: "#contact", label: "Contact Us" },
  ];

  return (
    <nav className="z-50 sticky top-0 bg-white/90 backdrop-blur-xl border-b border-[#F2EDE3] shadow-sm">
      <div className="max-w-7xl mx-auto px-4">
        
        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center justify-between ">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/logo1.png"
              alt="Ala Mode Boreholes Logo"
              width={90}
              height={55}
              className="object-contain"
            />
          </Link>

          {/* Nav Links */}
          <div className="flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[#005A5A] font-medium text-[16px] tracking-wide hover:text-[#CFA45A] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}

            {/* CTA Button */}
            <Link
              href={`https://wa.me/263772644663?text=${message}`}
              className="
                px-6 py-3 rounded-xl 
                font-semibold tracking-wide
                text-white 
                bg-[#005A5A] 
                hover:bg-[#004848] 
                transition-all duration-300
                shadow-sm hover:shadow-md
              "
            >
              Request a Quote
            </Link>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className="flex lg:hidden">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
}
