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
        <nav className="w-auto min-w-[320px] bg-white/60 backdrop-blur-xl border border-primary/10 rounded-full shadow-lg pointer-events-auto transition-all duration-300 px-2 py-2">
          <div className="flex items-center gap-1">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center gap-2 cursor-pointer pr-4 pl-4 border-r border-primary/10"
              onClick={() => handleNav("#", "home")}
            >
              <img
                src="/LawnScape-Logo-Transparent.png"
                alt="LawnScape"
                className="h-10 w-auto object-contain"
              />
            </motion.div>

            {/* Desktop Links */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="hidden md:flex items-center"
            >
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="px-5 py-2 text-sm font-medium font-body text-zinc-600 hover:text-primary hover:bg-primary/5 rounded-full transition-all"
                >
                  {link.name}
                </button>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              className="pl-2 hidden md:block"
            >
              <button
                onClick={() => handleNav("#", "generator")}
                className="px-5 py-2 text-sm font-medium font-body bg-primary text-[#F4F4F0] rounded-full hover:bg-primary/90 transition-all shadow-md"
              >
                Get Started
              </button>
            </motion.div>

            {/* Mobile Toggle */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="md:hidden text-primary p-3 ml-auto rounded-full hover:bg-primary/5"
            >
              {isOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            className="fixed top-24 left-1/2 -translate-x-1/2 w-[90%] max-w-[320px] z-40 bg-white/90 backdrop-blur-xl border border-primary/10 rounded-2xl p-4 shadow-2xl md:hidden overflow-hidden"
          >
            <div className="flex flex-col gap-2">
              {links.map((link) => (
                <button
                  key={link.name}
                  onClick={link.action}
                  className="w-full text-center py-3 text-lg font-display text-zinc-600 hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                >
                  {link.name}
                </button>
              ))}
              <div className="h-px bg-primary/10 my-2" />
              <button
                onClick={() => handleNav("#", "generator")}
                className="w-full text-center py-3 text-lg font-display bg-primary text-[#F4F4F0] rounded-lg hover:bg-primary/90 transition-colors"
              >
                Get Started
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
