import { Link } from "wouter";
import { Twitter, Youtube, Linkedin, MoveRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Footer() {
  return (
    <footer className="bg-[#FAF9F6] text-gray-900 border-t border-gray-200">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row">
          {/* Left Section: Brand & Info */}
          <div className="lg:w-1/3 py-16 lg:pr-16 border-b lg:border-b-0 lg:border-r border-gray-200 relative">
            <div className="flex items-center gap-2 mb-6">
              <div className="w-8 h-8 rounded bg-black flex items-center justify-center text-white">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="2"
                    y="2"
                    width="9"
                    height="9"
                    stroke="white"
                    strokeWidth="2"
                  />
                  <rect
                    x="8"
                    y="8"
                    width="14"
                    height="14"
                    rx="2"
                    stroke="white"
                    strokeWidth="2"
                  />
                </svg>
              </div>
              <span className="font-display font-bold text-2xl tracking-tight">
                Wellspire
              </span>
            </div>

            <p className="text-gray-500 text-sm leading-relaxed mb-6 max-w-sm">
              Health & Clinic is dedicated to providing respectful expert led,
              compassionate healthcare for families.
            </p>

            <p className="text-gray-500 text-sm mb-10">
              2118 West Patel nagar Kalinga Chowk
            </p>

            <a href="#schedule">
              <Button className="bg-[#21467a] hover:bg-[#21468a] text-white rounded-none px-6 py-6 font-semibold uppercase tracking-wide text-xs w-full sm:w-auto">
                <span className="mr-2">›</span>
                Book Appointment
              </Button>
            </a>
          </div>

          {/* Right Section: Navigation Grid */}
          <div className="lg:w-2/3 grid grid-cols-2">
            {/* Column 1 */}
            <div className="border-r border-gray-200">
              {[
                { name: "About Us", href: "#mission" },
                { name: "Services", href: "#services" },
                { name: "Blogs", href: "#" },
                { name: "Doctors", href: "#doctors" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-200 py-6 pl-8 lg:pl-12"
                >
                  <a
                    href={item.href}
                    className="font-bold text-sm tracking-wide uppercase hover:text-[#9fcd25] transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>

            {/* Column 2 */}
            <div>
              {[
                { name: "Appointment", href: "#schedule" },
                { name: "Contact Us", href: "#schedule" },
                { name: "Licensing", href: "#" },
                { name: "Changelog", href: "#" },
              ].map((item) => (
                <div
                  key={item.name}
                  className="border-b border-gray-200 py-6 pl-8 lg:pl-12"
                >
                  <a
                    href={item.href}
                    className="font-bold text-sm tracking-wide uppercase hover:text-[#9fcd25] transition-colors"
                  >
                    {item.name}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 py-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 gap-4">
          <div>
            © {new Date().getFullYear()} Wellspire. Designed by WeGrow Consultancy & Solution
           
          </div>

          <div className="flex gap-6">
            <a href="#" className="hover:text-black transition-colors">
              <Youtube className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <Twitter className="w-5 h-5" />
            </a>
            <a href="#" className="hover:text-black transition-colors">
              <Linkedin className="w-5 h-5" />
            </a>
          </div>

          <div className="flex gap-8">
            <a
              href="mailto:info@example.com"
              className="hover:text-black transition-colors"
            >
              info@example.com
            </a>
            <a
              href="tel:+1234567890"
              className="hover:text-black transition-colors font-mono"
            >
              +(123) 456-7890
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
