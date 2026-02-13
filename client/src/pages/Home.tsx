import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { useDoctors } from "@/hooks/use-doctors";
import { useServices } from "@/hooks/use-services";
import { DoctorCard } from "@/components/DoctorCard";
import { ServiceCard } from "@/components/ServiceCard";
import { AppointmentForm } from "@/components/AppointmentForm";
import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

// Assets
import heroImg from "@assets/image_1770973515369.png";
import missionImg1 from "@assets/image_1770973542516.png";
import missionImg2 from "@assets/image_1770973553782.png";
import statsImg from "@assets/image_1770973576459.png";
import formSideImg from "@assets/image_1770973634255.png";

export default function Home() {
  const { data: doctors, isLoading: loadingDoctors } = useDoctors();
  const { data: services, isLoading: loadingServices } = useServices();

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-12 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8 relative z-10">
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-block px-4 py-1.5 rounded-full bg-secondary text-primary font-semibold text-sm tracking-wide"
              >
                WELCOME TO WELLSPIRE
              </motion.span>
              <motion.h1 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl lg:text-7xl font-display font-bold text-accent leading-[1.1]"
              >
                Your health,<br />
                <span className="text-primary">our true mission.</span>
              </motion.h1>
              <motion.p 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-gray-500 max-w-lg leading-relaxed"
              >
                We combine medical expertise with empathy in every patient interaction, ensuring you receive the care you deserve.
              </motion.p>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-wrap gap-4"
              >
                <Button className="bg-primary hover:bg-primary/90 text-white rounded-full px-8 py-6 text-lg h-auto shadow-lg shadow-primary/25">
                  Our Services
                </Button>
                <Button variant="outline" className="border-2 border-gray-200 hover:border-primary text-gray-700 hover:text-primary hover:bg-transparent rounded-full px-8 py-6 text-lg h-auto">
                  Learn More
                </Button>
              </motion.div>
            </div>
            
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden shadow-2xl">
                <img src={heroImg} alt="Medical Professional" className="w-full h-auto object-cover" />
                
                {/* Floating Card 1 */}
                <motion.div 
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="absolute bottom-8 left-8 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-white max-w-[200px]"
                >
                  <div className="flex gap-2 items-center mb-2">
                    <div className="w-2 h-2 rounded-full bg-green-500" />
                    <span className="text-xs font-bold text-gray-400 uppercase">Status</span>
                  </div>
                  <p className="font-bold text-sm text-gray-800">Trusted professionals committed to your health</p>
                </motion.div>

                {/* Floating Card 2 */}
                <motion.div 
                  initial={{ y: -20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 1 }}
                  className="absolute top-8 right-8 bg-primary/90 backdrop-blur p-4 rounded-xl shadow-lg border border-primary text-white max-w-[180px]"
                >
                   <p className="font-bold text-sm">Your well-being is our highest priority</p>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section id="mission" className="py-20 bg-gray-50/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="grid grid-cols-2 gap-4">
              <img src={missionImg1} alt="Clinic interior" className="rounded-2xl shadow-lg mt-8" />
              <img src={missionImg2} alt="Doctor with patient" className="rounded-2xl shadow-lg" />
            </div>
            <div className="space-y-6">
              <span className="text-primary font-bold tracking-wide uppercase text-sm">Our Mission</span>
              <h2 className="text-4xl lg:text-5xl font-display font-bold text-accent">
                Guiding you toward better health with expertise & empathy
              </h2>
              <p className="text-gray-500 text-lg leading-relaxed">
                We are a modern health and clinic center dedicated to delivering the highest quality medical care. Our team works together to ensure every patient feels heard, cared for, and supported on their journey to wellness.
              </p>
              <ul className="space-y-4 pt-4">
                {[
                  "State-of-the-art medical technology",
                  "Highly qualified team of specialists",
                  "Comprehensive patient care services",
                  "24/7 Emergency support available"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-primary w-5 h-5 flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Our Services</span>
            <h2 className="text-4xl font-display font-bold text-accent mt-2">Comprehensive Medical Care</h2>
            <p className="text-gray-500 mt-4 text-lg">
              We offer a wide range of medical services to cater to your specific health needs.
            </p>
          </div>

          {loadingServices ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-64 bg-gray-100 rounded-2xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {services?.map((service, index) => (
                <ServiceCard key={service.id} service={service} index={index} />
              ))}
              {(!services || services.length === 0) && (
                 <div className="col-span-4 text-center py-12 text-gray-400">
                    No services loaded. Please check backend seed data.
                 </div>
              )}
            </div>
          )}
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-accent text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/medical-icons.png')]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
             <div>
                <img src={statsImg} alt="Doctor smiling" className="rounded-3xl shadow-2xl border-4 border-white/10" />
             </div>
             <div className="lg:pl-12">
               <h2 className="text-4xl font-display font-bold mb-6">Numbers that speak of our excellence</h2>
               <p className="text-gray-300 mb-10 text-lg">
                 We take pride in our achievements and the trust our patients place in us.
               </p>
               <div className="grid grid-cols-2 gap-8">
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-primary mb-2">12k+</div>
                    <div className="text-gray-300">Patients Treated</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-primary mb-2">20+</div>
                    <div className="text-gray-300">Expert Doctors</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-primary mb-2">98%</div>
                    <div className="text-gray-300">Patient Satisfaction</div>
                  </div>
                  <div className="p-6 bg-white/5 rounded-2xl border border-white/10">
                    <div className="text-4xl font-bold text-primary mb-2">15+</div>
                    <div className="text-gray-300">Years Experience</div>
                  </div>
               </div>
             </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section id="doctors" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-primary font-bold tracking-wide uppercase text-sm">Our Team</span>
            <h2 className="text-4xl font-display font-bold text-accent mt-2">Meet Our Doctors</h2>
            <p className="text-gray-500 mt-4 text-lg">
              Experienced professionals dedicated to your recovery and well-being.
            </p>
          </div>

          {loadingDoctors ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
               {[1, 2, 3, 4].map(i => (
                <div key={i} className="h-96 bg-gray-200 rounded-3xl animate-pulse" />
              ))}
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {doctors?.map((doctor, index) => (
                <DoctorCard key={doctor.id} doctor={doctor} index={index} />
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Appointment Section */}
      <section id="appointment" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="bg-secondary/30 rounded-[40px] p-8 lg:p-12 overflow-hidden">
             <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div className="order-2 lg:order-1">
                  <AppointmentForm />
                </div>
                <div className="order-1 lg:order-2 flex flex-col justify-center text-center lg:text-left">
                   <h2 className="text-4xl font-display font-bold text-accent mb-4">Book Your Visit Today</h2>
                   <p className="text-gray-600 mb-8 text-lg">
                     Don't delay your health. Schedule a consultation with our experts. We are here to help you live a healthier life.
                   </p>
                   <div className="relative mx-auto lg:mx-0 w-full max-w-md aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl">
                      <img src={formSideImg} alt="Doctor scheduling" className="w-full h-full object-cover" />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8 text-white">
                         <div className="text-xl font-bold font-display">Need Help?</div>
                         <div>Call us: (555) 123-4567</div>
                      </div>
                   </div>
                </div>
             </div>
           </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
