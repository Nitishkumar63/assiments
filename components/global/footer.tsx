import Image from "next/image";
import Link from "next/link";
import { Facebook, Linkedin, Phone, MapPin } from "lucide-react";

export default function Footer() {
  return (
    <footer className=" bg-[#18181B] pb-10 text-white overflow-hidden">
      {/* Background image behind content */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="relative space-y-4">
            {/* Background Image */}
            <Image
              src="/image/bg.svg"
              alt="bg"
              width={600}
              height={600}
              className="absolute top-0 object-cover"
            />

            {/* Content Overlay */}
            <div className="relative z-10 space-y-4 p-4 pt-10 md:py-15">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-sm">P</span>
                </div>
                <span className="text-xl font-bold">Pipepro</span>
              </div>

              <p className="text-gray-300 text-sm leading-relaxed text-pretty">
                Proin pretium sem libero, nec aliquet augue lobortis in.
                Phasellus nibh quam, molestie
              </p>

              <div className="flex gap-3">
                <Link
                  href="#"
                  aria-label="Visit Pipepro on Facebook"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Facebook className="w-4 h-4" />
                </Link>
                <Link
                  href="#"
                  aria-label="Visit Pipepro on Behance"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <span className="text-xs font-bold" aria-hidden="true">
                    Be
                  </span>
                  <span className="sr-only">Behance</span>
                </Link>
                <Link
                  href="#"
                  aria-label="Visit Pipepro on LinkedIn"
                  className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-gray-600 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-4 md:py-15">
            <h3 className="text-lg font-semibold">Services</h3>
            <ul className="space-y-2">
              {[
                "Drip Detectives",
                "Leak Stop Specialists",
                "Pipe Dream Team",
                "Rapid Repair Squad",
                "Clear Flow Plumbers",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="#"
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-4 md:py-15">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <ul className="space-y-2">
              {["About Us", "Blog", "Testimonials", "Faqs", "Contact Us"].map(
                (link) => (
                  <li key={link}>
                    <Link
                      href="#"
                      className="text-gray-400 hover:text-white transition-colors text-sm"
                    >
                      {link}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4 md:py-15">
            <h3 className="text-lg font-semibold">Contact Info</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <Phone className="w-4 h-4 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Call Now</p>
                  <p className="text-gray-400 text-sm">+125 (895) 658 568</p>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                  <MapPin className="w-4 h-4 text-gray-300" />
                </div>
                <div>
                  <p className="text-sm font-medium">Office Address</p>
                  <p className="text-gray-400 text-sm">
                    66 Broklyant, New India
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-gray-400 text-sm">
              © Pipepro 2024 | All Rights Reserved
            </p>
            <div className="flex gap-6">
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy &amp; Policy
              </Link>
              <Link
                href="#"
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms and Conditions
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
