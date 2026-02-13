const doctorsList = [
  {
    name: "Lavish Singh",
    specialty: "Pediatrics",
  },
  {
    name: "Priyanshu Singh",
    specialty: "Allergy & Immunology",
  },
  {
    name: "Abhinav Jha",
    specialty: "Gynecology",
  },
  {
    name: "Shyam Sunder",
    specialty: "Nephrology",
  },
  {
    name: "Abhishek Kumar",
    specialty: "Cardiology Specialist",
  },
];

export function Doctors() {
  return (
    <section id="doctors" className="py-24 bg-[#FAF9F6]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-20">
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-xl">✦</span>
            <span className="font-semibold text-gray-900 tracking-tight text-sm uppercase">
              Our Experts
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-display font-medium text-gray-900 tracking-tight">
            Meet Our Doctors
          </h2>
        </div>

        {/* List */}
        <div className="divide-y divide-gray-200 border-t border-b border-gray-200">
          {doctorsList.map((doctor, index) => (
            <div
              key={index}
              className="group py-12 flex flex-col md:flex-row items-baseline md:items-center justify-center relative cursor-pointer transition-colors hover:bg-white/50"
            >
              <div className="md:absolute md:left-0 md:w-1/3 text-right pr-12">
                <span className="text-sm text-gray-400 font-medium uppercase tracking-wide group-hover:text-gray-900 transition-colors">
                  {doctor.specialty}
                </span>
              </div>

              <div className="mx-auto text-center">
                <h3 className="text-4xl md:text-6xl lg:text-7xl font-display font-medium text-gray-400 group-hover:text-gray-900 transition-colors duration-300">
                  {doctor.name}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
