import { Link } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const links = [
    { label: "About Us", href: "#mission" },
    { label: "Services", href: "#services" },
    { label: "Doctors", href: "#doctors" },
    { label: "Contact", href: "#appointment" },
  ];

  return (
    <nav
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-gray-100 py-2"
          : "bg-transparent border-white/10 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link href="/">
            <div className="flex items-center gap-2 cursor-pointer">
              <span
                className={`font-display font-bold text-2xl tracking-tight transition-colors ${
                  isScrolled ? "text-gray-900" : "text-white"
                }`}
              >
                WellSpire
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`font-medium text-sm tracking-wide transition-colors duration-200 uppercase ${
                  isScrolled
                    ? "text-gray-600 hover:text-primary"
                    : "text-white hover:text-white/80"
                }`}
              >
                {link.label}
              </a>
            ))}
            <a href="#appointment">
              <Button
                className={`px-6 transition-colors ${
                  isScrolled
                    ? "bg-[#9fcd25] hover:bg-[#8cd660] text-black"
                    : "bg-transparent hover:bg-white/10 text-white border border-white/30"
                }`}
              >
                Book an Appointment <span className="ml-2">→</span>
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 transition-colors ${
                isScrolled ? "text-gray-600" : "text-white"
              }`}
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-gray-100 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block text-gray-600 hover:text-primary font-medium text-lg"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#appointment"
                onClick={() => setIsOpen(false)}
                className="block pt-2"
              >
                <Button className="w-full bg-primary hover:bg-primary/90 text-white rounded-full">
                  Book an Appointment
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
