import { useServices } from "@/hooks/use-services";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  Stethoscope,
  Activity,
  ShieldCheck,
  Truck,
  ArrowRight,
  LucideIcon,
} from "lucide-react";
import type { Service } from "@shared/schema";

// Map string icon names to components
const iconMap: Record<string, LucideIcon> = {
  surgical: Stethoscope,
  diagnostics: Activity,
  immunization: ShieldCheck,
  emergency: Truck,
};

// Map service titles to their pill tags
const tagMap: Record<string, string> = {
  "Surgical Services": "Primary Care",
  "Diagnostics & Lab Testing": "Health Screening",
  "Immunization Services": "Preventive Care",
  "Emergency Care": "Immediate Attention",
};

// Default services data matching the design
const defaultServices: Service[] = [
  {
    id: 1,
    title: "Surgical Services",
    description: "Comprehensive care focused on your overall well-being.",
    icon: "surgical",
  },
  {
    id: 2,
    title: "Diagnostics & Lab Testing",
    description: "Early detection routine screening improve health outcomes.",
    icon: "diagnostics",
  },
  {
    id: 3,
    title: "Immunization Services",
    description: "Immunization programs designed for lifelong protection.",
    icon: "immunization",
  },
  {
    id: 4,
    title: "Emergency Care",
    description: "Comprehensive healthcare for children, & adolescents.",
    icon: "emergency",
  },
];

export function Services() {
  const { data: services, isLoading: loadingServices } = useServices();

  // Use backend data if available, otherwise fallback to default mock data
  const displayServices =
    services && services.length > 0 ? services : defaultServices;

  return (
    <section id="services" className="py-24 bg-[#FFFCF8]">
      <div className="w-full px-4 md:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto mb-20">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mb-4"
          >
            <span className="text-lg font-bold">✚</span>
            <span className="font-semibold text-gray-900 tracking-tight text-sm uppercase">
              What We Do
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-display font-medium text-gray-900 tracking-tight"
          >
            Our Medical Services
          </motion.h2>
        </div>

        {loadingServices && !services ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((i) => (
              <div
                key={i}
                className="h-[400px] bg-white rounded-none border border-gray-100 animate-pulse"
              />
            ))}
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
              {displayServices.map((service, index) => {
                const Icon = iconMap[service.icon] || Activity;
                const tag = tagMap[service.title] || "Medical Care";

                return (
                  <motion.div
                    key={service.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    whileHover={{ y: -8 }}
                    className="p-8 border shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col items-start h-full group bg-white border-gray-100"
                  >
                    <span className="inline-block px-4 py-1 rounded-full border text-xs font-medium mb-6 bg-gray-50/50 border-gray-100 text-gray-500">
                      {tag}
                    </span>

                    <h3 className="text-xl font-bold font-display text-gray-900 mb-8 w-full border-b-0">
                      {service.title}
                    </h3>

                    {/* Icon container - clean, no visible box unless hovered/active if desired, but screenshot shows clean icon. Keeping it clean as per screenshot. */}
                    <div className="mb-6 text-gray-800 group-hover:text-[#9fcd25] transition-colors duration-300">
                      <Icon className="w-10 h-10 stroke-1" />
                    </div>

                    <p className="text-gray-500 text-sm leading-relaxed mb-8 flex-grow">
                      {service.description}
                    </p>

                    <div className="flex items-center gap-2 text-sm font-bold text-gray-900 transition-colors cursor-pointer mt-auto group-hover:text-[#9fcd25]">
                      View Service
                      <ArrowRight className="w-4 h-4 ml-1" />
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <div className="flex justify-center">
              <Button className="bg-[#9fcd25] hover:bg-[#8cd660] text-black rounded-none px-8 py-6 text-sm font-semibold tracking-wide uppercase">
                <span className="mr-2">›</span>
                View All Services
              </Button>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
