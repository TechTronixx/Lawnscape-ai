import React from "react";
import { motion } from "framer-motion";

export function HowItWorks() {
  return (
    <section className="relative w-full max-w-[1800px] mx-auto px-6 py-24 sm:py-32">
      {/* Header */}
      <div className="flex flex-col md:flex-row gap-6 items-start md:items-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-5xl sm:text-6xl lg:text-7xl leading-[0.9] text-primary font-display font-medium tracking-tighter"
        >
          How it works.
        </motion.h2>
        <div className="hidden md:block w-px bg-primary/20 h-16 mx-4"></div>
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-sm sm:text-base text-zinc-600 font-body max-w-xs"
        >
          Three simple steps to automate your landscape visualization.
        </motion.p>
      </div>

      <div className="h-px bg-primary/20 w-full mb-12"></div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        {/* STEP 1 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="lg:col-span-4 bg-white border border-primary/10 rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
        >
          <span className="absolute -top-4 left-8 inline-flex items-center px-4 py-1.5 rounded-full border border-primary/10 bg-[#F4F4F0] text-xs font-mono tracking-widest text-primary uppercase">
            Step 01
          </span>

          {/* Visual */}
          <div className="relative h-48 sm:h-56 rounded-2xl bg-[#F4F4F0] border border-primary/10 overflow-hidden mb-8 group-hover:bg-[#EAEAE5] transition-colors">
            <div className="absolute inset-0 p-6 flex items-center justify-center">
              {/* Mock UI for Upload */}
              <div className="bg-white/90 border border-primary/10 rounded-xl p-4 w-full shadow-sm max-w-[240px]">
                <div className="flex items-center gap-2 mb-3">
                  <div className="h-2 w-24 bg-primary/80 rounded-full"></div>
                </div>
                <div className="h-32 border-2 border-dashed border-primary/20 rounded-lg flex items-center justify-center bg-zinc-50">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-primary/40"
                  >
                    <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path>
                    <polyline points="17 8 12 3 7 8"></polyline>
                    <line x1="12" y1="3" x2="12" y2="15"></line>
                  </svg>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-zinc-900 font-display mb-3">Snap</h3>
          <p className="text-zinc-600 font-body leading-relaxed text-pretty">
            Upload a photo of the existing site. Our AI reads the terrain
            instantly.
          </p>
        </motion.div>

        {/* STEP 2 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="lg:col-span-4 bg-white border border-primary/10 rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
        >
          <span className="absolute -top-4 left-8 inline-flex items-center px-4 py-1.5 rounded-full border border-primary/10 bg-[#F4F4F0] text-xs font-mono tracking-widest text-primary uppercase">
            Step 02
          </span>

          {/* Visual */}
          <div className="relative h-48 sm:h-56 rounded-2xl bg-gradient-to-br from-[#F4F4F0] to-[#EAEAE5] border border-primary/10 overflow-hidden mb-8 p-6 group-hover:from-[#EAEAE5] group-hover:to-[#dcdcd7] transition-colors">
            <div className="bg-white/90 border border-primary/10 rounded-xl p-4 w-full shadow-sm h-full flex flex-col justify-center gap-3">
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-red-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-yellow-400/40"></div>
                <div className="w-2 h-2 rounded-full bg-green-400/40"></div>
              </div>
              <div className="space-y-2">
                <div className="h-2 w-3/4 bg-zinc-100 rounded-full"></div>
                <div className="h-2 w-full bg-zinc-100 rounded-full"></div>
                <div className="p-2 bg-primary/5 rounded border-l-2 border-primary mt-2">
                  <p className="text-[10px] text-primary font-mono leading-tight">
                    "Tuscan villa garden with olive trees..."
                  </p>
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-zinc-900 font-display mb-3">Prompt</h3>
          <p className="text-zinc-600 font-body leading-relaxed text-pretty">
            Describe your vision. 'Tuscan villa garden with olive trees'
          </p>
        </motion.div>

        {/* STEP 3 */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="lg:col-span-4 bg-white border border-primary/10 rounded-[28px] p-6 sm:p-8 relative h-full flex flex-col hover:border-primary/30 hover:shadow-lg transition-all duration-300 group"
        >
          <span className="absolute -top-4 left-8 inline-flex items-center px-4 py-1.5 rounded-full border border-primary/10 bg-[#F4F4F0] text-xs font-mono tracking-widest text-primary uppercase">
            Step 03
          </span>

          {/* Visual */}
          <div className="relative h-48 sm:h-56 rounded-2xl bg-[#F4F4F0] border border-primary/10 overflow-hidden mb-8 group-hover:bg-[#EAEAE5] transition-colors">
            <div className="absolute inset-0 p-4">
              <div className="w-full h-full rounded-xl overflow-hidden relative">
                <img
                  src="https://images.unsplash.com/photo-1598902108854-10e335adac99?q=80&w=800&auto=format&fit=crop"
                  alt="Rendered Result"
                  className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute bottom-3 right-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-mono text-primary font-medium border border-primary/10">
                  RENDER COMPLETE
                </div>
              </div>
            </div>
          </div>

          <h3 className="text-3xl text-zinc-900 font-display mb-3">
            Visualize
          </h3>
          <p className="text-zinc-600 font-body leading-relaxed text-pretty">
            Generate high-fidelity renders to communicate your design intent
            instantly.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
