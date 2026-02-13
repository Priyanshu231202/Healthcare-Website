import { useRef, useEffect } from "react";
import { Users, UserCheck, Star } from "lucide-react";
import { useInView, useMotionValue, useSpring, motion } from "framer-motion";

function Counter({
  value,
  suffix = "",
  duration = 2,
}: {
  value: number;
  suffix?: string;
  duration?: number;
}) {
  const ref = useRef<HTMLSpanElement>(null);
  const motionValue = useMotionValue(0);
  const springValue = useSpring(motionValue, {
    damping: 50,
    stiffness: 100,
  });
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  useEffect(() => {
    if (isInView) {
      motionValue.set(value);
    }
  }, [isInView, value, motionValue]);

  useEffect(() => {
    // Set initial content immediately
    if (ref.current) {
      // If we are already at the target, show it (e.g. if reduced motion)
      // otherwise show 0.
      if (springValue.get() === 0) {
        ref.current.textContent = "0" + suffix;
      }
    }

    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Math.floor(latest).toLocaleString() + suffix;
      }
    });

    return unsubscribe;
  }, [springValue, suffix]);

  return <span ref={ref} />;
}

export function Stats() {
  return (
    <section className="flex flex-col lg:flex-row min-h-[400px]">
      {/* Left Section - Light */}
      <div className="flex-1 bg-[#FAF9F6] p-12 lg:p-24 flex flex-col justify-between">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-gray-600 font-medium text-lg">
            Patients Treated Successfully
          </p>
          <h2 className="text-6xl md:text-7xl font-bold text-gray-900 tracking-tight mb-4">
            <Counter value={0} />
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-gray-500 max-w-md mt-12 lg:mt-0 leading-relaxed text-sm"
        >
          Over the years, Medenic has become a trusted name in healthcare,
          serving thousands of patients across all age groups and health
          conditions.
        </motion.p>
      </div>

      {/* Right Section - Dark Blue */}
      <div className="flex-1 bg-[#21467a] text-white p-12 lg:p-24 flex flex-col justify-center">
        {/* Stat 1 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex items-start justify-between mb-12"
        >
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <Counter value={5} /> Doctors
            </h3>
            <p className="text-white/80 text-sm">
              Qualified Healthcare Professionals
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <Star className="w-6 h-6 mb-1 mx-auto text-white fill-current opacity-20" />
              <Users className="w-10 h-10 text-white stroke-[1.5]" />
            </div>
          </motion.div>
        </motion.div>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="w-full h-px bg-white/10 mb-12 origin-left"
        />

        {/* Stat 2 */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="flex items-start justify-between"
        >
          <div>
            <h3 className="text-4xl font-bold mb-2">
              <Counter value={100} suffix="%" /> Satisfaction
            </h3>
            <p className="text-white/80 text-sm">
              Nearly all patients satisfied.
            </p>
          </div>
          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="flex flex-col items-center"
          >
            <div className="relative">
              <div className="flex justify-center gap-1 mb-1">
                <Star className="w-3 h-3 text-white fill-white" />
                <Star className="w-4 h-4 text-white fill-white -mt-2" />
                <Star className="w-3 h-3 text-white fill-white" />
              </div>
              <UserCheck className="w-10 h-10 text-white stroke-[1.5]" />
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
