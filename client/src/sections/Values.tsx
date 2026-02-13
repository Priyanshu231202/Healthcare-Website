import { motion } from "framer-motion";
import { Plus, Heart, Stethoscope, ShieldCheck, UserPlus } from "lucide-react";
import valuesImg from "@assets/image.webp";

const values = [
  {
    id: "01",
    title: "Accurate Diagnosis",
    icon: Stethoscope,
  },
  {
    id: "02",
    title: "Promoting preventive health",
    icon: Plus,
  },
  {
    id: "03",
    title: "Ethical Practice",
    icon: ShieldCheck,
  },
  {
    id: "04",
    title: "Lifelong Support",
    icon: Heart,
  },
  {
    id: "05",
    title: "Compassionate Care",
    icon: UserPlus,
  },
];

export function Values() {
  return (
    <section className="bg-[#FAF9F6] py-24 overflow-hidden">
      {/* Scrolling Marquee Header */}
      <div className="mb-20 overflow-hidden w-full whitespace-nowrap">
        <motion.div
          className="flex whitespace-nowrap gap-8 text-[10vw] leading-none font-display font-medium text-gray-800 uppercase tracking-tighter"
          animate={{ x: "-50%" }}
          transition={{ repeat: Infinity, ease: "linear", duration: 20 }}
          style={{ willChange: "transform", transformStyle: "preserve-3d" }}
        >
          {/* Duplicated content for infinite scroll */}
          {[...Array(4)].map((_, i) => (
            <span key={i} className="flex items-center gap-8">
              Medical Solution <span className="text-4xl">✦</span> Clinic
              Service <span className="text-4xl">✦</span> Trusted Healthcare{" "}
              <span className="text-4xl">✦</span> Health Insight{" "}
              <span className="text-4xl">✦</span>
            </span>
          ))}
        </motion.div>
      </div>

      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row gap-20 items-stretch">
          {/* Left Image */}
          <div className="w-full lg:w-1/2">
            <div className="relative aspect-[4/5] rounded-none overflow-hidden group">
              <img
                src={valuesImg}
                alt="Doctors discussion"
                className="w-full h-full object-cover  transition-all duration-700"
              />
            </div>
          </div>

          {/* Right Content */}
          <div className="w-full lg:w-1/2 pt-8">
            <div className="mb-12">
              <p className="text-gray-500 mb-6 leading-relaxed">
                At Medenic, our mission is to deliver advance, and personalized
                healthcare that empowers individuals to happier lives.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We aim to be a trusted health partner through ethical practices,
                & a continuous commitment to patient well-being.
              </p>
            </div>

            <div className="grid grid-cols-1 divide-y divide-gray-200">
              {values.map((item) => (
                <div key={item.id} className="py-8 group cursor-pointer">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-8">
                      <span className="text-sm font-medium text-gray-400 font-mono">
                        {item.id}
                      </span>
                      <h3 className="text-2xl font-display font-medium text-gray-900 group-hover:text-primary transition-colors">
                        {item.title}
                      </h3>
                    </div>
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center group-hover:bg-[#9fcd25] group-hover:border-[#9fcd25] transition-all">
                      <item.icon className="w-5 h-5 text-gray-400 group-hover:text-black stroke-[1.5]" />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
