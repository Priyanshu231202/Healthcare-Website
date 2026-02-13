import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import heroBg from "@assets/hero-image.webp";
import statsImg from "@assets/image_1770973576459.png";
import missionImg2 from "@assets/image_1770973553782.png";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/40 z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full pt-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-7xl lg:text-[7rem] font-display font-black text-white leading-[0.9] uppercase tracking-tighter mb-8"
            >
              Your Health,
              <br />
              Our True
              <br />
              Mission
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-xl text-white/90 max-w-lg leading-relaxed font-light mb-10"
            >
              We combine medical expertise with empathy in every patient
              interaction.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex items-stetch h-14"
            >
              {/* Arrow Box */}
              <div className="w-14 h-14 bg-[#9fcd25]/90 flex items-center justify-center cursor-pointer hover:bg-[#8cd660] transition-colors">
                <span className="text-xl font-bold">›</span>
              </div>
              {/* Text Box */}
              <div className="h-14 bg-[#9fcd25] flex items-center px-6 cursor-pointer hover:bg-[#8cd660] transition-colors">
                <span className="font-bold text-sm tracking-wide uppercase">
                  Our Services
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right side floating cards (positioned absolutely or grid) - replicating the subtle UI elements from reference */}
          <div className="relative h-full hidden lg:block">
            {/* Floating Card 1 */}
            <motion.div
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="absolute bottom-32 right-0 bg-white p-4 shadow-lg max-w-[280px]"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={statsImg}
                    alt="Doctor"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">"</div>
                  <p className="font-medium text-sm text-gray-800 leading-tight -mt-2">
                    Trusted professionals committed to your health.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Floating Card 2 */}
            <motion.div
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute bottom-8 right-12 bg-white p-4 shadow-lg max-w-[280px]"
            >
              <div className="flex gap-4">
                <div className="w-12 h-12 bg-gray-100 rounded-full overflow-hidden">
                  <img
                    src={missionImg2}
                    alt="Patient"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="text-2xl font-bold text-accent">"</div>
                  <p className="font-medium text-sm text-gray-800 leading-tight -mt-2">
                    Your well-being is our highest priority.
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Bottom Ticker/Service Bar */}
      <div className="absolute bottom-0 left-0 w-full bg-[#21467a] py-4 z-20 overflow-hidden">
        <motion.div
          className="flex whitespace-nowrap gap-8"
          animate={{ x: "-25%" }}
          transition={{
            repeat: Infinity,
            ease: "linear",
            duration: 20,
          }}
          style={{ width: "fit-content" }}
        >
          {/* First set */}
          {[
            "Diagnostics & Lab Testing",
            "Immunization Services",
            "Emergency Care",
            "Diagnostic Services",
            "General Medicine",
            "Surgical Services",
          ].map((service, i) => (
            <div
              key={`set1-${i}`}
              className="flex items-center gap-2 min-w-max px-4 text-white"
            >
              <span className="text-xl">✦</span>
              <span className="font-medium text-white uppercase tracking-wide text-sm">
                {service}
              </span>
            </div>
          ))}

          {/* Second set (Duplicate for loop) */}
          {[
            "Diagnostics & Lab Testing",
            "Immunization Services",
            "Emergency Care",
            "Diagnostic Services",
            "General Medicine",
            "Surgical Services",
          ].map((service, i) => (
            <div
              key={`set2-${i}`}
              className="flex items-center gap-2 min-w-max px-4 text-white"
            >
              <span className="text-xl">✦</span>
              <span className="font-medium text-white uppercase tracking-wide text-sm">
                {service}
              </span>
            </div>
          ))}

          {/* Third set (Extra safety for wide screens) */}
          {[
            "Diagnostics & Lab Testing",
            "Immunization Services",
            "Emergency Care",
            "Diagnostic Services",
            "General Medicine",
            "Surgical Services",
          ].map((service, i) => (
            <div
              key={`set3-${i}`}
              className="flex items-center gap-2 min-w-max px-4 text-white"
            >
              <span className="text-xl">✦</span>
              <span className="font-medium text-white uppercase tracking-wide text-sm">
                {service}
              </span>
            </div>
          ))}
          {/* Fourth set (Extra safety for wide screens) */}
          {[
            "Diagnostics & Lab Testing",
            "Immunization Services",
            "Emergency Care",
            "Diagnostic Services",
            "General Medicine",
            "Surgical Services",
          ].map((service, i) => (
            <div
              key={`set4-${i}`}
              className="flex items-center gap-2 min-w-max px-4 text-white"
            >
              <span className="text-xl">✦</span>
              <span className="font-medium text-white uppercase tracking-wide text-sm">
                {service}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
export default Hero;
