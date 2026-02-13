import { Phone, Send } from "lucide-react";
import { Button } from "@/components/ui/button";

export function Schedule() {
  return (
    <section id="schedule" className="py-24 bg-[#FAF9F6]">
      <div className="w-full px-4 md:px-8 lg:px-16 text-center">
        <div className="flex items-center justify-center gap-2 mb-4">
          <span className="text-lg font-bold">✦</span>
          <span className="font-semibold text-gray-900 tracking-tight text-sm uppercase">
            Schedule
          </span>
        </div>

        <h2 className="text-4xl md:text-5xl font-display font-medium text-gray-900 tracking-tight mb-12">
          Book Appointment Now
        </h2>

        <div className="flex flex-col gap-4 max-w-lg mx-auto">
          {/* Schedule a Call Button */}
          <div className="bg-white rounded-full p-2 pl-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <span className="font-medium text-lg text-gray-800">
              Schedule a Call
            </span>
            <div className="w-12 h-12 bg-[#B8E5F3] rounded-full flex items-center justify-center group-hover:bg-[#a1dbe9] transition-colors">
              <Phone className="w-5 h-5 text-gray-900" />
            </div>
          </div>

          {/* Send Message Button */}
          <div className="bg-white rounded-full p-2 pl-8 flex items-center justify-between shadow-sm hover:shadow-md transition-shadow cursor-pointer group">
            <span className="font-medium text-lg text-gray-800">
              Send us a Message
            </span>
            <div className="w-12 h-12 bg-[#B8E5F3] rounded-full flex items-center justify-center group-hover:bg-[#a1dbe9] transition-colors">
              <Send className="w-5 h-5 text-gray-900" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
