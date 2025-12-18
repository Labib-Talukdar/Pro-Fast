
import ServiceCard from "./ServiceCard";
import {services} from "./Services"

const ServicesSection = () => {
  return (
    <section className="py-16 bg-base-200">
      <div className="max-w-7xl mx-auto px-4 ">

        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our Services
          </h2>

          <p className="text-gray-600">
            Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle.
            From personal packages to business shipments — we deliver on time, every time.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesSection;
