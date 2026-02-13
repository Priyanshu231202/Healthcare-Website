import { Button } from "@/components/ui/button";
import img1 from "@assets/Services/img1.webp";
import img2 from "@assets/Services/img2.webp";
import img3 from "@assets/Services/img3.webp";
import img4 from "@assets/Services/img4.webp";
import img5 from "@assets/Services/img5.webp";

export function Mission() {
  return (
    <section id="mission" className="py-24 bg-white">
      <div className="w-full px-4 md:px-8 lg:px-16 mb-16">
        <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
          <div className="max-w-3xl">
            <h2 className="text-5xl lg:text-6xl font-display font-medium text-accent leading-[1.1] mb-8">
              Guiding you toward better health
              <br />
              with expertise & empathy
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed max-w-2xl">
              We are a modern health and clinic center dedicated to delivering
              exceptional medical care with compassion, innovation, and
              integrity.
            </p>
          </div>
          <div className="mb-2">
            <Button className="bg-[#9fcd25] hover:bg-[#8cd660] text-black rounded-none px-8 py-6 text-sm font-semibold tracking-wide uppercase">
              <span className="mr-2">›</span>
              More About Us
            </Button>
          </div>
        </div>
      </div>

      {/* Full width scrolling image bannner or grid */}
      <div className="w-full overflow-hidden">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 h-[400px]">
          {[img1, img2, img3, img4, img5].map((img, index) => (
            <div
              key={index}
              className="relative h-full w-full group overflow-hidden"
            >
              <img
                src={img}
                alt={`Medical facility ${index + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
