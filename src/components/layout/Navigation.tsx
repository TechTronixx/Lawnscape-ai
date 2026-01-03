import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navigation = ({
  onNavigate,
}: {
  onNavigate: (view: "home" | "generator") => void;
}) => {
  const [isOpen, setIsOpen] = useState(false);

  // Helper to handle navigation
  const handleNav = (target: string, view: "home" | "generator") => {
    onNavigate(view);
    setIsOpen(false);
    // If it's an anchor link, allow smooth scroll after view switch
    if (target.startsWith("#")) {
      setTimeout(() => {
        const element = document.querySelector(target);
        element?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    }
  };

  const links = [
    { name: "Studio", href: "#", action: () => handleNav("#", "generator") },
    {
      name: "About",
      href: "#about",
      action: () => handleNav("#about", "home"),
    },
    {
      name: "Services",
      href: "#services",
      action: () => handleNav("#services", "home"),
    },
    {
      name: "Contact",
      href: "#contact",
      action: () => handleNav("#contact", "home"),
    },
  ];

  return (
    <>
      <div className="fixed top-6 left-0 w-full z-50 flex justify-center pointer-events-none">
        <nav className="w-[95%] max-w-6xl bg-white/5 backdrop-blur-3xl border border-white/20 rounded-full shadow-2xl pointer-events-auto transition-all duration-300">
          <div className="px-8 h-20 flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer"
              onClick={() => handleNav("#", "home")}
            >
              <img
                src="/LawnScape-Logo-Transparent.png"
                alt="LawnScape"
                className="h-12 md:h-14 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center gap-8"
            >
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-sm font-medium font-body text-zinc-900 hover:text-primary transition-colors uppercase tracking-wider"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-zinc-900 p-2"
            >
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-[#F4F4F0] pt-24 px-6 md:hidden"
          >
            <div className="flex flex-col gap-6">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="text-3xl font-display font-bold text-zinc-900 hover:text-primary text-left"
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
