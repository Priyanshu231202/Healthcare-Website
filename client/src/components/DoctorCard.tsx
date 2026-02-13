import { motion } from "framer-motion";
import type { Doctor } from "@shared/schema";
import { Linkedin, Twitter, Facebook } from "lucide-react";

interface DoctorCardProps {
  doctor: Doctor;
  index: number;
}

export function DoctorCard({ doctor, index }: DoctorCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="group relative bg-white rounded-3xl overflow-hidden shadow-soft hover:shadow-xl transition-all duration-300 border border-gray-100"
    >
      <div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
        <img 
          src={doctor.imageUrl} 
          alt={doctor.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        
        {/* Social Overlay */}
        <div className="absolute inset-0 bg-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
          <button className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
            <Facebook className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
            <Twitter className="w-5 h-5" />
          </button>
          <button className="p-2 bg-white rounded-full text-primary hover:bg-gray-100 transition-colors">
            <Linkedin className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="p-6 text-center">
        <h3 className="text-xl font-bold font-display text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-primary font-medium">{doctor.specialty}</p>
        {doctor.bio && (
          <p className="mt-3 text-sm text-gray-500 line-clamp-2">{doctor.bio}</p>
        )}
      </div>
    </motion.div>
  );
}
