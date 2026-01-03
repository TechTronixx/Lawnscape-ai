import { useState } from "react";
import { Shell } from "./components/layout/Shell";
import { Navigation } from "./components/layout/Navigation";
import { Generator } from "./views/Generator";
import { ComparisonSlider } from "./components/ui/ComparisonSlider";
import { motion, AnimatePresence } from "framer-motion";

function App() {
  const [view, setView] = useState<"home" | "generator">("home");

  return (
    <Shell>
      <Navigation onNavigate={setView} />

      <main className="flex-1 flex flex-col min-h-screen pt-0">
        <AnimatePresence mode="wait">
          {view === "home" && (
            <div className="relative flex flex-col w-full">
              {/* Hero */}
              <div className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden">
                <div className="absolute inset-0 z-0 pointer-events-none">
                  <div className="absolute inset-0 bg-linear-to-b from-[#F4F4F0]/10 via-[#F4F4F0]/40 to-[#F4F4F0] z-10" />

                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover opacity-100"
                  >
                    <source src="/Land_View-Hero.mp4" type="video/mp4" />
                  </video>
                </div>

                <div className="max-w-[1800px] mx-auto w-full relative z-20 pt-32 pb-24">
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <div className="w-16 h-px bg-zinc-900 mb-12"></div>

                    <h1 className="text-6xl md:text-9xl font-display font-bold leading-[0.9] tracking-tighter mb-12 text-zinc-900 max-w-7xl text-pretty">
                      The New Standard for
                      <span className="block text-primary opacity-90">
                        Landscape Visualization.
                      </span>
                    </h1>

                    <div className="flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <button
                        onClick={() => setView("generator")}
                        className="group relative inline-flex items-center gap-4 px-10 py-5 bg-zinc-900 text-[#F4F4F0] overflow-hidden transition-all hover:bg-primary rounded-full shadow-2xl"
                      >
                        <span className="relative z-10 font-display text-xl tracking-wide">
                          Compose Vision
                        </span>
                        <span className="absolute right-6 opacity-0 group-hover:opacity-100 transition-all duration-300 transform group-hover:translate-x-0 -translate-x-2">
                          →
                        </span>
                      </button>
                      <p className="text-zinc-600 font-body text-sm max-w-xs leading-relaxed border-l border-zinc-300 pl-4">
                        The intelligent visualization tool for the modern
                        architectural studio.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>

              {/* Selected Works */}
              <div className="w-full bg-linear-to-b from-[#F4F4F0] to-white px-6 py-24 border-b border-primary/10">
                <div className="max-w-[1800px] mx-auto">
                  <div className="flex justify-between items-end mb-12">
                    <h2 className="text-4xl font-display font-medium text-primary text-pretty tracking-tight">
                      Selected Works
                    </h2>
                    <a
                      href="#"
                      className="hidden md:block text-sm font-mono uppercase tracking-widest text-muted-foreground hover:text-primary transition-colors"
                    >
                      View All Archive
                    </a>
                  </div>

                  <div className="grid md:grid-cols-3 gap-8">
                    {[
                      {
                        title: "Villa Ascenti",
                        loc: "Tuscany, Italy",
                        img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=800&auto=format&fit=crop",
                      },
                      {
                        title: "Kyoto Retreat",
                        loc: "Kyoto, Japan",
                        img: "https://images.squarespace-cdn.com/content/v1/674bbab9cd4a1b3a64fa3678/1733095656226-EEBSK0XK6Z07XNMMQ86B/unsplash-image-jUxMsNZZCJ8.jpg",
                      },
                      {
                        title: "Palm Springs Modern",
                        loc: "California, USA",
                        img: "https://images.ctfassets.net/wlzmdirin2hy/3ty7PtLfNs6wjMaUYUuepw/1d95221979a9500a99fca61209ca3398/LX_LA89_HOM_Brunetz_La_Estrella_Front_1.jpg?w=3840&q=100",
                      },
                    ].map((item, i) => (
                      <div key={i} className="group cursor-pointer">
                        <div className="aspect-4/5 overflow-hidden rounded-md mb-4 bg-gray-100 relative">
                          <img
                            src={item.img}
                            alt={item.title}
                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                          />
                          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                        </div>
                        <h3 className="text-xl font-display text-primary">
                          {item.title}
                        </h3>
                        <p className="text-xs font-mono uppercase text-muted-foreground mt-1">
                          {item.loc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Value Props */}
              <div className="w-full bg-[#EAEAE5] px-6 py-32">
                <div className="max-w-[1800px] mx-auto">
                  <h2 className="text-4xl md:text-5xl font-display font-medium text-center mb-24 text-primary text-pretty tracking-tight">
                    Elevate Your Proposals with Crystal Clear Visualization.
                  </h2>
                  <div className="grid md:grid-cols-3 gap-12 text-center">
                    {[
                      "Clarity for Clients",
                      "Streamlined Approvals",
                      "Winning Confidence",
                    ].map((benefit, i) => (
                      <div key={i} className="space-y-4">
                        <div className="w-full h-px bg-primary/20 mb-8" />
                        <h3 className="text-2xl font-body text-zinc-800">
                          {benefit}
                        </h3>
                        <p className="text-muted font-light">
                          {i === 0 &&
                            "Replace 2D confusion with immersive reality."}
                          {i === 1 &&
                            "Reduce revision cycles by getting alignment instantly."}
                          {i === 2 &&
                            "Present with the authority of a dedicated visualization team."}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Comparison Demo */}
              <div className="w-full bg-white px-6 py-32">
                <div className="max-w-[1200px] mx-auto text-center space-y-12">
                  <h2 className="text-3xl font-display italic text-primary text-pretty">
                    "Drag the Slider to See the Transformation"
                  </h2>
                  <div className="aspect-video">
                    <ComparisonSlider
                      beforeImage="https://images.unsplash.com/photo-1599809272520-27f2f68d6d88?q=80&w=1200&auto=format&fit=crop"
                      afterImage="https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&w=1200&auto=format&fit=crop"
                    />
                  </div>
                </div>
              </div>

              {/* How it Works */}
              <div className="w-full max-w-[1800px] mx-auto px-6 py-32">
                <div className="mb-24 text-center">
                  <h2 className="text-5xl font-display font-medium text-primary mb-6 text-pretty tracking-tight">
                    Snap, Prompt, and Sell.
                  </h2>
                  <p className="text-xl font-light text-zinc-600 font-display italic">
                    No Design Skills Required.
                  </p>
                </div>

                <div className="grid md:grid-cols-3 gap-12">
                  {[
                    {
                      step: "01",
                      title: "Snap",
                      desc: "Upload a photo of the existing site. Our AI reads the terrain instantly.",
                    },
                    {
                      step: "02",
                      title: "Prompt",
                      desc: "Describe your vision. 'Tuscan villa garden with olive trees.'",
                    },
                    {
                      step: "03",
                      title: "Sell",
                      desc: "Present a high-fidelity render that signs the deal on the spot.",
                    },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="group border-t border-primary/20 pt-10 hover:bg-white/50 transition-all duration-500"
                    >
                      <div className="text-xs font-mono text-primary mb-8 tracking-widest">
                        STEP {item.step}
                      </div>
                      <h3 className="text-3xl font-display mb-4">
                        {item.title}
                      </h3>
                      <p className="text-zinc-600 font-light leading-relaxed">
                        {item.desc}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Comparison Stats */}
              <div className="w-full bg-primary text-[#F4F4F0] px-6 py-32">
                <div className="max-w-[1800px] mx-auto">
                  <h2 className="text-5xl font-display text-center mb-24 leading-tight text-pretty tracking-tight">
                    Faster Than CAD.
                    <br />
                    Cheaper Than Outsourcing.
                    <br />
                    Better Than Sketches.
                  </h2>
                </div>
              </div>

              {/* ROI */}
              <div className="w-full bg-[#F4F4F0] px-6 py-32 border-b border-primary/10">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <span className="text-sm font-mono uppercase tracking-widest text-primary">
                    Return on Investment
                  </span>
                  <h2 className="text-6xl md:text-7xl font-display text-primary text-pretty tracking-tight">
                    Pays for Itself With Just One Signed Proposal.
                  </h2>
                </div>
              </div>

              {/* Testimonials */}
              <div className="w-full bg-white px-6 py-24">
                <div className="max-w-3xl mx-auto text-center">
                  <p className="text-2xl md:text-3xl font-display italic text-zinc-800 leading-relaxed mb-8 text-pretty">
                    "Since using Landscape AI, we've increased our close rates
                    by 40%. Clients love seeing the vision immediately."
                  </p>
                  <div className="text-sm font-mono uppercase tracking-widest text-primary">
                    — Shamil Hameed, Milan
                  </div>
                </div>
              </div>

              {/* General Sections */}
              <div
                id="about"
                className="w-full bg-[#EAEAE5] px-6 py-32 border-t border-primary/10"
              >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <span className="text-sm font-mono uppercase tracking-widest text-primary">
                    Our Philosophy
                  </span>
                  <h2 className="text-4xl md:text-5xl font-display font-medium text-primary text-pretty tracking-tight">
                    Heritage Meets Innovation.
                  </h2>
                  <p className="text-zinc-600 font-light leading-relaxed max-w-2xl mx-auto">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>

              <div id="services" className="w-full bg-white px-6 py-32">
                <div className="max-w-[1800px] mx-auto">
                  <div className="grid md:grid-cols-2 gap-16 items-center">
                    <div className="space-y-8">
                      <span className="text-sm font-mono uppercase tracking-widest text-primary">
                        Services
                      </span>
                      <h2 className="text-4xl md:text-5xl font-display font-medium text-zinc-900 text-pretty tracking-tight">
                        Comprehensive Design Intelligence.
                      </h2>
                      <ul className="space-y-6">
                        {[
                          "Residential Planning",
                          "Commercial Landscapes",
                          "Urban integration",
                          "Botanical Curation",
                        ].map((service) => (
                          <li
                            key={service}
                            className="flex items-center gap-4 text-xl font-display text-zinc-700"
                          >
                            <div className="w-2 h-2 rounded-full bg-primary" />
                            {service}
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="aspect-square bg-zinc-100 rounded-2xl overflow-hidden relative group cursor-pointer">
                      <img
                        src="https://snipboard.io/u8HjDm.jpg"
                        alt="Services"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                    </div>
                  </div>
                </div>
              </div>

              <div
                id="contact"
                className="w-full bg-zinc-900 text-[#F4F4F0] px-6 py-32"
              >
                <div className="max-w-4xl mx-auto text-center space-y-8">
                  <h2 className="text-4xl md:text-5xl font-display font-medium text-pretty tracking-tight">
                    Start Your Transformation.
                  </h2>
                  <p className="text-zinc-400 font-light text-xl">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                  <a
                    href="mailto:hello@lawnscape.ai"
                    className="inline-block text-3xl md:text-5xl font-mono underline decoration-primary decoration-2 underline-offset-8 hover:text-primary transition-colors"
                  >
                    hello@lawnscape.ai
                  </a>
                </div>
              </div>

              {/* Final CTA */}
              <div className="w-full bg-[#EAEAE5] py-32 px-6 text-center">
                <h2 className="text-5xl md:text-7xl font-display font-medium mb-12 text-primary opacity-90 text-pretty tracking-tight">
                  Upload Your First Project Photo for Free Today.
                </h2>
                <button
                  onClick={() => setView("generator")}
                  className="inline-flex items-center gap-3 px-10 py-5 bg-primary text-white font-display italic text-xl rounded-full hover:bg-[#3A4A38] transition-colors shadow-lg"
                >
                  Start Drafting
                </button>
              </div>
            </div>
          )}
          {view === "generator" && (
            <motion.div
              key="generator"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="flex-1 w-full"
            >
              <Generator />
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </Shell>
  );
}

export default App;
