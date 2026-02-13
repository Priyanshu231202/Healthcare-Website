import { motion } from "framer-motion";
import { LucideIcon, Stethoscope, Activity, ShieldCheck, Truck } from "lucide-react";
import type { Service } from "@shared/schema";

// Map string icon names to components if needed, or use a default
const iconMap: Record<string, LucideIcon> = {
  "surgical": Stethoscope,
  "diagnostics": Activity,
  "immunization": ShieldCheck,
  "emergency": Truck
};

interface ServiceCardProps {
  service: Service;
  index: number;
}

export function ServiceCard({ service, index }: ServiceCardProps) {
  // Fallback to Activity icon if the string doesn't match
  const Icon = iconMap[service.icon] || Activity;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      whileHover={{ y: -5 }}
      className="bg-white p-8 rounded-2xl shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-50 group"
    >
      <div className="w-14 h-14 rounded-xl bg-secondary flex items-center justify-center text-primary mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      <h3 className="text-xl font-bold font-display text-gray-900 mb-3 group-hover:text-primary transition-colors">
        {service.title}
      </h3>
      <p className="text-gray-500 leading-relaxed">
        {service.description}
      </p>
    </motion.div>
  );
}
